btn_gluttony = document.getElementById("btn_gluttony");
btn_gluttony.addEventListener("click", function () {
  window.location.href = "/gluttony_monster/html/gluttony_top.html";
});

btn_fight = document.getElementById("btn_fight");
btn_fight.addEventListener("click", function () {
  window.location.href = "/fighting_game/html/fighting_top.html";
});

btn_shooting = document.getElementById("btn_shooting");
btn_shooting.addEventListener("click", function () {
  window.location.href = "/shooting/html/shooting_top.html";
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

// game_over_popupの表示
game_over_popup = document.getElementById("game_over_popup");
window.addEventListener("load", () => {
  const game_over = getGameOver();
  if (game_over === "true") {
    game_over_popup.style.display = "block";
  } else {
    game_over_popup.style.display = "none";
  }
});

// game_over_popupの非表示
btn_close_gameover_popup = document.getElementById("btn_close_gameover_popup");
btn_close_gameover_popup.addEventListener("click", function () {
  document.getElementById("game_over_popup").style.display = "none";
  setGameOver("false");
});
