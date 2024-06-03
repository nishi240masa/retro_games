
let blocks = [];
let blocksCount = 0;
let tenflag=0;

const blockDictionary = {

    'normal': {
        borderColor: 'midnightblue',
        fillColor: 'deepskyblue',
        hitPoints: 1,
        score_bb:100,
    },
    'hard': {
        borderColor: 'black',
        fillColor: 'blue',
        hitPoints: 2,
        score_bb:200,
        effect () {
            // 色を変更したあとcanvasに描く
            this.borderColor = 'midnightblue';
            this.fillColor = 'deepskyblue';
            drawBlock(this);
        }
    },
    'wall': {
        borderColor: 'lightgray',
        fillColor: 'whitesmoke',
        isUnbreakable: true,
    },
    'time':{
        borderColor: 'limegreen',
        fillColor: 'lime',
        hitPoints: 1,
        score_bb:100,
        effect () {
            time+=10;
        }
    }
};



const createBlock = (blockName, rowIndex, columnIndex) => {

    const block = {
        ...blockDictionary[blockName],
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        x: columnIndex * blockWidth,
        y: rowIndex * blockHeight+extraAreaHeight
    };

    blocks[rowIndex][columnIndex] = block;

    if (!block.isUnbreakable) {
        blocksCount++;
    }

    drawBlock(block);
};



const drawBlock = (block) => {

    blocksCtx.fillStyle = block.borderColor;
    blocksCtx.fillRect(block.x, block.y, blockWidth, blockHeight);
    //blocksCtx.fillStyle = extraAreaColor;
    //blocksCtx.fillRect(0, 0, extraAreaWItdh-1, extraAreaHeight-1);
    blocksCtx.fillStyle = block.fillColor;
    blocksCtx.fillRect(block.x + 1, block.y + 1, blockWidth - 2, blockHeight - 2);
};



const eraseBlock = (block) => {
    blocksCtx.fillStyle = backgroundColor;
    blocksCtx.fillRect(block.x, block.y, blockWidth, blockHeight);
};



const removeBlock = (block) => {

    blocks[block.rowIndex][block.columnIndex] = null;

    eraseBlock(block);
    score_bb+=block.score_bb*scorex;
    blocksCount--;
    speed+=dspeed;
    scorex+=dscorex;
    //updateBlocksCountLabel();

    if (blocksCount === 0) {
        if(stagenow.mode<0){
        stagenum++;
        updatestage();
        }else{
            changeGameState('gameClear')
        }
    }
};



const clideBlock = (ball, block) => {
    if (block.isUnbreakable) {
        return;
    }

    block.hitPoints--;

    if (block.effect) {
        block.effect(ball);
    }
    
    if (block.hitPoints === 0) {
        removeBlock(block);
    }
};



const initBlocks = () => {

    blocks = [];
    blocksCount = 0;

    blocksCtx.fillStyle = backgroundColor;
    blocksCtx.fillRect(0, extraAreaHeight, canvasWidth, canvasHeight);

    for (let rowIndex = 0; rowIndex < blocksRowLength; rowIndex++) {
        blocks.push([]);

        for (let columnIndex = 0; columnIndex < blocksColumnLength; columnIndex++) {
            if(stagenow[stagenum][rowIndex][columnIndex]==1)
                createBlock('normal', rowIndex, columnIndex);
            else if(stagenow[stagenum][rowIndex][columnIndex]==2)
                createBlock('hard', rowIndex, columnIndex);
            else if(stagenow[stagenum][rowIndex][columnIndex]==3)
                createBlock('time', rowIndex, columnIndex);
            else if(stagenow[stagenum][rowIndex][columnIndex]==-1)
                createBlock('wall', rowIndex, columnIndex);
        }
    }

    //updateBlocksCountLabel();
};



const updateBlocksCountLabel = () => {
    //blocksCountLabel.textContent = blocksCount;
};