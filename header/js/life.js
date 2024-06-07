// ライフの表示数をlocalStorageと連動させる

//ライフの描画
function drawLife() {
  console.log("drawLife");
  //ライフを取得
  const life = getLife();

  //ライフの表示
  // life IDを取得
  const lifeElement = document.getElementById("life");

  const filledHeart = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="#EA3323"
    >
      <path
        d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z"
      />
    </svg>
  `;
  const outlineHeart = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="#EA3323"
    >
      <path
        d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"
      />
    </svg>
  `;

  lifeElement.innerHTML =
    filledHeart.repeat(life) + outlineHeart.repeat(5 - life);
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
