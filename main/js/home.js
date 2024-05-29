btn_gluttony = document.getElementById("btn_gluttony");
btn_gluttony.addEventListener("click", function () {
  window.location.href = "../../gluttony_monster/html/gluttony.html";
});

btn_fight = document.getElementById("btn_fight");
btn_fight.addEventListener("click", function () {
  window.location.href = "../../fighting_game/html/fighting_main.html";
});

btn_shooting = document.getElementById("btn_shooting");
btn_shooting.addEventListener("click", function () {
  window.location.href = "../../shooting/html/shooting.html";
});

btn_breaking = document.getElementById("btn_breaking");
btn_breaking.addEventListener("click", function () {
  window.location.href = "../../breaking_blocks/html/breaking.html";
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
