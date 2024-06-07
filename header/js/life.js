// ライフの表示数をlocalStorageと連動させる

//ライフの描画
function drawLife() {
  console.log("drawLife");
  //ライフをstring型に変換して取得
  const life = getLife().toString();

  //ライフの表示
  // life IDを取得
  const lifeElement = document.getElementById("life");
  const nonelifeElement = document.getElementById("none_life");

  //   spanタグの中身
  const span = `<span class="material-symbols-outlined"> favorite </span>`;

  // life IDの中身にspanタグを追加
  lifeElement.innerHTML = span.repeat(life);
  console.log("life");
  console.log(life);
  console.log("5 - life");
  console.log(5 - life);
  nonelifeElement.innerHTML = span.repeat(5 - life);
}

// load時にライフを描画
window.addEventListener("load", () => {
  drawLife();
});

//ライフの加算
function addLife() {
  plusLife();

  drawLife();
}

// ライフの減算
function removeLife() {
  minusLife();

  drawLife();
}

// ライフが0になった時の処理
function lifeZero() {
  console.log("lifeZeroカウント");
  // ライフが0になった時の処理
  if (getLife() == 0) {
    console.log("lifeZero");

    // gameOverを表示する
    // なぜか動かない
    document.getElementById("game_over_pop").style.display = "block";
    console.log("game_over");
  }
}
