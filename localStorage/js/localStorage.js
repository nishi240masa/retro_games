const overallScore = [
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

const bleck_breaker = {
  // ゲームID(0): ブロック崩し
  game_id: 0,
  bleck_score: [
    {
      id: 0,
      last_score: 0,
      high_score: 0,
    },
    {
      id: 1,
      last_score: 0,
      high_score: 0,
    },
    {
      id: 2,
      last_score: 0,
      high_score: 0,
    },
    {
      id: 3,
      last_score: 0,
      high_score: 0,
    },
    {
      id: 4,
      last_score: 0,
      high_score: 0,
    },
    {
      id: 5,
      last_score: 0,
      high_score: 0,
    },
    {
      id: 6,
      last_score: 0,
      high_score: 0,
    },
    {
      id: 7,
      last_score: 0,
      high_score: 0,
    },
    {
      id: 8,
      last_score: 0,
      high_score: 0,
    },
  ],
};

const fighting_mode = "normal";

const life = 5;

const check = "false";

const game_over = "false";

// 最初に実行（使うな）
function initlocal() {
  // localStorageに接続できるか確認

  // ライフの初期化
  initLife();
  // スコアの初期化
  initScore();

  // ブロック崩しのスコアの初期化
  initBleckBreakerScore();

  // checkの初期化
  initCheck();

  console.log("初期化完了");
}
// checkの初期化
function initCheck() {
  localStorage.setItem("check", check);
  // エラー処理
  if (localStorage.getItem("check") == null) {
    console.error("checkの初期化に失敗しました");
    return;
  }
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

// ライフを取得(使うな)
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
  // エラー処理
  if (localStorage.getItem("life") == null) {
    console.error("lifeの初期化に失敗しました");
    return;
  }
}

// 全員のスコアの初期化
function initScore() {
  const scoreArray = JSON.stringify(overallScore);
  localStorage.setItem("score", scoreArray);

  // エラー処理
  if (localStorage.getItem("score") == null) {
    console.error("scoreの初期化に失敗しました");
    return;
  }
}

// ブロック崩しのスコアを初期化
function initBleckBreakerScore() {
  const bleckScoreArray = JSON.stringify(bleck_breaker.bleck_score);
  localStorage.setItem("bleck_score", bleckScoreArray);
}

// 個別でスコアを初期化
function initPersonal(game_id) {
  // エラー処理
  if (game_id < 0 || game_id >= overallScore.length) {
    console.error("game_idが不正です");
    return;
  }
  // localStorageがなかったら初期化
  if (localStorage.getItem("score") == null) {
    initScore();
  }

  let scoreArray = JSON.parse(localStorage.getItem("score"));
  scoreArray[game_id].last_score = 0;
  scoreArray[game_id].high_score = 0;
  localStorage.setItem("score", JSON.stringify(scoreArray));
}

// checkのセット
function setCheck(checkValue) {
  // localStorageがなかったら初期化
  if (localStorage.getItem("check") == null) {
    initCheck();
  }
  if (checkValue === "true" || checkValue === "false") {
    console.log("setCheck");
    console.log(checkValue);
    localStorage.setItem("check", checkValue);
    return;
  } else {
    console.error("checkValueが不正です");
    return;
  }
}

// scoreをセット
function setScore(game_id, scoreValue) {
  // エラー処理
  if (game_id < 0 || game_id >= overallScore.length) {
    console.error("game_idが不正です");
    return;
  }

  // localStorageがなかったら初期化
  if (localStorage.getItem("score") == null) {
    initPersonal(game_id);
  }

  let scoreArray = JSON.parse(localStorage.getItem("score"));
  let last_score = scoreArray[game_id].last_score;
  let high_score = scoreArray[game_id].high_score;

  last_score = scoreValue;

  if (scoreValue > high_score) {
    high_score = scoreValue;
  }

  console.log("last_score: " + last_score);
  console.log("high_score: " + high_score);

  // スコアをセット
  scoreArray[game_id].last_score = last_score;
  scoreArray[game_id].high_score = high_score;

  localStorage.setItem("score", JSON.stringify(scoreArray));
}

// ブロック崩しのスコアをセット
function setBleckBreakerScore(id, scoreValue) {
  // エラー処理
  if (id < 0 || id >= bleck_breaker.bleck_score.length) {
    console.error("game_idが不正です");
    return;
  }

  // localStorageがなかったら初期化
  if (localStorage.getItem("bleck_score") == null) {
    initBleckBreakerScore();
  }

  const scoreArray = JSON.parse(localStorage.getItem("bleck_score"));
  let last_score = scoreArray[id].last_score;
  let high_score = scoreArray[id].high_score;

  last_score = scoreValue;

  if (scoreValue > high_score) {
    high_score = scoreValue;
  }

  console.log("last_score: " + last_score);
  console.log("high_score: " + high_score);

  // スコアをセット
  scoreArray[id].last_score = last_score;
  scoreArray[id].high_score = high_score;

  localStorage.setItem("bleck_score", JSON.stringify(scoreArray));
}

// チェックの取得
function getCheck() {
  // localStorageがなかったら初期化
  if (localStorage.getItem("check") == null) {
    initCheck();
  }
  console.log("getCheck");
  console.log(localStorage.getItem("check"));
  return localStorage.getItem("check");
}

// game_overのセット
function setGameOver(game_over) {
  // localStorageがなかったら初期化
  if (localStorage.getItem("game_over") == null) {
    localStorage.setItem("game_over", game_over);
  }
  localStorage.setItem("game_over", game_over);
}
// game_overの取得
function getGameOver() {
  // localStorageがなかったら初期化
  if (localStorage.getItem("game_over") == null) {
    localStorage.setItem("game_over", game_over);
  }
  return localStorage.getItem("game_over");
}

// ブロック崩しのスコアを取得
function getBleckBreakerScore(id) {
  // エラー処理
  if (id < 0 || id >= bleck_breaker.bleck_score.length) {
    console.error("game_idが不正です");
    return;
  }
  // localStorageがなかったら初期化
  if (localStorage.getItem("bleck_score") == null) {
    initBleckBreakerScore();
  }

  let scoreArray = JSON.parse(localStorage.getItem("bleck_score"));
  const score = {
    last_score: scoreArray[id].last_score,
    high_score: scoreArray[id].high_score,
  };

  return score;
}

// scoreを取得
function getScore(game_id) {
  // エラー処理
  if (game_id < 0 || game_id >= overallScore.length) {
    console.error("game_idが不正です");
    return;
  }
  // localStorageがなかったら初期化
  if (localStorage.getItem("score") == null) {
    initPersonal(game_id);
  }

  let scoreArray = JSON.parse(localStorage.getItem("score"));
  const score = {
    last_score: scoreArray[game_id].last_score,
    high_score: scoreArray[game_id].high_score,
  };

  console.log("last_score: " + score.last_score);
  return score;
}

// fighting_modeをセット
function setFightingMode(mode) {
  // localStorageがなかったら初期化
  if (localStorage.getItem("fighting_mode") == null) {
    localStorage.setItem("fighting_mode", mode);
  }
  localStorage.setItem("fighting_mode", mode);
}

// fighting_modeを取得
function getFightingMode() {
  // localStorageがなかったら初期化
  if (localStorage.getItem("fighting_mode") == null) {
    localStorage.setItem("fighting_mode", fighting_mode);
  }
  return localStorage.getItem("fighting_mode");
}

// 取得の使い方
// score= getScore(1);
// const game_score = getScore(1);
// game_score.last_score; //last_score
// game_score.high_score; //high_score
