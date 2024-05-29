// キャラクターの定義
const player1 = {
  x: canvas.width - 250,
  y: canvas.height - 50,
  width: 25,
  height: 50,
  speed: 5,
  isJumping: false,
  jumpStrength: 10,
  velocityY: 0,
  gravity: 0.5,
  image: new Image(),
  defenseImage: new Image(),
  meleeImage: new Image(),
  hp: 100,
  attacks: [],
  isInvincible: false,
  invincibilityDuration: 800,
  invincibilityTimer: 0,
  isDefending: false,
  facingLeft: false, // 向きの状態
  isMeleeAttacking: false,
  meleeAttackDuration: 300,
  meleeAttackTimer: 0,
};
player1.image.src = "/fighting_game/imgs/player_1.svg";
player1.defenseImage.src = "/fighting_game/imgs/player_defense1.svg";
player1.meleeImage.src = "/fighting_game/imgs/melee_player1.png";

const enemy = {
  x: canvas.width - 100,
  y: canvas.height - 50,
  width: 25,
  height: 50,
  speed: 5,
  isJumping: false,
  jumpStrength: 10,
  velocityY: 0,
  gravity: 0.5,
  image: new Image(),
  defenseImage: new Image(),
  meleeImage: new Image(),
  hp: 100,
  attacks: [],
  isInvincible: false,
  invincibilityDuration: 800,
  invincibilityTimer: 0,
  isDefending: false,
  facingLeft: false, // 向きの状態を変更
  isMeleeAttacking: false,
  meleeAttackDuration: 300,
  meleeAttackTimer: 0,
};
enemy.image.src = "/fighting_game/imgs/enemy_2.svg";
enemy.defenseImage.src = "/fighting_game/imgs/enemy_defense2.svg";
enemy.meleeImage.src = "/fighting_game/imgs/melee_enemy2.png";

// キャラクターの描画
function drawCharacter(character) {
  if (character.isDefending) {
    ctx.drawImage(
      character.defenseImage,
      character.x,
      character.y,
      character.width,
      character.height
    );
  } else if (character.isMeleeAttacking) {
    ctx.drawImage(
      character.meleeImage,
      character.x,
      character.y,
      character.width,
      character.height
    );
  } else {
    ctx.drawImage(
      character.image,
      character.x,
      character.y,
      character.width,
      character.height
    );
  }
}

// ジャンプの処理
function handleJump(character) {
  if (character.isJumping) {
    character.velocityY -= character.gravity;
    character.y -= character.velocityY;
    if (character.y >= canvas.height - character.height) {
      character.y = canvas.height - character.height;
      character.isJumping = false;
      character.velocityY = 0;
    }
  }
}

// 衝突判定
function collision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

// 攻撃の処理
function handleAttack(attacks, character, direction) {
  attacks.forEach((attack, index) => {
    attack.x += attack.speed * direction;
    if (collision(attack, enemy) && !enemy.isInvincible) {
      attacks.splice(index, 1);
      enemy.hp -= 10;
      enemy.isInvincible = true;
      enemy.invincibilityTimer = Date.now();
    }
    if (collision(attack, player1) && !player1.isInvincible) {
      attacks.splice(index, 1);
      player1.hp -= 10;
      player1.isInvincible = true;
      player1.invincibilityTimer = Date.now();
    }
  });
}

// 近接攻撃の処理
function handleMeleeAttack(attacker, target) {
  if (!attacker.isMeleeAttacking) {
    attacker.isMeleeAttacking = true;
    attacker.meleeAttackTimer = Date.now();
    if (!target.isInvincible && collision(attacker, target)) {
      target.hp -= 20;
      target.isInvincible = true;
      target.invincibilityTimer = Date.now();
    }
  }
}

// 近接攻撃の状態解除
function removeMeleeAttackState(character) {
  if (
    character.isMeleeAttacking &&
    Date.now() - character.meleeAttackTimer > character.meleeAttackDuration
  ) {
    character.isMeleeAttacking = false;
  }
}

// 無敵状態解除
function removeInvincibility(character) {
  if (
    character.isInvincible &&
    Date.now() - character.invincibilityTimer > character.invincibilityDuration
  ) {
    character.isInvincible = false;
  }
}
