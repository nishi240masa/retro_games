// ヘッダーを読み込む
fetch("/header/html/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("#header").innerHTML = data;

    window.addEventListener("load", () => {
      console.log("header_title.js");
      const url = window.location.href;
      if (url.includes("index")) {
        console.log("retro_games");
        retroGameTitle();
      } else if (url.includes("fighting_game")) {
        console.log("fighting_game");
        fightingGameTitle();
      } else if (url.includes("gluttony_monster")) {
        console.log("gramon");
        gramonTitle();
      } else if (url.includes("shooting")) {
        console.log("shooting_game");
        shootingGameTitle();
      } else if (url.includes("breaking_blocks")) {
        console.log("block_breaker");
        blockBreakerTitle();
      } else {
        console.log("other");
      }
    });

    // レトロゲームの時のタイトルを表示する
    function retroGameTitle() {
      console.log("retroGameTitle");
      const title = document.getElementById("title_name");
      console.log(title);
      if (title) title.innerText = "Retro Game";
    }

    // 格ゲーの時のタイトルを表示する
    function fightingGameTitle() {
      const title = document.getElementById("title_name");
      console.log(title);
      if (title) title.innerText = "Pixel Figher";
    }

    // グラモンの時のタイトルを表示する
    function gramonTitle() {
      const title = document.getElementById("title_name");
      console.log(title);
      if (title) title.innerText = "Gluttony Monster";
    }

    // シューティングの時のタイトルを表示する
    function shootingGameTitle() {
      const title = document.getElementById("title_name");
      console.log(title);
      if (title) title.innerText = "Bird Shooting";
    }

    // ブロック崩しの時のタイトルを表示する
    function blockBreakerTitle() {
      const title = document.getElementById("title_name");
      console.log(title);
      if (title) title.innerText = "Block Breaker";
    }
  });
