document.addEventListener('DOMContentLoaded', function () {

	const continueButton = document.querySelector('#continue');

	if(continueButton != null){
	continueButton.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/gluttony_ready.html';
	});
}

const backButton = document.querySelector('.back');

backButton.addEventListener("click", (event) => {
	console.log("ボタンをクリックしました");
	 location.href = '../html/gluttony_top.html';
});

// localStorageからゲームスコアを取得
const cat = getScore(1);

// スコアが表示される要素を取得
const yourScore = document.querySelector('#yourScore');
if(yourScore != null){
yourScore.textContent = "Game Score:" + cat.last_score;
}

// ハイスコアが表示される要素を取得
const highScore = document.querySelector('#highScore');

// localStorageからハイスコアを取得、なければ0に初期化
highScore.textContent = "High Score:" + cat.high_score;


// const startBtn = document.querySelector('#continue');

// let blinkFlag = 0;
// function blinking (){
// 	if (blinkFlag == 0){
// 		startBtn.style.opacity = 0.1;
// 		blinkFlag = 1;
// 	} else {
// 		startBtn.style.opacity = 1;
// 		blinkFlag = 0;
// 	}
// }

// const bigText = document.querySelector('#bigText');

// let fontsize = 20;

// function gradation() {
// 	if(fontsize <= 100){
// 		bigText.style.fontSize = `${fontsize}px`
// 		fontsize++;
// 		console.log(`${fontsize}pxに設定`);
// 	}else {
// 		clearInterval(gradInter);
// 	}
// }



// setInterval(blinking,415);
// let gradInter = setInterval(gradation,10);


});