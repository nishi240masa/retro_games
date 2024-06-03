const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let difficulty;
let player1, enemy;

// カウントダウンの初期設定
let countdown = 5;
let countdownInterval;

// 制限時間の初期設定（3分間）
let gameTime = 180;
let gameTimeInterval;

// スコアの初期設定
let score = 0;

// closeボタンを作成
function close() {
    const close = document.getElementById("close");
    close.innerHTML = `<a href="/retro_games/fighting_game/html/fighting_mode.html">戻る</a>`;
}

// 初期化関数
function initCharacters() {
    player1 = {
        x: canvas.width - 250,
        y: canvas.height - 50,
        width: 25,
        height: 50,
        speed: 5,
        isJumping: false,
        jumpStrength: 10,
        velocityY: 0,
        gravity: 0.5,
        image: new Image(),
        defenseImage: new Image(),
        meleeImage: new Image(),
        hp: 100,
        attacks: [],
        isInvincible: false,
        invincibilityDuration: 800,
        invincibilityTimer: 0,
        isDefending: false,
        facingLeft: false,
        isMeleeAttacking: false,
        meleeAttackDuration: 300,
        meleeAttackTimer: 0,
    };
    player1.image.src = "/retro_games/fighting_game/imgs/player_1.svg";
    player1.defenseImage.src = "/retro_games/fighting_game/imgs/player_defense1.svg";
    player1.meleeImage.src = "/retro_games/fighting_game/imgs/player_melee.svg";

    enemy = {
        x: canvas.width - 100,
        y: canvas.height - 50,
        width: 25,
        height: 50,
        speed: 5,
        isJumping: false,
        jumpStrength: 10,
        velocityY: 0,
        gravity: 0.5,
        image: new Image(),
        defenseImage: new Image(),
        meleeImage: new Image(),
        hp: 100,
        attacks: [],
        isInvincible: false,
        invincibilityDuration: 800,
        invincibilityTimer: 0,
        isDefending: false,
        facingLeft: false,
        isMeleeAttacking: false,
        meleeAttackDuration: 300,
        meleeAttackTimer: 0,
    };
    enemy.image.src = "/retro_games/fighting_game/imgs/enemy_2.svg";
    enemy.defenseImage.src = "/retro_games/fighting_game/imgs/enemy_defense2.svg";
    enemy.meleeImage.src = "/retro_games/fighting_game/imgs/enemy_melee.svg";

    adjustDifficultySettings();
}

// 難易度に応じた設定調整
function adjustDifficultySettings() {
    switch (difficulty) {
        case 'easy':
            enemy.speed = 3;
            enemy.attackFrequency = 0.01;
            enemy.meleeAttackFrequency = 0.015;
            enemy.defendFrequency = 0.03;
            break;
        case 'normal':
            enemy.speed = 5;
            enemy.attackFrequency = 0.02;
            enemy.meleeAttackFrequency = 0.03;
            enemy.defendFrequency = 0.05;
            break;
        case 'hard':
            enemy.speed = 7;
            enemy.attackFrequency = 0.04;
            enemy.meleeAttackFrequency = 0.06;
            enemy.defendFrequency = 0.1;
            break;
    }
}

// カウントダウンの描画
function drawCountdown() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(countdown, canvas.width / 2, canvas.height / 2);
}

// カウントダウンの処理
function startCountdown() {
    countdownInterval = setInterval(() => {
        drawCountdown();
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);
            startGameTime();
            update();
        }
    }, 1000);
}

// 制限時間のカウントダウン処理
function startGameTime() {
    gameTimeInterval = setInterval(() => {
        gameTime--;
        if (gameTime <= 0) {
            clearInterval(gameTimeInterval);
            gameOver();
        }
    }, 1000);
}

// ゲームの更新
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer1HP();
    drawEnemyHP();
    drawGameTime();
    drawScore();

    if (player1.isInvincible) {
        if (Math.floor(Date.now() / 100) % 2 === 0) {
            drawCharacter(player1);
        }
        removeInvincibility(player1);
    } else {
        drawCharacter(player1);
    }

    if (enemy.isInvincible) {
        if (Math.floor(Date.now() / 100) % 2 === 0) {
            drawCharacter(enemy);
        }
        removeInvincibility(enemy);
    } else {
        drawCharacter(enemy);
    }

    removeMeleeAttackState(player1);
    removeMeleeAttackState(enemy);

    player1.attacks.forEach((attack) => {
        ctx.drawImage(attackImage, attack.x, attack.y, attack.width, attack.height);
    });

    enemy.attacks.forEach((attack) => {
        ctx.drawImage(attackImage, attack.x, attack.y, attack.width, attack.height);
    });

    if (!player1.isInvincible) {
        if (keys.ArrowLeft && player1.x > 0) {
            player1.x -= player1.speed;
            player1.facingLeft = true;
            if (collision(player1, enemy)) {
                player1.x += player1.speed;
            }
        }
        if (keys.ArrowRight && player1.x < canvas.width - player1.width) {
            player1.x += player1.speed;
            player1.facingLeft = false;
            if (collision(player1, enemy)) {
                player1.x -= player1.speed;
            }
        }
        handleJump(player1);
    }

    cpuAI(); // CPUの動きを更新

    handleAttack(player1.attacks, player1, 1);
    handleAttack(enemy.attacks, enemy, -1);

    if (player1.hp > 0 && enemy.hp > 0 && gameTime > 0) {
        requestAnimationFrame(update);
    } else {
        checkGameOver();
        checkGameClear();
    }
}

// ゲームを開始する関数
function startGame(selectedDifficulty) {
    difficulty = selectedDifficulty;
    document.getElementById("difficulty-selection").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    initCharacters();
    startCountdown();
}

// ゲームオーバー処理
function gameOver() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
    stopKeys();
}

// ゲームクリア処理
function gameClear() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("You Win!", canvas.width / 2 - 80, canvas.height / 2);
    calculateScore();
    ctx.fillText(`Score: ${score}`, canvas.width / 2 - 80, canvas.height / 2 + 40);
    stopKeys();
}

// キーの入力を止める
function stopKeys() {}

// HP描画関数
function drawPlayer1HP() {
    if (player1.hp <= 0) {
        player1.hp = 0;
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, player1.hp, 10);
    ctx.strokeStyle = "white";
    ctx.strokeRect(9, 9, 102, 12);
}

function drawEnemyHP() {
    if (enemy.hp <= 0) {
        enemy.hp = 0;
    }
    ctx.fillStyle = "red";
    ctx.fillRect(canvas.width - 110, 10, enemy.hp, 10);
    ctx.strokeStyle = "white";
    ctx.strokeRect(canvas.width - 111, 9, 102, 12);
}

function drawGameTime() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Time: ${gameTime}s`, canvas.width / 2 - 30, 30);
}

// スコアを描画する関数
function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, canvas.width - 150, 30);
}

// スコアを計算する関数
function calculateScore() {
    const timeScore = (180 - gameTime) * 10; // 残り時間のスコア
    const hpScore = player1.hp * 20; // 残りHPのスコア
    score = timeScore + hpScore;
}

function checkGameOver() {
    if (player1.hp <= 0) {
        gameOver();
        close();
    }
}

function checkGameClear() {
    if (enemy.hp <= 0) {
        gameClear();
        close();
    }
}

const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    if (!player1.isInvincible) {
        if (e.key === "ArrowUp" && !player1.isJumping) {
            player1.isJumping = true;
            player1.velocityY = player1.jumpStrength;
        }
        if (e.key === "e") {
            player1.attacks.push({
                x: player1.x + player1.width,
                y: player1.y + player1.height / 2,
                width: 20,
                height: 20,
                speed: 4,
            });
        }
        if (e.key === "a" && Math.abs(player1.x - enemy.x) < 50) {
            handleMeleeAttack(player1, enemy);
        }
        if (e.key === "f") {
            player1.isDefending = true;
        }
    }
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
    if (e.key === "f") {
        player1.isDefending = false;
    }
});
