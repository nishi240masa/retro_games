document.addEventListener('DOMContentLoaded', function () {

	const continueButton = document.querySelector('#continue');

	if(continueButton != null){
	continueButton.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/gluttony_ready.html';
	});
}

	const quitButton = document.querySelector('#quit');

	if(quitButton != null){
	quitButton.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/gluttony_top.html';
	});

}

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

// const cat = localStorage.getItem("gameScore");

// // スコアが表示される要素を取得
// const score = document.querySelector('#yourScore');
// if(score != null){
// score.textContent = cat;
// }

// // ハイスコアが表示される要素を取得
// const highScore = document.querySelector('#highScore');

// // localStorageからハイスコアを取得、なければ0に初期化
// let keepHighScore = localStorage.getItem("highScore") || 0;
// highScore.textContent = keepHighScore;

// console.log(keepHighScore + " | " + highScore.textContent);

// // 現在のスコアとハイスコアを比較し、必要なら更新
// if (Number(highScore.textContent) < Number(cat)) {
//     console.log("highScoreに" + cat + "を代入します");
//     highScore.textContent = cat;
//     keepHighScore = cat;
//     localStorage.setItem("highScore", cat); // 新しいハイスコアをlocalStorageに保存
// }

// // 一時的なゲームスコアをlocalStorageから削除
// localStorage.removeItem("gameScore");


	

});