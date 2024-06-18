const canvasElement = document.getElementById('canvas');
const computedStyle = getComputedStyle(canvasElement);
const widthValue = computedStyle.width;
const heightValue = computedStyle.height;

// 数値に変換
const numericWidthValue = parseFloat(widthValue); 
const numericHeightValue = parseFloat(heightValue); 

// 画面の幅と高さ
const FIELD_WIDTH = numericWidthValue;
const FIELD_HEIGHT = numericHeightValue-100;

// 自機、敵、弾丸の幅と高さ
const PLAYER_WIDTH = 44;
const PLAYER_HEIGHT = 46;
 
const ENEMY_WIDTH = 24;
const ENEMY_HEIGHT = 28;
 
const BULLET_WIDTH = 14;
const BULLET_HEIGHT = 14;
 
const SPARK_WIDTH = 25;
const SPARK_HEIGHT = 28;
 
// 弾丸のスピード
const BULLET_SPEED = 8;

let game_score = getScore(2);
 
let $start = document.getElementById('start');
 
let isPlaying = false; // ゲーム中かどうか？
let shooting_score = 0; // スコア
let playCount = 0; // プレイ回数
 
let img = new Image();
img.src = "./image.png";
 
let canvas = document.getElementById("canvas");
 
var ctx = canvas.getContext("2d");

canvas.width = FIELD_WIDTH;
canvas.height = FIELD_HEIGHT;

// 戦闘機（プレーヤー）を描画する
function DrawPlayer(centerX, centerY){
    let x = centerX - PLAYER_WIDTH / 2;
    let y = centerY - PLAYER_HEIGHT / 2;
    ctx.drawImage(img, 57, 1, PLAYER_WIDTH, PLAYER_HEIGHT, x, y, PLAYER_WIDTH, PLAYER_HEIGHT);
}
 
// 黄色のひよこを描画する
function DrawEnemy1(centerX, centerY){
    let x = centerX - ENEMY_WIDTH / 2;
    let y = centerY - ENEMY_HEIGHT / 2;
    ctx.drawImage(img, 4, 61, ENEMY_WIDTH, ENEMY_HEIGHT, x, y, ENEMY_WIDTH, ENEMY_HEIGHT);
}
 
// ピンク色のひよこを描画する
function DrawEnemy2(centerX, centerY){
    let x = centerX - ENEMY_WIDTH / 2;
    let y = centerY - ENEMY_HEIGHT / 2;
    ctx.drawImage(img, 4, 94, ENEMY_WIDTH, ENEMY_HEIGHT, x, y, ENEMY_WIDTH, ENEMY_HEIGHT);
}
 
// 青色のひよこを描画する
function DrawEnemy3(centerX, centerY){
    let x = centerX - ENEMY_WIDTH / 2;
    let y = centerY - ENEMY_HEIGHT / 2;
    ctx.drawImage(img, 4, 125, ENEMY_WIDTH, ENEMY_HEIGHT, x, y, ENEMY_WIDTH, ENEMY_HEIGHT);
}
 
// 弾丸(敵)を描画する
function DrawBullet1(centerX, centerY){
    let x = centerX - BULLET_WIDTH / 2;
    let y = centerY - BULLET_HEIGHT / 2;
    ctx.drawImage(img, 41, 46, BULLET_WIDTH, BULLET_HEIGHT, x, y, BULLET_WIDTH, BULLET_HEIGHT);
}

// 火花を描画する
function DrawSpark(centerX, centerY, type){
    let x = centerX - SPARK_WIDTH / 2;
    let y = centerY - SPARK_HEIGHT / 2;
    if(type == 0)
        ctx.drawImage(img, 17, 340, 24, 27, x, y, SPARK_WIDTH, SPARK_HEIGHT);
    if(type == 1)
        ctx.drawImage(img, 44, 340, 30, 30, x, y, SPARK_WIDTH, SPARK_HEIGHT);
    if(type == 2)
        ctx.drawImage(img, 79, 340, 32, 32, x, y, SPARK_WIDTH, SPARK_HEIGHT);
    if(type == 3)
        ctx.drawImage(img, 116, 340, 36, 36, x, y, SPARK_WIDTH, SPARK_HEIGHT);
    if(type == 4)
        ctx.drawImage(img, 153, 340, 34, 34, x, y, SPARK_WIDTH, SPARK_HEIGHT);
    if(type == 5)
        ctx.drawImage(img, 188, 340, 28, 30, x, y, SPARK_WIDTH, SPARK_HEIGHT);
}
// 弾丸(自機)を描画する
function DrawBullet2(centerX, centerY){
    let x = centerX - BULLET_WIDTH / 2;
    let y = centerY - BULLET_HEIGHT / 2;
    ctx.drawImage(img, 79, 340, 32, 32, x, y, SPARK_WIDTH, SPARK_HEIGHT);
}

let playerX = FIELD_WIDTH / 2; // プレーヤーを描画する地点の中心のX座標
let playerY = FIELD_HEIGHT * 0.85; // プレーヤーを描画する地点の中心のY座標

// キーが押されているかどうか？ 左、右、上、下と発射ボタン（スペースキー）
let left = false;
let right = false;
let up = false;
let down = false;
let shot = false;

class PlayerBullet {
    constructor(startX, startY, vy) {
        this.CenterX = startX;
        this.CenterY = startY;
        this.VY = vy;
        this.IsDead = false;
    }
 
    Move(){
        this.CenterY += this.VY;
 
        if (this.CenterY < 0)
            this.IsDead = true;
    }
 
    Draw(){
        if(!this.IsDead)
            DrawBullet2(this.CenterX, this.CenterY);
    }
}
 
// PlayerBulletオブジェクトを格納する配列
let playerBullets = [];

document.onkeydown = (ev) =>{
    if(!isPlaying)
        return;
 
    if(ev.code == 'ArrowLeft')
        left = true;
    if(ev.code == 'ArrowUp')
        up = true;
    if(ev.code == 'ArrowRight')
        right = true;
    if(ev.code == 'ArrowDown')
        down = true;
    if(ev.code == 'Space'){
        if(shot)
            return;
        shot = true;
        playerBullets.push(new PlayerBullet(playerX, playerY - PLAYER_HEIGHT / 2, -BULLET_SPEED));
    }
}
document.onkeyup = (ev) =>{
    if(ev.code == 'ArrowLeft')
        left = false;
    if(ev.code == 'ArrowUp')
        up = false;
    if(ev.code == 'ArrowRight')
        right = false;
    if(ev.code == 'ArrowDown')
        down = false;
 
    if(ev.code == 'Space')
        shot = false;
}
function UpdatePlayer(){
    // フラグがセットされているなら自機の位置を移動する
    if(left && PLAYER_WIDTH / 2 < playerX)
        playerX -= 8;
    if(right && playerX < FIELD_WIDTH - PLAYER_WIDTH / 2)
        playerX += 8;
    if(up && PLAYER_HEIGHT / 2 < playerY)
        playerY -= 8;
    if(down && playerY < FIELD_HEIGHT - PLAYER_HEIGHT / 2)
        playerY += 8;
 
    // 自機から発射された弾丸も移動させる
    for(let i=0; i<playerBullets.length; i++)
        playerBullets[i].Move();
 
    // IsDeadフラグがセットされている弾丸は配列から除去する
    playerBullets = playerBullets.filter(_ => !_.IsDead);
}
class Enemy {
    constructor(startX, startY, moveRight, type) {
        this.CenterX = startX;
        this.CenterY = startY;
        this.MoveRight = moveRight;
        this.IsDead = false;
        this.Type = type;
        this.UpdateCount = 0;
    }
 
    Move(){
        this.UpdateCount++;
 
        if (FIELD_WIDTH < this.CenterX)
            this.MoveRight = false;
        if (0 > this.CenterX)
            this.MoveRight = true;
 
        this.CenterY++;
 
        if(this.MoveRight)
            this.CenterX += 3;
        else
            this.CenterX -= 3;
 
        if (FIELD_HEIGHT < this.CenterY)
            this.IsDead = true;
    }
 
    Draw(){
        if(!this.IsDead && this.Type == 0)
            DrawEnemy1(this.CenterX, this.CenterY);
        if(!this.IsDead && this.Type == 1)
            DrawEnemy2(this.CenterX, this.CenterY);
        if(!this.IsDead && this.Type == 2)
            DrawEnemy3(this.CenterX, this.CenterY);
    }
}
// Emenyオブジェクトを格納する配列
let enemies = [];
 
function CreateEmeny(){
    let type = Math.floor(Math.random() * 3);
    let isRight = Math.floor(Math.random() * 2);
 
    let y = Math.random() * 48;
 
    if(isRight)
        enemies.push(new Enemy(0,y,true, type));
    else
        enemies.push(new Enemy(FIELD_WIDTH, y, false, type));
}
class EnemyBullet {
    constructor(startX, startY, vx, vy) {
        this.CenterX = startX;
        this.CenterY = startY;
        this.VX = vx;
        this.VY = vy;
        this.IsDead = false;
    }
 
    Move(){
        this.CenterX += this.VX;
        this.CenterY += this.VY;
 
        if (this.CenterX < 0)
            this.IsDead = true;
        if (this.CenterY < 0)
            this.IsDead = true;
        if (FIELD_WIDTH < this.CenterX)
            this.IsDead = true;
        if (FIELD_HEIGHT < this.CenterY)
            this.IsDead = true;
    }
 
    Draw(){
        if(!this.IsDead)
            DrawBullet1(this.CenterX, this.CenterY);
    }
}
 
// 敵の弾丸を格納するための配列
let enemyBullets = [];
function EmeniesShot(){
    if(enemies.length == 0)
        return;
 
    for(let i = 0; i < enemies.length; i++){
        // 敵が生成されたあとの更新回数が31の倍数のときに20％の確率で弾丸を発射する
        if(enemies[i].UpdateCount % 31 != 0)
            continue;
 
        if(Math.random() > 0.8)
            continue;
 
        let rad = Math.atan2(playerY - enemies[i].CenterY, playerX - enemies[i].CenterX);
 
        // 乱数で最大30度ズラす。この行がないと弾丸はつねに自機めがけて飛んでくるようになる
        rad += Math.random() * (Math.PI / 3) - Math.PI / 6;
 
        enemyBullets.push(new EnemyBullet(enemies[i].CenterX, enemies[i].CenterY, BULLET_SPEED * Math.cos(rad), BULLET_SPEED * Math.sin(rad)));
    }
}
function UpdateEnemies(){
    for(let i = 0; i < enemies.length; i++)
        enemies[i].Move();
 
    for(let i = 0; i < enemyBullets.length; i++)
        enemyBullets[i].Move();
 
    enemies = enemies.filter(_ => !_.IsDead);
    enemyBullets = enemyBullets.filter(_ => !_.IsDead);
}
class Spark {
    constructor(startX, startY, vx, vy) {
        this.CenterX = startX;
        this.CenterY = startY;
        this.VX = vx;
        this.VY = vy;
        this.UpdateCount = 0;
        this.IsDead = false;
    }
 
    Move(){
        this.UpdateCount++;
 
        this.CenterX += this.VX;
        this.CenterY += this.VY;
 
        if (this.CenterX < 0)
            this.IsDead = true;
        if (this.CenterY < 0)
            this.IsDead = true;
        if (FIELD_WIDTH < this.CenterX)
            this.IsDead = true;
        if (FIELD_HEIGHT < this.CenterY)
            this.IsDead = true;
 
        // 更新2回でイメージを変更する
        let type = Math.floor(this.UpdateCount / 2);
 
        // 12回更新したら消滅
        if(type >= 6)
            this.IsDead = true;
    }
 
    Draw(){
        let type = Math.floor(this.UpdateCount / 2);
        if(!this.IsDead)
            DrawSpark(this.CenterX, this.CenterY, type);
    }
}
 
// 火花を格納する配列
let sparks = [];

function UpdateSparks(){
    for(let i=0; i<sparks.length; i++)
        sparks[i].Move();
 
    sparks = sparks.filter(_ => !_.IsDead);
}

let hit = new Audio('./maou_se_8bit07.mp3');
let dead = new Audio('./maou_se_battle_explosion06.mp3'); //魔王魂様よりお借りしています
 
function HitCheck(){
    // ゲームオーバー時は当たり判定をしない
    if(!isPlaying)
        return;
 
    // 自機から発射された弾丸は敵に命中したか？
    for(let i = 0; i < playerBullets.length; i++){
        for(let k = 0; k < enemies.length; k++){
            // すでに死亡フラグが立っている敵との当たり判定はしない
            if(enemies[k].IsDead)
                continue;
 
            // 弾丸と敵の距離とそれぞれの半径の和を比較する
            let d2 = Math.pow(enemies[k].CenterX - playerBullets[i].CenterX, 2) + Math.pow(enemies[k].CenterY - playerBullets[i].CenterY, 2);
            let r2 = Math.pow(BULLET_WIDTH / 2 + ENEMY_WIDTH / 2, 2);
 
            if(d2 < r2){
                // 命中時はIsDeadフラグをセット
                enemies[k].IsDead = true;
                playerBullets[i].IsDead = true;
 
                // 爆発の開始
                for(let m = 0; m < 24; m++){
                    let rad = Math.random() * 2 * Math.PI;
                    let speed = 2 + Math.random() * 4;
                    sparks.push(new Spark(enemies[k].CenterX, enemies[k].CenterY, speed * Math.cos(rad), speed * Math.sin(rad)));
                }
 
                // スコアの加算と効果音
                shooting_score += 10;
                hit.currentTime = 0;
                //hit.play();

                //スコアが100を超えたらゲームを止める
                if(shooting_score==100){
                    isPlaying=0;
                }
            }
        }
    }
    for(let i = 0; i < enemyBullets.length; i++){
        // すでに死亡フラグが立っている敵弾との当たり判定はしない
        if(enemyBullets[i].IsDead)
            continue;
 
        // 敵弾と自機の距離とそれぞれの半径の和を比較する
        let d2 = Math.pow(enemyBullets[i].CenterX - playerX, 2) + Math.pow(enemyBullets[i].CenterY - playerY, 2);
        let r2 = Math.pow(BULLET_WIDTH / 2 + PLAYER_WIDTH / 2, 2);
 
        if(d2 < r2){
            // 敵弾が命中した場合はゲームオーバーとする
            isPlaying = false;
            enemyBullets[i].IsDead = true;
 
            // 爆発の開始
            for(let m = 0; m < 24; m++){
                let rad = Math.random() * 2 * Math.PI;
                let speed = 2 + Math.random() * 4;
                sparks.push(new Spark(playerX, playerY, speed * Math.cos(rad), speed * Math.sin(rad)));
            }
            // 効果音
            //dead.play();
 
            // ゲームオーバーになったのでゲームを再開するためのボタンを表示させる
            $start.style.display = 'block';
 
            // ひとつの敵弾が自機に当たったら他の弾丸の当たり判定は不要なのでループをぬける
            break;
        }
    }
}

let bgm = new Audio('./maou_bgm_fantasy11.mp3'); //魔王魂様よりお借りしています
 
let updateCount = 0;
 
function Update(){
    updateCount++;
 
    UpdatePlayer();
 
    // 更新20回に1回の割合で70％の確率で敵を新たに生成する
    // ただし10個以上は生成しない
    // 敵が0個の場合は必ず生成する
    if(updateCount % 20 == 0 && enemies.length < 10 && Math.random() < 0.7)
        CreateEmeny();
    else if(enemies.length == 0)
        CreateEmeny();
 
    // 敵が弾丸を発射する
    EmeniesShot();
 
    // 敵を移動させる
    UpdateEnemies();
 
    // 当たり判定
    HitCheck();
 
    // 火花を移動させる
    UpdateSparks();
 
    // 移動したオブジェクトを描画する
    Draw();
 
    // BGMの再生
    //if(bgm.currentTime >= 78)
        //bgm.currentTime = 0;
 
    // ゲームオーバー時は再生を停止する
    if(!isPlaying)
        bgm.pause();
}
 
setInterval(() => {
    Update();
}, 1000 / 30);


function Draw(){
    // canvas全体を黒で塗りつぶす
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0, FIELD_WIDTH, FIELD_HEIGHT);
 
    // 敵の描画
    for(let i = 0; i < enemies.length; i++)
        enemies[i].Draw();
 
    // 敵の弾丸の描画
    for(let i = 0; i < enemyBullets.length; i++)
        enemyBullets[i].Draw();
 
    // 自機から発射された弾丸の描画
    for(let i = 0; i < playerBullets.length; i++)
        playerBullets[i].Draw();
 
    // プレイ中だけ自機を描画する
    if(isPlaying)
        DrawPlayer(playerX, playerY);
 
    // 火花の描画
    for(let i = 0; i < sparks.length; i++){
        sparks[i].Draw();
    }
    // ゲームオーバーのときは'GAME OVER'の文字を描画する
    DrawGameOver();
 
    // スコアの描画
    DrawScore();
}

let firstLoop ;

function DrawGameOver(){
    // ゲームオーバー時ではないなら何もしない
    let gameover = 'GAME OVER';
    if(isPlaying){
        return;
    }
    ctx.fillStyle="#ff0000";
    ctx.font="50px ";
   

    if(playCount==0){ //初回プレイ時のみテキストをスタートにする
        ctx.fillStyle="#fff";
        gameover = 'GAME START';
    }else{ //スコアをセットする
       
        if(firstLoop==0){
            if(shooting_score>50){
                addLife();
                addLife();
            }
            setScore(2,shooting_score);
            game_score = getScore(2); //再度取得　これがないとlastもhighも更新されない
            lifeZero();

            firstLoop++;
        }


        //lastScore表示
        ctx.font="45px dotFont";
        ctx.fillStyle="#ff6347";
        let last_score = "SCORE:  " + game_score.last_score;
        let x = (FIELD_WIDTH - ctx.measureText(last_score).width) / 2; // 中央に表示するためのx座標を取得する
        ctx.fillText(last_score, x-10,220, 250); //：がGAME　と　OVER の間に来るよう調節

        if(shooting_score>=50){ //ボーナスライフ取得時の表示
            ctx.font="45px dotFont";
            ctx.fillStyle="#ffa500";
            let bonusLife = "BONUS:   +1";
            let bonusHeart = "♡";
            ctx.fillText(bonusLife, x-10,280, 250);
            ctx.font="45px dotFont";
            ctx.fillText(bonusHeart, x+143,280, 250);

            //gameover表示のためにサイズと色を戻す
            ctx.font="50px dotFont";

            if(shooting_score>=100){
                gameover='GAME CLEAR!'
            }
        }
        
    }
    ctx.fillStyle="#ff0000";
    let x = (FIELD_WIDTH - ctx.measureText(gameover).width) / 2; // 中央に表示するためのx座標を取得する
    ctx.fillText(gameover, x, 150);
}

function DrawScore(){
    
    let text = shooting_score.toString().padStart( 5, '0'); // スコアが4桁以下のときは左0埋めして5桁にする
    ctx.fillStyle="#fff";
    ctx.font="50px dotFont";
    ctx.textBaseline="top";
    ctx.fillText(text, 20, 10);
    //ルール
    ctx.font="30px dotFont";
    ctx.fillStyle="#b0c4de";
    let playRule1 = 'space:';
    let playRule1_2 = '発射';
    let playRule2 = '十字キー:操作';
    let playRule3 = 'スコア50以上でライフ+1';
    let playRule4 = 'スコア100以上でクリア';
    ctx.fillText(playRule1, 20,60, 200);
    ctx.font="24px dotFont";
    ctx.fillText(playRule1_2, 110,65, 200);
    ctx.fillText(playRule2, 20,95, 200);
    ctx.fillText(playRule3, 20,125, 200);
    ctx.fillStyle="#00ffff";
    ctx.font="30px dotFont";
    ctx.fillText(playRule4, 20,175, 350);
    //ハイスコア表示
    ctx.fillStyle="#ffd700";
    ctx.font="50px dotFont";
    let high_score = 'high score:'+game_score.high_score ;
    ctx.fillText(high_score, 20,250, 200);
}

function Start(){
    // 配列を空にする
    enemies = [];
    playerBullets = [];
    enemyBullets = [];
 
    // 自機を初期位置に戻す
    playerX = FIELD_WIDTH / 2;
    playerY = FIELD_HEIGHT * 0.85;

    removeLife();
    //addLife();
    //initPersonal(2); //ローカルストレージのスコアリセット　デバック用
 
    // スコアをリセットしてプレイ中のフラグを立てる
    shooting_score = 0;
    isPlaying = true;
    firstLoop = 0;
 
    // ゲーム開始ボタンを非表示にする
    $start.style.display = 'none';
 
    // 一つ目の敵をすぐ生成する（乱数任せにするとなかなか出てこない場合があるので）
    let isRight = Math.floor(Math.random() * 2);
    let y = Math.random() * 48;
    let type = Math.floor(Math.random() * 3);
 
    if(isRight){
        enemies.push(new Enemy(0,y,true, type));
    }else{
        enemies.push(new Enemy(FIELD_WIDTH, y, false, type));
    }
    playCount++;



    console.log(playCount);

    // BGMの再生開始
    //bgm.currentTime = 0;
    //bgm.play();
}
