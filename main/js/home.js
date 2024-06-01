btn_gluttony = document.getElementById("btn_gluttony");
btn_gluttony.addEventListener("click", function () {
  window.location.href = "/gluttony_monster/html/gluttony_top.html";
});

btn_fight = document.getElementById("btn_fight");
btn_fight.addEventListener("click", function () {
  window.location.href = "../../fighting_game/html/fighting_main.html";
});

btn_shooting = document.getElementById("btn_shooting");
btn_shooting.addEventListener("click", function () {
  window.location.href = "/shooting/html/shooting_main.html";
});

btn_breaking = document.getElementById("btn_breaking");
btn_breaking.addEventListener("click", function () {
  window.location.href = "/breaking_blocks/html/breaking_blocks_index.html";
});

// 最初に読み込んだ時にlocalsotrageの初期化を行う
window.addEventListener("load", () => {
  // ローカルストレージの初期化
  const item = localStorage.getItem("score");
  const life = localStorage.getItem("life");
  if (item === null || life === null) {
    initlocal();
  }
});

// デバック用
// addLLife
btn_addLife = document.getElementById("btn_addLife");
btn_addLife.addEventListener("click", function () {
  plusLife();
  // 画面を更新する(loadを行わずに)
  drawLife();
});

// removeLife
btn_removeLife = document.getElementById("btn_removeLife");
btn_removeLife.addEventListener("click", function () {
  minusLife();

  // 画面を更新する(loadを行わずに)
  drawLife();
});

// ローカルストレージを消す
btn_removeLocalStorage = document.getElementById("btn_removeLocalStorage");
btn_removeLocalStorage.addEventListener("click", function () {
  localStorage.clear();
});

// ローカルストレージをget
btn_getLocalStorage = document.getElementById("btn_getLocalStorage");
btn_getLocalStorage.addEventListener("click", function () {
  console.log(localStorage.getItem("life"));
  console.log(localStorage.getItem("score"));
});
