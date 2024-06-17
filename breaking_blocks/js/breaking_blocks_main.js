let setIntervalid
let setIntervalid2
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
        messagescreenCtx.font="40px dotFont";
        messagescreenCtx.fillText("CLICK TO START",60,canvasHeight/2+20);
        } else if (gameState === 'gameClear') {
        messagescreenCtx.fillStyle='white'
        messagescreenCtx.fillRect(20, (canvasHeight/2)-30, canvasWidth-40, 60);
        messagescreenCtx.fillStyle='black'
        messagescreenCtx.font="40px dotFont";
        if(time>0&&stagenow.mode>=0){
            messagescreenCtx.fillText("CLEAR",120,canvasHeight/2+20);
        }else{
            messagescreenCtx.fillText("TIME UP",100,canvasHeight/2+20);
        }
        setIntervalid=setInterval(continueMessage,500);
        //messageLabel.style.display = 'block';
        //messageLabel.innerHTML = 'ゲームクリア！<br>クリックしてリセット';
        } else {
        // メッセージを非表示にさせる
        //messageLabel.style.display = 'none';
        messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        }
    }else{
        homescreen();
        console.log("go home");
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
        se3.play();
        changeGameState('running');
    }else if (gameState === 'gameClear') {
        changescreenState('result');
        clearInterval(setIntervalid);
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
    }else if(menutop.left<ex&&menutop.light>ex&&menutop.top<ey&&menutop.bottom>ey){
        window.location.href = "../../main/html/index.html";
    }else if(menu0.left<ex&&menu0.light>ex&&menu0.top<ey&&menu0.bottom>ey){
        changescreenState("high");
    }
}
const clicklevel=(event)=>{
    const ex = event.offsetX;
    const ey = event.offsetY;
    if(menu1.left<ex&&menu1.light>ex&&menu1.top<ey&&menu1.bottom>ey){
            console.log("selecteasy")
            removeLife()
            levelstage('easy');
    }else if(menu2.left<ex&&menu2.light>ex&&menu2.top<ey&&menu2.bottom>ey){
            removeLife()
            levelstage('hard');
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
                removeLife();
                }
            }
        }
    }
}
const clickhelp=(event)=>{
    const ex = event.offsetX;
    const ey = event.offsetY;
    if(help1.left<ex&&help1.light>ex&&help1.top<ey&&help1.bottom>ey){
        changescreenState('home');
    }else if(help2.left<ex&&help2.light>ex&&help2.top<ey&&help2.bottom>ey){
        changescreenState('help2');
    }else if( gameState === 'waiting'){
        changeGameState('running');
    }
}
const clickhelp2=(event)=>{
    const ex = event.offsetX;
    const ey = event.offsetY;
    if(help1.left<ex&&help1.light>ex&&help1.top<ey&&help1.bottom>ey){
        changescreenState('help');
    }else if(help2.left<ex&&help2.light>ex&&help2.top<ey&&help2.bottom>ey){
        changescreenState('home');
    }else{
        helpflag=1;
        console.log(helpflag);
    }
}
const clickresult=(event)=>{
    changescreenState('home');
}
const clickhigh=(event)=>{
    const ex = event.offsetX;
    const ey = event.offsetY;
    if(help1.left<ex&&help1.light>ex&&help1.top<ey&&help1.bottom>ey){
        changescreenState('home');
    }
}
const clickstart=(event)=>{
    const ex = event.offsetX;
    const ey = event.offsetY;
    if(menutop.left<ex&&menutop.light>ex&&menutop.top<ey&&menutop.bottom>ey){
        window.location.href = "../../main/html/index.html";
    }else{
    changescreenState('home');
    }
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
        console.log(HIscorestage[i])
    }
    console.log(clearstage)
}
//window.location.href = "../../breaking_blocks/html/breaking.html";
function setStorage(){
    for(let i=0;i<9;i++)
    setBleckBreakerScore(0,HIscorenormal)
    setBleckBreakerScore(1,HIscorehard)
    setBleckBreakerScore(2,clearstage)
    for(let i=3;i<9;i++){
        setBleckBreakerScore(i,HIscorestage[i-3])
        
    }
    
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

//addLife();
//addLife();
//initBleckBreakerScore() 
//localStorage.clear();
loadStorage();
updatescreen();