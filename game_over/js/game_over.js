// gameOverを表示する
fetch("/game_over/html/geme_over.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("#game_over").innerHTML = data;
    console.log("描画");

    // ボタンを押した時にindex.htmlに遷移する
    if (document.getElementById("btn_close_gameover") !== null) {
      console.log("btn_close_gameover");
      document
        .getElementById("btn_close_gameover")
        .addEventListener("click", () => {
          document.getElementById("game_over_pop").style.display = "none";
          //   ライフの初期化
          initLife();
          console.log("game_over");
          window.location.href = "/main/html/index.html";
        });
    }
  });
