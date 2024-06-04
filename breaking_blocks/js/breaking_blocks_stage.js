
const stage={
    easy:[
        [
            [0,0,0,0,0,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,0,0,0,0,0]
        ],
        [
            [0,1,0,1,0],
            [0,1,1,1,0],
            [0,0,0,0,0],
            [0,1,0,1,0],
            [0,0,0,0,0]
        ],
        [
            [0,0,0,0,0],
            [0,2,0,2,0],
            [0,0,0,0,0],
            [0,2,0,2,0],
            [0,0,0,0,0]
        ],
        [
            [0,0,0,0,0,0,0],
            [0,2,0,0,0,2,0],
            [0,2,1,1,1,2,0],
            [0,2,2,2,2,2,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
        [
            [0,0,0,0,0,0,0],
            [0,2,2,2,2,2,0],
            [0,0,0,0,0,0,0],
            [0,2,2,2,2,2,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
        [
            [1,0,1,0,1,0,1],
            [0,2,0,2,0,2,0],
            [1,0,1,0,1,0,1],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
        [
            [0,0,0,0,0,0,0],
            [0,1,1,0,1,1,0],
            [1,2,2,1,2,2,1],
            [1,2,2,2,2,2,1],
            [0,1,2,2,2,1,0],
            [0,0,1,4,1,0,0],
            [0,0,0,4,0,0,0]
        ],
        [
            [0,0,0,0,0,0,0]
            [0,1,1,1,1,1,0],
            [1,1,2,4,2,1,1],
            [1,1,0,0,0,1,1],
            [0,0,1,1,1,0,0],
            [0,4,0,4,0,4,0],
            [0,0,0,0,0,0,0]
        ],
        [
            [1,-1,2,2,2,-1,1]
            [0,-1,2,4,2,-1,0],
            [0,-1,2,4,2,-1,0],
            [0,4,4,4,4,4,0],
            [-1,-1,0,0,0,-1,-1],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
        [
            [0,0,0,0,0,0,0],
            [0,1,0,2,0,1,0],
            [1,4,2,7,2,4,1],
            [0,1,0,2,0,1,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
    ],
    hard:[0],
}
const oncestage=
    [
        [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,3,3,3,3,3,3,3,3,3,3,3,3,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,2,2,2,2,2,3,3,2,2,2,2,2,2],
            [2,2,2,2,2,2,3,3,2,2,2,2,2,2],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,2,2,2,2,2,3,3,2,2,2,2,2,2],
            [1,1,1,1,1,1,3,3,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,3,3,1,1,1,1,1,1],
            [1,1,1,1,1,1,3,3,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,0,2,0,2,0,3,0,2,0,2,0,2,0],
            [2,0,2,0,2,0,3,0,2,0,2,0,2,0],
            [0,2,0,2,0,2,0,3,0,2,0,2,0,2],
            [0,2,0,2,0,2,0,3,0,2,0,2,0,2],
            [3,0,1,0,1,0,1,0,1,0,1,0,3,0],
            [3,0,1,0,1,0,1,0,1,0,1,0,3,0],
            [0,3,0,1,0,1,0,1,0,1,0,1,0,3],
            [0,3,0,1,0,1,0,1,0,1,0,1,0,3],
            [1,0,1,0,1,0,3,0,1,0,1,0,1,0],
            [1,0,1,0,1,0,3,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,3,0,1,0,1,0,1],
            [0,1,0,1,0,1,0,3,0,1,0,1,0,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,2,2,2,-1,2,2,2,2,-1,2,2,2,2],
            [2,2,2,2,-1,2,2,2,2,-1,2,2,2,2],
            [0,0,0,0,-1,0,0,0,0,-1,0,0,0,0],
            [0,0,0,0,-1,0,0,0,0,-1,0,0,0,0],
            [1,1,1,1,-1,3,3,3,3,-1,1,1,1,1],
            [1,1,1,1,-1,3,3,3,3,-1,1,1,1,1],
            [0,0,0,0,-1,0,0,0,0,-1,0,0,0,0],
            [0,0,0,0,-1,0,0,0,0,-1,0,0,0,0],
            [1,1,1,1,-1,3,3,3,3,-1,1,1,1,1],
            [1,1,1,1,-1,1,1,1,1,-1,1,1,1,1],
            [1,1,1,1,-1,1,1,1,1,-1,1,1,1,1],
            [0,0,0,0,-1,0,0,0,0,-1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ],
        [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,3,3,3,3,3,3,3,3,3,3,3,3,2],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [-1,-1,0,0,-1,-1,0,0,-1,-1,0,0,-1,-1],
            [-1,-1,0,0,-1,-1,0,0,-1,-1,0,0,-1,-1],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,3,3,3,3,3,3,3,3,3,3,3,3,2],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [1,1,1,-1,-1,-1,1,1,-1,-1,-1,1,1,1],
            [1,1,1,-1,-1,-1,1,1,-1,-1,-1,1,1,1],
            [1,1,-1,-1,3,3,3,3,3,3,-1,-1,1,1],
            [1,1,-1,-1,3,3,3,3,3,3,-1,-1,1,1],
            [0,0,-1,0,0,0,0,0,0,0,0,-1,0,0],
            [0,0,-1,0,0,0,0,0,0,0,0,-1,0,0],
            [2,2,-1,2,2,2,2,2,2,2,2,-1,2,2],
            [2,2,-1,2,3,3,3,3,3,3,2,-1,2,2],
            [1,1,-1,-1,1,3,3,3,3,1,-1,-1,1,1],
            [1,1,-1,-1,1,1,1,1,1,1,-1,-1,1,1],
            [0,0,0,-1,-1,-1,0,0,-1,-1,-1,0,0,0],
            [0,0,0,-1,-1,-1,0,0,-1,-1,-1,0,0,0],
        ],
    ]
let stagenow=[[[]]];
function levelstage(level){
    if(level==="easy"){
    stagenow=stage.easy
    stagenow.mode=-1;
    }else if(level==="hard"){
    stagenow=stage.hard
    stagenow.mode=-2;
    }
    changescreenState("game");
}
function selectstage(stage){
    stagenow[0]=oncestage[stage];
    stagenow.mode=stage;
    changescreenState("game");
}
function updatestage(){
    if(stagenum>9||tenflag!=0){
        stagenum=Math.floor( Math.random() * 10 );
    }
    blocksRowLength = stagenow[stagenum].length;
    blocksColumnLength = stagenow[stagenum][0].length;
    blockWidth = blocksAreaWidth / blocksColumnLength;
    blockHeight = (blocksAreaHeight-50) / blocksRowLength;
    balls=[];
    changeGameState('waiting');
    initBall();
    initBlocks();
    time+=10;
}