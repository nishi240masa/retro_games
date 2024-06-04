// gameOverを表示する
fetch("/game_over/html/geme_over.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("#game_over").innerHTML = data;
    console.log("描画");
  });

// ボタンを押した時にindex.htmlに遷移する
if (document.getElementById("btn_close_gameover") !== null) {
  document
    .getElementById("btn_close_gameover")
    .addEventListener("click", () => {
      document.getElementById("game_over").style.display = "block";
      window.location.href = "/index.html";
    });
}
