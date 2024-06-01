// canvasの横幅
const canvasWidth = 400;

// canvasの縦幅
const canvasHeight = 600;

// canvasの背景色
const backgroundColor = '#333333';
const extraAreaColor= '#ffffff';
// ブロックエリアの横幅
const blocksAreaWidth = canvasWidth;
//スコア、タイマーの表示エリア
const extraAreaWItdh=canvasWidth;
const extraAreaHeight=50;
// ブロックエリアの縦幅
const blocksAreaHeight = 250;
let stagenum=0;
// 行の個数
let blocksRowLength = stage.easy[stagenum].length;

// 列の個数 
let blocksColumnLength = stage.easy[stagenum][0].length;

// １つのブロックの横幅
let blockWidth = blocksAreaWidth / blocksColumnLength;

// １つのブロックの縦幅
let blockHeight = (blocksAreaHeight-50) / blocksRowLength;
// 操作バーの横幅
const barWidth = 75;

// 操作バーの横幅の半分の長さ
const barHalfWidth = barWidth / 2;

// 操作バーの縦幅
const barHeight = 5;

// 操作バーの縦方向の位置
const barPosition = canvasHeight - 60;

// 操作バーの色
const barColor = 'white';
// ボールの半径
const ballRadius = 6;

// ボールの色
const ballColor = 'orange';

// ボールの移動スピード
const cspeed=6
let speed = cspeed;
let scorex=1.0;
let dspeed =0.1;
let dscorex=0.05;
let gameState = 'initial';
let screenState='start';
let clearstage=1;
let HIscorenormal=0;
let HIscorehard=0;
let HIscorestage=[0,0,0,0,0,0];
const checkval=[1,2,3,5,7,11];
const blocksCanvas = document.getElementById('blocks-canvas');

// canvasのサイズを設定
blocksCanvas.width = canvasWidth;
blocksCanvas.height = canvasHeight;

// コンテキストの取得
const blocksCtx = blocksCanvas.getContext("2d");
const messagescreenCanvas =document.getElementById('message-screen');
messagescreenCanvas.width = canvasWidth;
messagescreenCanvas.height = canvasHeight;
const messagescreenCtx = messagescreenCanvas.getContext("2d");
const barBallsCanvas = document.getElementById('bar-balls-canvas');
barBallsCanvas.width = canvasWidth;
barBallsCanvas.height = canvasHeight;
const barBallsCtx = barBallsCanvas.getContext("2d");
//const messageLabel = document.getElementById('message');
//const blocksCountLabel = document.getElementById('blocks-count');

