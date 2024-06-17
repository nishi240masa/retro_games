document.addEventListener("DOMContentLoaded", function () {
  // localStorageからゲームスコアを取得
  const cat = getScore(3);

  // スコアが表示される要素を取得
  const yourScore = document.querySelector("#yourScore");
  if (yourScore != null) {
    yourScore.textContent = cat.last_score;
  }

  // ハイスコアが表示される要素を取得
  const highScore = document.querySelector("#highScore");

  // localStorageからハイスコアを取得、なければ0に初期化
  highScore.textContent = "High Score:" + cat.high_score;
});

const button = document.querySelector("#goGame");

button.addEventListener("click", () => {
  console.log("ボタンをクリックしました");
  location.href = "/fighting_game/html/fighting_mode.html";
});

const backButton = document.querySelector(".back");

backButton.addEventListener("click", () => {
  console.log("ボタンをクリックしました");
  location.href = "../../main/html/index.html";
});
