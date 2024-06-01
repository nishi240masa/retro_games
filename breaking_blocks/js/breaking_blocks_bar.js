let bar;
let degree=90;
let flag=0;
const initBar = () => {

    bar = {
        x: canvasWidth / 2,
        y: barPosition,
        bottomY: barPosition + barHeight,
        get leftX () { return this.x - barHalfWidth; },
        get rightX () { return this.x + barHalfWidth; }
    };
};



const setBarX = (event) => {

    if (event.offsetX) {
        bar.x = event.offsetX;

    } else {
        const touchEvent = event.changedTouches[0];
        bar.x = touchEvent.pageX - touchEvent.target.getBoundingClientRect().left;
    }

    bar.x *= barBallsCanvas.width / barBallsCanvas.clientWidth;

    if (bar.leftX < 0) {
        bar.x = barHalfWidth;

    } else if (bar.rightX > canvasWidth) {
        bar.x = canvasWidth - barHalfWidth;
    }
};



const drawBar = () => {

    barBallsCtx.fillStyle = barColor;
    barBallsCtx.fillRect(bar.leftX, bar.y, barWidth, barHeight);
};



const clideBar = (ball) => {

    const clidedPosition = (bar.rightX - ball.x) / barWidth;

    const degree = clidedPosition * 100 + 40;

    const { dx, dy } = calcDeltaXY(degree);

    ball.dx = dx;
    ball.dy = dy;
};




const calcDeltaXY = (degree) => {

    const radian = degree * Math.PI / 180;

    return {
        dx: Math.cos(radian) * speed,
        dy: -Math.sin(radian) * speed,
    };
};
const initya=()=>{
    ya={
        x:canvasWidth/2,
        y:barPosition,
        bottomY: barPosition + barHeight,
        get upY () { return this.y - barHalfWidth; },
        get downY () { return this.y + barHalfWidth; }
    }
}
const drawya=(radian)=>{
    barBallsCtx.fillStyle = barColor;
    barBallsCtx.beginPath();
    barBallsCtx.arc((bar.leftX+bar.rightX)/2+100*Math.cos(radian), bar.y-100*Math.sin(radian), ballRadius, 0, 2 * Math.PI);
    barBallsCtx.fill();
}
const moveyaOnbar=()=>{
    const radian = degree * Math.PI / 180;
    drawya(radian)
    if(flag==0){
    degree-=speed/3;
    }else if(flag==1){
    degree+=speed/3;
    }
    if(degree>=140){
        flag=0;
    }if(degree<=40){
        flag=1;
        }
}