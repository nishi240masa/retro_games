const help1={
    top:548,
    bottom:598,
    left:2,
    light:102,
}
const help2={
    top:548,
    bottom:598,
    left:298,
    light:398,
}
let helpflag=0;
function helpscreen(){
    barBallsCtx.clearRect(0,0,canvasWidth,canvasHeight);
    screenState='help'
    messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    messagescreenCtx.fillStyle='#333333'
    messagescreenCtx.fillRect(0, 0, canvasWidth, canvasHeight)
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.fillRect(0, 0, canvasWidth, 50)
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.font="40px dotFont";
    messagescreenCtx.fillText("help",150,40);
    messagescreenCtx.fillStyle='gray'
    helpblocks();
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.font="20px dotFont";
    messagescreenCtx.fillText("1回当たったら壊れます",100,100);
    messagescreenCtx.fillText("normalblock:100point",100,80);
    messagescreenCtx.fillText("2回当たったら壊れます",100,180);
    messagescreenCtx.fillText("hardblock:200point",100,160);
    messagescreenCtx.fillText("壊れません",100,260);
    messagescreenCtx.fillText("wall",100,240);
    messagescreenCtx.fillText("stagemodeのみ",100,360);
    messagescreenCtx.fillText("一回で破壊、10秒加算",100,340);
    messagescreenCtx.fillText("timeplus:100point",100,320);
    messagescreenCtx.fillText("scoreattackmodeのみ",100,440);
    messagescreenCtx.fillText("スピード+２、スコア倍率＋１",100,420);
    messagescreenCtx.fillText("boost:100point 一回で破壊",100,400);
    messagescreenCtx.fillText("scoreattackmodeのみ",100,520);
    messagescreenCtx.fillText("ボール＋１",100,500);
    messagescreenCtx.fillText("boalplus:100point 一回で破壊",100,480);
    messagescreenCtx.fillStyle='gray';
    messagescreenCtx.fillRect(2, 548, 100, 50);
    messagescreenCtx.fillRect(298, 548, 100, 50);
    messagescreenCtx.fillStyle = 'black';
    messagescreenCtx.font="40px dotFont";
    messagescreenCtx.fillText("back",12,588);
    messagescreenCtx.fillText("->",340,588,);
}
function help2screen(){
    blocks = [];
    let tustate='wait'
    messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    messagescreenCtx.fillStyle='#333333'
    messagescreenCtx.fillRect(0, 0, canvasWidth, canvasHeight)
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.fillRect(0, 0, canvasWidth, 50)
    messagescreenCtx.fillStyle='gray';
    messagescreenCtx.fillRect(2, 548, 100, 50);
    messagescreenCtx.fillRect(298, 548, 100, 50);
    messagescreenCtx.fillStyle = 'black';
    messagescreenCtx.font="40px dotFont";
    messagescreenCtx.fillText("<-",32,588);
    messagescreenCtx.fillText("home",308,588,);
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.font="20px dotFont";
    messagescreenCtx.fillText("カーソルで移動",100,100);
    messagescreenCtx.fillText("クリックでその方向に発射",80,120);
    initBar();
    initBall();
    help2run();
}
const help2run = (tustate) => {
    // ゲームクリアしている状態ならアニメーションを止める
    if (gameState === 'gameClear'||screenState!='help2') {
        return;
    }
    barBallsCtx.clearRect(0,0,canvasWidth,canvasHeight);
    // canvasをまっさらの状態にする
    drawBar();
    if(helpflag==1){
        moveBalls();
    }else{
        moveyaOnbar();
        moveBallOnBar();
        initBall();
    }
    window.requestAnimationFrame(help2run);
};
function helpblocks(){
    messagescreenCtx.fillStyle = 'midnightblue';
    messagescreenCtx.fillRect(10, 60, 80, 40);
    messagescreenCtx.fillStyle = 'deepskyblue';
    messagescreenCtx.fillRect(10 + 1, 60 + 1, 80 - 2, 40 - 2);
    messagescreenCtx.fillStyle = 'black';
    messagescreenCtx.fillRect(10, 140, 80, 40);
    messagescreenCtx.fillStyle = 'blue';
    messagescreenCtx.fillRect(10 + 1, 140 + 1, 80 - 2, 40 - 2);
    messagescreenCtx.fillStyle = 'lightgray';
    messagescreenCtx.fillRect(10, 220, 80, 40);
    messagescreenCtx.fillStyle = 'whitesmoke';
    messagescreenCtx.fillRect(10 + 1, 220 + 1, 80 - 2, 40 - 2);
    messagescreenCtx.fillStyle = 'limegreen';
    messagescreenCtx.fillRect(10, 300, 80, 40);
    messagescreenCtx.fillStyle = 'lime';
    messagescreenCtx.fillRect(10 + 1, 300 + 1, 80 - 2, 40 - 2);
    messagescreenCtx.fillStyle = 'gold';
    messagescreenCtx.fillRect(10, 380, 80, 40);
    messagescreenCtx.fillStyle = 'yellow';
    messagescreenCtx.fillRect(10 + 1, 380 + 1, 80 - 2, 40 - 2);
    messagescreenCtx.fillStyle = 'chocolate';
    messagescreenCtx.fillRect(10, 460, 80, 40);
    messagescreenCtx.fillStyle = 'orange';
    messagescreenCtx.fillRect(10 + 1, 460 + 1, 80 - 2, 40 - 2);
}
