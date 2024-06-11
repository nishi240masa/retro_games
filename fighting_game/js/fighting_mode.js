// retun
document.getElementById("return").addEventListener("click", () => {
  window.location.href = "/fighting_game/html/fighting_top.html";
});

// modeの値を取得

function onClickButton() {
  console.log(`${this.value}がクリックされました`);
}

// easy
document.getElementById("btn_easy").addEventListener("click", () => {

  // 変数を渡す
  const mode = "easy";
  
  // 画面遷移
  window.location.href = "../html/mode/fighting_easy.html";
});
// normal
document.getElementById("btn_normal").addEventListener("click", () => {
  // 画面遷移
  window.location.href = "../html/mode/fighting_normal.html";
});
// hard
document.getElementById("btn_hard").addEventListener("click", () => {
  // 画面遷移
  window.location.href = "../html/mode/fighting_hard.html";
});
