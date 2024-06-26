const menu0={
    top:100,
    bottom:150,
    left:50,
    light:canvasWidth-50,
}
const menu1={
    top:200,
    bottom:250,
    left:50,
    light:canvasWidth-50,
}
const menu2={
    top:300,
    bottom:350,
    left:50,
    light:canvasWidth-50,
}
const menu3={
    top:400,
    bottom:450,
    left:50,
    light:canvasWidth-50,
}
const menutop={
    top:548,
    bottom:598,
    left:2,
    light:102,
}
function startscreen(){
    screenState='start'
    screendefalut();
    messagescreenCtx.font="40px dotFont";
    messagescreenCtx.fillText("breakingblocks",55,240);
    messagescreenCtx.fillText("click to start",70,340);
    messagescreenCtx.fillStyle='gray'
    messagescreenCtx.fillRect(2, 548, 102,50);
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.font="40px dotFont";
    messagescreenCtx.fillText("top",20,585);
}
function homescreen(){
    screenState='home'
    screendefalut();
    messagescreenCtx.fillStyle='gray'
    messagescreenCtx.fillRect(50, 400, canvasWidth-100, 50);
    messagescreenCtx.fillRect(50, 100, canvasWidth-100, 50);
    messagescreenCtx.fillRect(2, 548, 102,50);
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.font="40px dotFont";
    messagescreenCtx.fillText("top",20,585);
    messagescreenCtx.fillText("help",150,440);
    messagescreenCtx.fillText("high score",95,140);
    messagescreenCtx.fillText("block",150,40);
    messagescreenCtx.fillText("mode 1",130,240);
    messagescreenCtx.fillText("mode 2",130,340);
}
function levelscreen(){
    screenState='level'
    screendefalut();
    drawhomebutton();
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.fillText("score attack",110,50);
    messagescreenCtx.fillText("normal",130,240);
    messagescreenCtx.fillText("hard",140,340);
}
function selectstagescreen(){
    messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.fillRect(0, 0, canvasWidth, canvasHeight)
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.fillRect(0, 0, canvasWidth, 50)
    drawhomebutton();
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.font="40px dotFont";
    messagescreenCtx.fillText("stage",150,40);
    for (let i=0;i<2;i++){
        for(let j=0;j<3;j++){
            if(clearstage%checkval[i*3+j]==0){
                if(clearstage%checkval[i*3+j+1]==0){
                messagescreenCtx.fillStyle='yellow';
                }else{
                messagescreenCtx.fillStyle='white';
                }
            }else{
                messagescreenCtx.fillStyle='gray';
            }
            messagescreenCtx.fillRect(50+j*100,200+i*150, 80, 80);
            messagescreenCtx.fillStyle='black'
            messagescreenCtx.font="80px dotFont";
            messagescreenCtx.fillText(i*3+j+1,68+j*100,270+i*150);
        }
    }
}
function resultscreen(){
    let lifeplus=0;
    barBallsCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    messagescreenCtx.fillStyle='#333333';
    messagescreenCtx.fillRect(0, 0, canvasWidth, canvasHeight) 
    messagescreenCtx.fillStyle='gray';
    messagescreenCtx.fillRect(20, 70, canvasWidth-40, canvasHeight-90)
    messagescreenCtx.fillStyle='white';
    messagescreenCtx.fillRect(0, 0, canvasWidth, 50);
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.font="40px dotFont";
    if(stagenow.mode==-1){
        messagescreenCtx.fillText("normal",150,40); 
    }else if(stagenow.mode==-2){
        messagescreenCtx.fillText("hard",150,40);
    }else{
        messagescreenCtx.fillText("stage",150,40);
        messagescreenCtx.fillText(stagenow.mode+1,250,40);
    }
    if(stagenow.mode<0){
        messagescreenCtx.fillText("score",150,140); 
        messagescreenCtx.fillText(score_bb,150,190); 
        messagescreenCtx.fillText("HIscore",150,290); 
        if(stagenow.mode==-1){
            if(score_bb>HIscorenormal){
                HIscorenormal=score_bb;
                setBleckBreakerScore(0,HIscorenormal);
                //localStorage.setItem('normal',HIscorenormal);
                addLife();
                addLife();
                lifeplus+=2
                messagescreenCtx.fillText("new record!",150,390);
            }else if(score_bb>HIscorenormal*0.6){
                addLife();
                lifeplus+=1
            }
            messagescreenCtx.fillText(HIscorenormal,150,340); 
        }else if(stagenum.mode==-2){
            if(score_bb>HIscorehard){
                HIscorehard=score_bb;
                setBleckBreakerScore(1,HIscorehard);
                //localStorage.setItem('hard',HIscorehard);
                messagescreenCtx.fillText("new record!",150,390);
                addLife();
                addLife();
                lifeplus+=2
            }else if(score_bb>HIscorehard*0.6){
                addLife();
                lifeplus+=1
            }
            messagescreenCtx.fillText(HIscorehard,150,340); 
        }
    }else{
        time=Math.ceil(time);
        const scoretime=score_bb+time*100;
        messagescreenCtx.font="30px dotFont";
        messagescreenCtx.fillText(score_bb,50,120);
        messagescreenCtx.fillText("time",120,120);
        messagescreenCtx.fillText(time,200,120);
        messagescreenCtx.fillText("X100",270,120);
        messagescreenCtx.fillText("score",50,200); 
        messagescreenCtx.fillText(scoretime,200,200); 
        messagescreenCtx.fillText("HIscore",50,340);
        if(scoretime>HIscorestage[stagenow.mode]){
            HIscorestage[stagenow.mode]=scoretime;
            setBleckBreakerScore(stagenow.mode+3,HIscorestage[stagenow.mode]);
            messagescreenCtx.fillText("new record!",120,390);
            addLife();
            lifeplus+=1
        }
        messagescreenCtx.fillText(HIscorestage[stagenow.mode],200,340);
        if(clearstage%(checkval[stagenow.mode+1])!=0&&time>0){
            clearstage*=checkval[stagenow.mode+1]
            setBleckBreakerScore(2,clearstage);  
            console.log("new");
        }
        if(time>0){
        addLife();
        lifeplus+=1
        }
    }
    if(lifeplus>0){
        messagescreenCtx.font="50px dotFont";
        messagescreenCtx.fillText("LIFE+",120,490);
        messagescreenCtx.fillText(lifeplus,245,490);
    }else{
        lifeZero();
    }
}
function highscorescreen(){
    barBallsCtx.clearRect(0,0,canvasWidth,canvasHeight);
    messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.fillRect(0, 0, canvasWidth, canvasHeight)
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.fillRect(0, 0, canvasWidth, 50)
    messagescreenCtx.font="40px dotFont"
    messagescreenCtx.fillText("normal",10,140); 
    messagescreenCtx.fillText(HIscorenormal,200,140); 
    messagescreenCtx.fillText("hard",20,190); 
    messagescreenCtx.fillText(HIscorehard,200,190);
    messagescreenCtx.font="30px dotFont" 
    for(let i=0;i<6;i++){
        messagescreenCtx.fillText("stage",10,240+i*50);
        messagescreenCtx.fillText(i+1,90,240+i*50);
        messagescreenCtx.fillText(HIscorestage[i],200,240+i*50);
    }
    messagescreenCtx.fillStyle='gray';
    messagescreenCtx.fillRect(2, 548, 100, 50);
    messagescreenCtx.fillStyle = 'black';
    messagescreenCtx.font="40px dotFont";
    messagescreenCtx.fillText("back",12,588);
    messagescreenCtx.fillText("high score",95,40);
}
function screendefalut(){
    barBallsCtx.clearRect(0,0,canvasWidth,canvasHeight);
    messagescreenCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.fillRect(0, 0, canvasWidth, canvasHeight)
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.fillRect(0, 0, canvasWidth, 50)
    messagescreenCtx.fillStyle='gray'
    messagescreenCtx.fillRect(menu1.left, menu1.top, menu1.light-menu1.left, menu1.bottom-menu1.top)
    messagescreenCtx.fillRect(menu2.left, menu2.top, menu2.light-menu2.left, menu1.bottom-menu1.top)
    messagescreenCtx.fillStyle='black'
    messagescreenCtx.font="40px dotFont"
}
function removeevent(){
    if(screenState==='game'){
        barBallsCanvas.removeEventListener("click", click);
        barBallsCanvas.removeEventListener("mousemove", setBarX);
        barBallsCanvas.removeEventListener("touchmove", setBarX, { passive: true });
        }else if(screenState==='home'){
            barBallsCanvas.removeEventListener("click", clickhome);
        }else if(screenState==='level'){
            barBallsCanvas.removeEventListener("click", clicklevel);
        }else if(screenState==='stageselect'){
            barBallsCanvas.removeEventListener("click", clickstage);
        }else if(screenState==='result'){
            barBallsCanvas.removeEventListener("click", clickresult);
        }else if(screenState==='start'){
            barBallsCanvas.removeEventListener("click",clickstart);
        }else if(screenState==='help'){
            barBallsCanvas.removeEventListener("click",clickhelp);
        }else if(screenState==='help2'){
            barBallsCanvas.removeEventListener("mousemove", setBarX);
            barBallsCanvas.removeEventListener("touchmove", setBarX, { passive: true });
            barBallsCanvas.removeEventListener("click",clickhelp2);
        }else if(screenState==='high'){
            barBallsCanvas.removeEventListener("click",clickhigh);
        }
}
function updatescreen(){
    if(screenState==='game'){
        initGame();
        barBallsCanvas.addEventListener("click", click);
        barBallsCanvas.addEventListener("mousemove", setBarX);
        barBallsCanvas.addEventListener("touchmove", setBarX, { passive: true });
        }else if(screenState==='home'){
            barBallsCanvas.addEventListener("click", clickhome);
            homescreen();
        }else if(screenState==='level'){
            barBallsCanvas.addEventListener("click", clicklevel);
            levelscreen();
        }else if(screenState==='stageselect'){
            barBallsCanvas.addEventListener("click", clickstage);
            selectstagescreen();
        }else if(screenState==='result'){
            barBallsCanvas.addEventListener("click",clickresult);
            resultscreen();
        }else if(screenState==='start'){
            barBallsCanvas.addEventListener("click",clickstart);
            startscreen();
        }else if(screenState==='help'){
            barBallsCanvas.addEventListener("click",clickhelp);
            helpscreen();
        }else if(screenState==='help2'){
            barBallsCanvas.addEventListener("mousemove", setBarX);
            barBallsCanvas.addEventListener("touchmove", setBarX, { passive: true });
            barBallsCanvas.addEventListener("click",clickhelp2);
            help2screen();
        }else if(screenState==='high'){
            barBallsCanvas.addEventListener("click",clickhigh);
            highscorescreen();
        }
}
function drawhomebutton(){
    messagescreenCtx.fillStyle='white'
    messagescreenCtx.fillRect(0, 0, canvasWidth,extraAreaHeight);
    barBallsCtx.fillStyle='red';
    barBallsCtx.fillRect(365, 10, 30, 30);
    barBallsCtx.fillStyle='black';
    barBallsCtx.font="30px dotFont";
    barBallsCtx.fillText("×",366,36); 
}
function escapehome(){
    barBallsCtx.clearRect(0,0,canvasWidth,canvasHeight);
    changescreenState('home'); 
    lifeZero();
}