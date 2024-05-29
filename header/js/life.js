// ライフの表示数をlocalStorageと連動させる

//ライフの描画
function drawLife() {
  //ライフをstring型に変換して取得
  const life = getLife().toString();

  //ライフの表示
  // life IDを取得
  const lifeElement = document.getElementById("life");
  // life_count IDを取得
  const lifeCount = document.getElementById("life_count");

  //   spanタグの中身
  const span = `<span class="material-symbols-outlined"> favorite </span>`;

  // life IDの中身にspanタグを追加
  lifeElement.innerHTML = span.repeat(life);

  // lifeの型を確認
  console.log("life");
  console.log(typeof life);
  console.log(life);

  // life_countの中身にlifeの数を追加
  lifeCount.innerText = life;
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
