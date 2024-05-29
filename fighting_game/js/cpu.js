// CPUの動き
function cpuAI() {
    if (!enemy.isInvincible) {
      if (enemy.x > player1.x && enemy.x > 0) {
        enemy.x -= enemy.speed;
        enemy.facingLeft = true;
        if (collision(enemy, player1)) {
          enemy.x += enemy.speed;
        }
      } else if (enemy.x < player1.x && enemy.x < canvas.width - enemy.width) {
        enemy.x += enemy.speed;
        enemy.facingLeft = false;
        if (collision(enemy, player1)) {
          enemy.x -= enemy.speed;
        }
      }
      if (!enemy.isJumping && Math.random() < 0.01) {
        enemy.isJumping = true;
        enemy.velocityY = enemy.jumpStrength;
      }
      if (Math.abs(enemy.x - player1.x) < 50 && !enemy.isMeleeAttacking) {
        handleMeleeAttack(enemy, player1);
      } else if (Math.abs(enemy.x - player1.x) >= 50 && Math.random() < 0.02) {
        enemy.attacks.push({
          x: enemy.x + (enemy.facingLeft ? -enemy.width : enemy.width),
          y: enemy.y + enemy.height / 2,
          width: 20,
          height: 20,
          speed: 4,
        });
      }
    }
  
    handleJump(enemy);
  }
  