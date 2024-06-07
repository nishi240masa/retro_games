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
  window.location.href = "/breaking_blocks/html/breaking_blocks_game.html";
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

// popupの表示
let check_popup = getCheck();
window.addEventListener("load", () => {
  console.log("popupの状態を確認");
  console.log(check_popup);
  if (check_popup === "false") {
    console.log("popup表示");
    document.getElementById("popup").style.display = "block";
  } else if (check_popup === "true") {
    console.log("popup非表示");
    document.getElementById("popup").style.display = "none";
  } else {
    console.error("popupの値がおかしいです");
    console.error(check_popup);
    console.error(typeof check_popup);
  }
});

// popupを閉じる
popup_close = document.getElementById("btn_close_popup");
popup_close.addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// チェックボックスの値を取得
const checkBox = document.getElementById("check_popup");
checkBox.addEventListener("change", function () {
  if (checkBox.checked) {
    setCheck("true");
  } else {
    setCheck("false");
  }

  console.log(check_popup);
});

// デバック用
// addLLife;
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

  // ライフが0になった時の処理
  console.log("removeLifezeroカウント");

  lifeZero();
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
