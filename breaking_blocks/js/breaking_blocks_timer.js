let time=0;
let intervalid=continueMessage();
let score_bb=0;
const deltatime=1/60;
function initMode(){
    cspeed=ccspeed
    if(stagenow.mode>=0){
        time=200;
        dspeed =0.05;
        dscorex=0;
    }else{
        time=99;
        dspeed=0.1;
        dscorex=0.05;
        tenflag=0;
    }
    scorex=1.0;
    if(stagenow.mode==-2){
        cspeed*=1.5;
    }
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
    barBallsCtx.font="40px dotFont";
    barBallsCtx.fillText(Math.ceil(time),290,40);
}
function erasetimer(){
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.fillRect(0, 0, canvasWidth,extraAreaHeight);
    barBallsCtx.fillStyle = extraAreaColor;
    barBallsCtx.fillRect(300, 0, extraAreaWItdh-351, extraAreaHeight-1);
}
function drawscore(){
    barBallsCtx.fillStyle='black'
    barBallsCtx.font="40px dotFont";
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

function continueMessage(){
    if(screenState==='result'){
        if(flaginterval<0){
            messagescreenCtx.fillStyle='white'
            messagescreenCtx.font="20px dotFont";
            messagescreenCtx.fillText("continue",150,550);
        }else{
            console.log("continue");
            messagescreenCtx.fillStyle='gray';
            messagescreenCtx.fillRect(50, 520, canvasWidth-100, 30);
        }
    }else{
        if(flaginterval<0){
            messagescreenCtx.fillStyle='white'
            messagescreenCtx.font="20px dotFont";
            messagescreenCtx.fillText("continue",150,400);
        }else{
            console.log("continue");
            messagescreenCtx.clearRect(0,370, canvasWidth, 30);
        }
    }
    flaginterval*=-1
}