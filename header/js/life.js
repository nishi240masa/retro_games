// ライフの表示数をlocalStorageと連動させる

//ライフの描画
function drawLife() {
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
  console.log(life);
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
