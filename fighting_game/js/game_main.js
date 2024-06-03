// カウントダウンの初期設定
let countdown = 5;
let countdownInterval;

// 制限時間の初期設定（3分間）
let gameTime = 180;
let gameTimeInterval;

// スコアの初期設定
let current_score = 0;

// closeボタンを作成
function close() {
  const close = document.getElementById("close");
  close.innerHTML = `<a href="/fighting_game/html/fighting_mode.html">戻る</a>`;
  console.log("close");
}

// scoreの計算
// スコアを計算する関数
function calculateScore() {
  const timeScore = (180 - gameTime) * 10; // 残り時間のスコア
  const hpScore = player1.hp * 20; // 残りHPのスコア
  current_score = timeScore + hpScore;
  console.log("スコア計算");
  console.log(current_score);
}

// player1のHPを描画
function drawPlayer1HP() {
  if (player1.hp <= 0) {
    player1.hp = 0;
  }
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, player1.hp, 10);
  ctx.strokeStyle = "white";
  ctx.strokeRect(9, 9, 102, 12);
}

// enemyのHPを描画
function drawEnemyHP() {
  if (enemy.hp <= 0) {
    enemy.hp = 0;
  }
  ctx.fillStyle = "red";
  ctx.fillRect(canvas.width - 110, 10, enemy.hp, 10);
  ctx.strokeStyle = "white";
  ctx.strokeRect(canvas.width - 111, 9, 102, 12);
}

// 制限時間の描画
function drawGameTime() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "10px dotFont";
  // 残り時間を描画
  // 中央揃え
  ctx.fillText(`Time: ${gameTime}s`, canvas.width / 2 - 25, 20);
}

// キーの入力を止める
function stopKeys() {}

// ゲームの初期化
function init() {
  initializeCharacters();
  player1.x = canvas.width - 250;
  player1.y = canvas.height - 50;
  player1.hp = 100;
  player1.attacks = [];
  enemy.x = canvas.width - 100;
  enemy.y = canvas.height - 50;
  enemy.hp = 100;
  enemy.attacks = [];
}

// ゲームオーバー処理
function gameOver() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "30px dotFont";
  ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
  stopKeys();
}

// ゲームクリア処理
function gameClear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("You Win!", canvas.width / 2 - 60, canvas.height / 2 - 20);
  calculateScore(); // スコアの計算
  ctx.fillText(
    `Score: ${current_score}`,
    canvas.width / 2 - 80,
    canvas.height / 2 + 20
  ); // スコアの描画

  // スコアをローカルストレージに保存
  setScore(3, current_score);

  stopKeys();
}

// ゲームオーバー判定
function checkGameOver() {
  if (player1.hp <= 0) {
    gameOver();
    close();
  }
}

// ゲームクリア判定
function checkGameClear() {
  if (enemy.hp <= 0) {
    gameClear();
    close();
  }
}

// カウントダウンの描画
function drawCountdown() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "60px dotFont";
  ctx.fillText(countdown, canvas.width / 2 - 10, canvas.height / 2 + 10);
}

// カウントダウンの処理
function startCountdown() {
  countdownInterval = setInterval(() => {
    drawCountdown();
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownInterval);
      startGameTime();
      update();
    }
  }, 1000);
}

// 制限時間のカウントダウン処理
function startGameTime() {
  gameTimeInterval = setInterval(() => {
    gameTime--;
    if (gameTime <= 0) {
      clearInterval(gameTimeInterval);
      gameOver();
    }
  }, 1000);
}

// ゲームの更新
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGameTime();
  drawPlayer1HP();
  drawEnemyHP();

  if (player1.isInvincible) {
    if (Math.floor(Date.now() / 100) % 2 === 0) {
      drawCharacter(player1);
    }
    removeInvincibility(player1);
  } else {
    drawCharacter(player1);
  }

  if (enemy.isInvincible) {
    if (Math.floor(Date.now() / 100) % 2 === 0) {
      drawCharacter(enemy);
    }
    removeInvincibility(enemy);
  } else {
    drawCharacter(enemy);
  }

  removeMeleeAttackState(player1);
  removeMeleeAttackState(enemy);

  player1.attacks.forEach((attack) => {
    ctx.drawImage(attackImage, attack.x, attack.y, attack.width, attack.height);
  });

  enemy.attacks.forEach((attack) => {
    ctx.drawImage(attackImage, attack.x, attack.y, attack.width, attack.height);
  });

  if (!player1.isInvincible) {
    if (keys.ArrowLeft && player1.x > 0) {
      player1.x -= player1.speed;
      player1.facingLeft = true;
      if (collision(player1, enemy)) {
        player1.x += player1.speed;
      }
    }
    if (keys.ArrowRight && player1.x < canvas.width - player1.width) {
      player1.x += player1.speed;
      player1.facingLeft = false;
      if (collision(player1, enemy)) {
        player1.x -= player1.speed;
      }
    }
    handleJump(player1);
  }

  cpuAI(); // CPUの動きを更新

  handleAttack(player1.attacks, player1, 1);
  handleAttack(enemy.attacks, enemy, -1);

  if (player1.hp > 0 && enemy.hp > 0 && gameTime > 0) {
    requestAnimationFrame(update);
  } else {
    checkGameOver();
    checkGameClear();
  }
}

const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
  if (!player1.isInvincible) {
    if (e.key === "ArrowUp" && !player1.isJumping) {
      player1.isJumping = true;
      player1.velocityY = player1.jumpStrength;
    }
    // プレイヤー1の遠距離攻撃
    if (e.key === "e") {
      player1.attacks.push({
        x: player1.x + player1.width,
        y: player1.y + player1.height / 2,
        width: 20,
        height: 20,
        speed: 4,
      });
    }
    // プレイヤー1の近距離攻撃あ
    if (e.key === "q" && Math.abs(player1.x - enemy.x) < 50) {
      handleMeleeAttack(player1, enemy);
    }
  }
});

// プレイヤー1の防御
window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
  if (e.key === "a") {
    player1.isDefending = true;
  }
});

init();

startCountdown();
