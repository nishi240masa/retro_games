let time=0;
let score_bb=0;
const deltatime=1/60;
function initMode(){
    if(stagenow.mode>=0){
        time=200;
        dspeed =0.05;
        dscorex=0;
    }else{
        time=99;
        dspeed=0.1;
        dscorex=0.05;
    }
    scorex=1.0;
    speed=cspeed;
    stagenum=0;
    blocksRowLength = stagenow[stagenum].length;
    blocksColumnLength = stagenow[stagenum][0].length;
    blockWidth = blocksAreaWidth / blocksColumnLength;
    blockHeight = (blocksAreaHeight-50) / blocksRowLength;
}
function initTimer(){
    score_bb=0;
    barBallsCtx.fillStyle = extraAreaColor;
    barBallsCtx.fillRect(0, 0, extraAreaWItdh-1, extraAreaHeight-1);
}
function movetimer(){
    if(time>0){
    erasetimer();
    time-=deltatime;
    drawtimer(); 
 }else {
    drawtimer();
    gameState='gameClear'
    updateMessage();
 }
}
function drawtimer(){
    barBallsCtx.fillStyle='black'
    barBallsCtx.font="40px serif";
    barBallsCtx.fillText(Math.ceil(time),280,40);
}
function erasetimer(){
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.fillRect(0, 0, canvasWidth,extraAreaHeight);
    barBallsCtx.fillStyle = extraAreaColor;
    barBallsCtx.fillRect(300, 0, extraAreaWItdh-351, extraAreaHeight-1);
}
function drawscore(){
    barBallsCtx.fillStyle='black'
    barBallsCtx.font="40px serif";
    barBallsCtx.fillText(Math.ceil(score_bb),0,40);
    if(stagenow.mode==-1){
        barBallsCtx.fillText("normal",150,40); 
    }else if(stagenow.mode==-2){
    barBallsCtx.fillText("hard",150,40);
    }else{
    barBallsCtx.fillText("stage",150,40);
    barBallsCtx.fillText(stagenow.mode+1,250,40);
    }
}
