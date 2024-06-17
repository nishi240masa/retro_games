let balls;


const ballProto = {
    get topY () { return this.y - ballRadius; },
    get bottomY () { return this.y + ballRadius; },
    get leftX () { return this.x - ballRadius; },
    get rightX () { return this.x + ballRadius; },
};



const createBall = (x, y, degree) => {

    const { dx, dy } = calcDeltaXY(degree);

    balls.push({ x, y, dx, dy, __proto__: ballProto });
};



const initBall = () => {

    balls = [];

    createBall(bar.x, bar.y - ballRadius, degree);
};



const drawBall = (ball) => {

    barBallsCtx.fillStyle = ballColor;
    barBallsCtx.beginPath();
    barBallsCtx.arc(ball.x, ball.y, ballRadius, 0, 2 * Math.PI);
    barBallsCtx.fill();
};



const moveBallOnBar = () => {

    balls[0].x = bar.x;
    drawBall(balls[0]);
    if(gameState==='waiting')
    moveyaOnbar();
};


const checkEdgeCollision = (ball) => {

    if (ball.topY < extraAreaHeight) {
        ball.y = ballRadius+extraAreaHeight;
        ball.dy = -ball.dy;
        //se2.pause();
        //se2.currentTime = 0;
        //se2.play();
    } else if (ball.leftX < 0) {
        ball.x = ballRadius;
        ball.dx = -ball.dx;
        //se2.pause();
        //se2.currentTime = 0;
        //se2.play();
    } else if (ball.rightX > canvasWidth) {
        ball.x = canvasWidth - ballRadius;
        ball.dx = -ball.dx;
        //se2.pause();
        //se2.currentTime = 0;
        //se2.play();
    }
};




const checkBarCollision = (ball) => {

    if (
        ball.x > bar.leftX
        && ball.x < bar.rightX
        && ball.bottomY > bar.y
        && ball.topY < bar.bottomY
    ) {
        //se3.pause();
        //se3.currentTime = 0;
        //se3.play();
        clideBar(ball);
    }
};



const checkBlockCollision = (ball) => {

    const topRowIndex = Math.floor((ball.topY-extraAreaHeight) / (blockHeight));
    const centerRowIndex = Math.floor((ball.y-extraAreaHeight) / (blockHeight));
    const bottomRowIndex = Math.floor((ball.bottomY-extraAreaHeight) / (blockHeight));
    const leftColumnIndex = Math.floor(ball.leftX / blockWidth);
    const centerColumnIndex = Math.floor(ball.x / blockWidth);
    const rightColumnIndex = Math.floor(ball.rightX / blockWidth);


    if (blocks[bottomRowIndex] && blocks[bottomRowIndex][centerColumnIndex]) {

        clideBlock(ball, blocks[bottomRowIndex][centerColumnIndex]);
        console.log("bottom");
        //se1.pause();
        //se1.currentTime = 0;
        //se1.play();
        if (ball.dy > 0) {
            ball.dy = -ball.dy;
        } else {
            ball.dx = -ball.dx;
        }

    }
    else if (blocks[topRowIndex] && blocks[topRowIndex][centerColumnIndex]) {

        clideBlock(ball, blocks[topRowIndex][centerColumnIndex]);
        //se1.pause();
        //se1.currentTime = 0;
        //se1.play();
        console.log("top");
        if (ball.dy < 0) {
            ball.dy = -ball.dy;

        } else {
            ball.dx = -ball.dx;
        }

    }  else if (blocks[centerRowIndex] && blocks[centerRowIndex][leftColumnIndex]) {

        clideBlock(ball, blocks[centerRowIndex][leftColumnIndex]);
        //se1.pause();
        //se1.currentTime = 0;
        //se1.play();
        console.log("left");
        if (ball.dx < 0) {
            ball.dx = -ball.dx;
        } else {
            ball.dy = -ball.dy;
        }

    } else if (blocks[centerRowIndex] && blocks[centerRowIndex][rightColumnIndex]) {

        clideBlock(ball, blocks[centerRowIndex][rightColumnIndex]);
        //se1.pause();
        //se1.currentTime = 0;
        //se1.play();
        console.log("right");
        if (ball.dx > 0) {
            ball.dx = -ball.dx;
        } else {
            ball.dy = -ball.dy;
        }
    }
};



const checkDropped = (ball, index) => {

    if (ball.topY > canvasHeight) {

        balls.splice(index, 1);

        if (balls.length === 0) {
            if(screenState==='game'){
            changeGameState('waiting');
            }else{
                helpflag=0
            }
            if(stagenow.mode>=0){
                if(time>20){
                    time-=20;
                }else{
                    time=0;
                }
            }
            scorex=1.0;
            speed=cspeed;
            initBall();
        }
    }
};


const moveBalls = () => {

    for (let i = balls.length - 1; i >= 0; i--) {

        const ball = balls[i];

        ball.x += ball.dx;
        ball.y += ball.dy;

        checkEdgeCollision(ball);

        checkBarCollision(ball);

        checkBlockCollision(ball);

        checkDropped(ball, i);

        drawBall(ball);
    }
};