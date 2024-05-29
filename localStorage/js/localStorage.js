const score = [
  {
    // ゲームID(0): ブロック崩し
    game_id: 0,
    last_score: 0,
    high_score: 0,
  },
  {
    // ゲームID(1): グラモン
    game_id: 1,
    last_score: 0,
    high_score: 0,
  },

  {
    // ゲームID(2): シューティング
    game_id: 2,
    last_score: 0,
    high_score: 0,
  },
  {
    // ゲームID(3): 格ゲー
    game_id: 3,
    last_score: 0,
    high_score: 0,
  },
];

const life = 5;

// 最初に実行（使うな）
function init() {
  // localStorageに接続できるか確認

  // ライフの初期化
  initLife();
  // スコアの初期化
  initScore();
}

// ライフを減らす（使うな）
function minusLife() {
  let life = localStorage.getItem("life");
  if (life <= 0) {
    return;
  }
  life--;
  localStorage.setItem("life", life);
}

// ライフを増やす　（使うな）
function plusLife() {
  let life = localStorage.getItem("life");
  if (life >= 5) {
    return;
  }
  life++;
  localStorage.setItem("life", life);
}

// ライフを取得
function getLife() {
  if (localStorage.getItem("life") == null) {
    initLife();

    return localStorage.getItem("life");
  }

  return localStorage.getItem("life");
}

// ライフの初期化
function initLife() {
  localStorage.setItem("life", 5);
}

// 全員のスコアの初期化
function initScore() {
  const scoreArray = JSON.stringify(score);
  localStorage.setItem("score", scoreArray);
}

// 個別でスコアを初期化
function initPersonal(game_id) {
  // エラー処理
  if (game_id < 0 || game_id >= score.length) {
    console.error("game_idが不正です");
    return;
  }

  let scoreArray = JSON.parse(localStorage.getItem("score"));
  scoreArray[game_id].last_score = 0;
  scoreArray[game_id].high_score = 0;
  localStorage.setItem("score", JSON.stringify(scoreArray));
}

// scoreをセット
function setScore(game_id, score) {
  // エラー処理
  if (game_id < 0 || game_id >= score.length) {
    console.error("game_idが不正です");
    return;
  }

  let scoreArray = JSON.parse(localStorage.getItem("score"));
  let last_score = scoreArray[game_id].last_score;
  let high_score = scoreArray[game_id].high_score;

  last_score = score;

  if (score > high_score) {
    high_score = score;
  }

  console.log("last_score: " + last_score);
  console.log("high_score: " + high_score);
}

// scoreを取得
function getScore(game_id) {
  // エラー処理
  if (game_id < 0 || game_id >= score.length) {
    console.error("game_idが不正です");
    return;
  }
  let scoreArray = JSON.parse(localStorage.getItem("score"));
  const score = {
    last_score: scoreArray[game_id].last_score,
    high_score: scoreArray[game_id].high_score,
  };

  console.log("last_score: " + score.last_score);
  return score;
}

// 取得の使い方
// score= getScore(1);
// const game_score = getScore(1);
// game_score.last_score; //last_score
// game_score.high_score; //high_score
