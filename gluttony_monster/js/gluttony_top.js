document.addEventListener('DOMContentLoaded', function () {

	const button = document.querySelector('#goGame');

	button.addEventListener("click", () => {
		console.log("CONTINUEボタンを押しました。レディ画面に飛びます。");
		location.href = '../html/gluttony_ready.html';
	});

	const backButton = document.querySelector('.back');

	backButton.addEventListener("click", () => {
		console.log("戻るボタンを押しました。メインページに飛びます。");
		 location.href = '../../main/html/index.html';
	});


// localStorageからゲームスコアを取得
const cat = getScore(1);

// スコアが表示される要素を取得
const yourScore = document.querySelector('#yourScore');
if(yourScore != null){
yourScore.textContent = cat.last_score;
}

// ハイスコアが表示される要素を取得
const highScore = document.querySelector('#highScore');

// localStorageからハイスコアを取得、なければ0に初期化
highScore.textContent = "High Score:" + cat.high_score;



});