// scoreの取得

let fighting_score = getScore(3);

// スコアが表示される要素を取得
const highScore = document.getElementById("highScore");
const lastScore = document.getElementById("lastScore");

// localStorageからハイスコアを取得、なければ0に初期化
function drawScore() {
  highScore.textContent = fighting_score.high_score;
  lastScore.textContent = fighting_score.last_score;
}

// loadイベント発生時にdrawScoreを実行
window.addEventListener("load", () => {
  drawScore();
});
