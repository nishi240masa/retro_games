// retun
document.getElementById("return").addEventListener("click", () => {
  window.location.href = "/fighting_game/html/fighting_top.html";
});
// easy
document.getElementById("btn_easy").addEventListener("click", () => {
  // btnのvalueを取得
  const btn = document.getElementById("btn_easy");
  const value = btn.value;

  document.write(
    `<script src="/fighting_game/js/characters.js?mode=${value}"></script>`
  );

  // 画面遷移
  window.location.href = "../html/mode/fighting_easy.html";
});
// normal
document.getElementById("btn_normal").addEventListener("click", () => {
  // btnのvalueを取得
  const btn = document.getElementById("btn_normal");
  const value = btn.value;

  document.write(
    `<script src="/fighting_game/js/characters.js?mode=${value}"></script>`
  );

  // 画面遷移
  window.location.href = "../html/mode/fighting_normal.html";
});
// hard
document.getElementById("btn_hard").addEventListener("click", () => {
  // btnのvalueを取得
  const btn = document.getElementById("btn_hard");
  const value = btn.value;

  document.write(
    `<script src="/fighting_game/js/characters.js?mode=${value}"></script>`
  );
  // 画面遷移
  window.location.href = "../html/mode/fighting_hard.html";
});
