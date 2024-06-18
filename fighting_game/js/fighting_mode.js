// retun
document.getElementById("return").addEventListener("click", () => {
  window.location.href = "/fighting_game/html/fighting_top.html";
});

// easy
document.getElementById("btn_easy").addEventListener("click", () => {
  //modeの値を取得
  let mode = "easy";
  //modeの値を別のjsファイルに渡す
  setFightingMode(mode);

  // 画面遷移
  window.location.href = "../html/mode/fighting_easy.html";
});
// normal
document.getElementById("btn_normal").addEventListener("click", () => {
  //modeの値を取得
  let mode = "normal";
  //modeの値を別のjsファイルに渡す
  setFightingMode(mode);
  // 画面遷移
  window.location.href = "../html/mode/fighting_normal.html";
});
// hard
document.getElementById("btn_hard").addEventListener("click", () => {
  //modeの値を取得
  let mode = "hard";
  //modeの値を別のjsファイルに渡す
  setFightingMode(mode);
  // 画面遷移
  window.location.href = "../html/mode/fighting_hard.html";
});
