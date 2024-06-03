let atime=0;
const updateMessage = () => {
    if(screenState==='game'){
        messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (gameState === 'initial') {
        //messageLabel.style.display = 'block';
        //messageLabel.textContent = 'クリックしてスタート！';
        messagescreenCtx.fillStyle='white'
        messagescreenCtx.fillRect(20, (canvasHeight/2)-30, canvasWidth-40, 60);
        messagescreenCtx.fillStyle='black'
        messagescreenCtx.font="40px serif";
        messagescreenCtx.fillText("CLICK TO START",30,canvasHeight/2+20);
        } else if (gameState === 'gameClear') {
        messagescreenCtx.fillStyle='white'
        messagescreenCtx.fillRect(20, (canvasHeight/2)-30, canvasWidth-40, 60);
        messagescreenCtx.fillStyle='black'
        messagescreenCtx.font="40px serif";
        if(time>0&&stagenow.mode>=0){
            messagescreenCtx.fillText("CLEAR",120,canvasHeight/2+20);
        }else{
            messagescreenCtx.fillText("TIME UP",100,canvasHeight/2+20);
        }
        //messageLabel.style.display = 'block';
        //messageLabel.innerHTML = 'ゲームクリア！<br>クリックしてリセット';
        } else {
        // メッセージを非表示にさせる
        //messageLabel.style.display = 'none';
        messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        }
    }else{
        homescreen();
    }
};
const changeGameState = (newGameState) => {
    gameState = newGameState;
    updateMessage();
};
const run = () => {
    // ゲームクリアしている状態ならアニメーションを止める
    if (gameState === 'gameClear'||screenState!='game') {
        return;
    }
    barBallsCtx.clearRect(0,0,canvasWidth,canvasHeight);
    // canvasをまっさらの状態にする
    drawhomebutton();

    // 操作バーを描く
    drawBar();
    
    if (gameState === 'running') {
        // ボールを動かす
        moveBalls();
        movetimer();
    } else if(gameState==='waiting'){
        moveBallOnBar();
        initBall();
        movetimer();
    }else{
        // ボールを操作バーの上に動かす
        moveBallOnBar();
    }
    drawscore();
    //console.log(Date.now()-atime);
    //atime=Date.now();
    // 繰り返しrunを実行させる
    window.requestAnimationFrame(run);
};
const click = (event) => {
    const ex = event.offsetX;
    const ey = event.offsetY;
    if (gameState === 'initial') {
        changeGameState('waiting');
    } else if( gameState === 'waiting'){
        changeGameState('running');
    }else if (gameState === 'gameClear') {
        changescreenState('result');
        // ゲームを初期状態にする
    };
    console.log(ex,ey);
    if(ex>=365&&ex<=395&&ey>=10&&ey<=40){
        escapehome();
    }
};
const clickhome=(event)=>{
    const ex = event.offsetX;
    const ey = event.offsetY;
    if(menu1.left<ex&&menu1.light>ex&&menu1.top<ey&&menu1.bottom>ey){
        console.log("selectstage")
        changescreenState("stageselect");
    }else if(menu2.left<ex&&menu2.light>ex&&menu2.top<ey&&menu2.bottom>ey){
        changescreenState("level");
    }else if(menu3.left<ex&&menu3.light>ex&&menu3.top<ey&&menu3.bottom>ey){
        changescreenState("help");
    }      
}
const clicklevel=(event)=>{
    const ex = event.offsetX;
    const ey = event.offsetY;
    if(menu1.left<ex&&menu1.light>ex&&menu1.top<ey&&menu1.bottom>ey){
            console.log("selecteasy")
            levelstage('easy');
    }else if(menu2.left<ex&&menu2.light>ex&&menu2.top<ey&&menu2.bottom>ey){
            levelscreen('hard');
    }else if(ex>=365&&ex<=395&&ey>=10&&ey<=40){
        escapehome();
    }
}
const clickstage=(event)=>{
    const ex = event.offsetX;
    const ey = event.offsetY;
    if(ex>=365&&ex<=395&&ey>=10&&ey<=40){
        escapehome();
    }
    for (let i=0;i<2;i++){
        for(let j=0;j<3;j++){
            if(ex>50+j*100&&ex<80+50+j*100&&ey>200+i*150&&ey<80+200+i*150){
                if(clearstage%checkval[i*3+j]==0){
                selectstage(i*3+j);
                }
            }
        }
    }
}
const clickresult=(event)=>{
    changescreenState('home');
}
const clickstart=(event)=>{
    changescreenState('home');
}
const initGame = () => {

    changeGameState('initial');
    initMode();
    initTimer();
    
    initBar();

    initBlocks();

    initBall();

    run();
};
function changescreenState(newscreenState)
{
    removeevent();
    screenState=newscreenState;
    updatescreen();
}

function loadStorage(){
    if(getBleckBreakerScore(2).high_score!=0){
    clearstage=getBleckBreakerScore(2).high_score;
    }
    HIscorenormal=getBleckBreakerScore(0).high_score;
    HIscorehard=getBleckBreakerScore(1).high_score;
    for(let i=0;i<6;i++){
        HIscorestage[i]=getBleckBreakerScore(i+3).high_score;
    }
}
//window.location.href = "../../breaking_blocks/html/breaking.html";
function setStorage(){
    setBleckBreakerScore(0,HIscorenormal)
    setBleckBreakerScore(1,HIscorehard)
    //localStorage.setItem('clearstage',clearstage);
    //localStorage.setItem('normal',HIscorenormal);
    //localStorage.setItem('hard',HIscorehard);
    //const HIscorestagestr=JSON.stringify(HIscorestage);
    //localStorage.setItem('stage',HIscorestagestr);
}
function clearStorage_bb(){
    clearstage=1;
    HIscorenormal=1;
    HIscorehard=1;
    HIscorestage=[0,0,0,0,0,0];
    setStorage();
}
initBleckBreakerScore() 
//localStorage.clear();
//loadStorage();
clearStorage_bb()
updatescreen();

