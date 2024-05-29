document.addEventListener('DOMContentLoaded', function () {

	const maze = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
		[1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];

	const mazeflag = [
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5],
		[5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5],
		[5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 0, 5],
		[5, 0, 5, 5, 5, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 5, 5, 5, 0, 5],
		[5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 5],
		[5, 5, 5, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 0, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 0, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 0, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5],
		[5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5],
		[5, 5, 5, 0, 5, 0, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 5, 0, 5, 5, 5],
		[5, 5, 5, 0, 5, 0, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 5, 0, 5, 5, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 0, 5, 5, 5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 5, 5, 0, 5],
		[5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
	];


	canvas = document.getElementById('gameCanvas');
	ctx = canvas.getContext('2d');

	cellWidth = (canvas.width / maze[0].length);//一マスの幅
	cellHeight = (canvas.height / maze.length);//一マスの高さ

	let player = {
		dwidth: cellWidth,//プレイヤー画像の幅
		dheight: cellHeight,//プレイヤー画像の高さ
		dx: Math.ceil(cellWidth * 10),//x座標
		dy: Math.ceil(cellHeight * 20),//y座標
		doJump: false,//ジャンプしているか
		direction: 2,//プレイヤーの向いている方向
		life: 3,//残機
		images: {
			1: { default: new Image(), jump: new Image() }, // W
			2: { default: new Image(), jump: new Image() }, // A
			3: { default: new Image(), jump: new Image() }, // S
			4: { default: new Image(), jump: new Image() }, // D
		}
	};

	player.images[1].default.src = "../images/playerImageDefaultW.png";
	player.images[1].jump.src = "../images/playerImageJumpW.png";
	player.images[2].default.src = "../images/playerImageDefaultA.png";
	player.images[2].jump.src = "../images/playerImageJumpA.png";
	player.images[3].default.src = "../images/playerImageDefaultS.png";
	player.images[3].jump.src = "../images/playerImageJumpS.png";
	player.images[4].default.src = "../images/playerImageDefaultD.png";
	player.images[4].jump.src = "../images/playerImageJumpD.png";

	let enemy1 = {
		dwidth: cellWidth,//画像の幅
		dheight: cellHeight,//画像の高さ
		direction: 2,
		dx: Math.ceil(cellWidth * 19),
		dy: Math.ceil(cellHeight * 1),
		radius: 10,
		currentPathIndex: 0,
		speed: 20, // 敵の移動速度
		images: {
			1: { default: new Image() }, // W
			2: { default: new Image() }, // A
			3: { default: new Image() }, // S
			4: { default: new Image() }, // D
		}
	};

	enemy1.images[1].default.src = "../images/enemy1ImageW.png";
	enemy1.images[2].default.src = "../images/enemy1ImageA.png";
	enemy1.images[3].default.src = "../images/enemy1ImageS.png";
	enemy1.images[4].default.src = "../images/enemy1ImageD.png";

	let enemy2 = {
		dwidth: cellWidth,//画像の幅
		dheight: cellHeight,//画像の高さ
		direction: 1,
		dx: Math.ceil(cellWidth * 1),
		dy: Math.ceil(cellHeight * 25),
		radius: 10,
		currentPathIndex: 0,
		speed: 7,// 敵の移動速度
		images: {
			1: { default: new Image() }, // W
			2: { default: new Image() }, // A
			3: { default: new Image() }, // S
			4: { default: new Image() }, // D
		}
	};


	enemy2.images[1].default.src = "../images/enemy2ImageW.png";
	enemy2.images[2].default.src = "../images/enemy2ImageA.png";
	enemy2.images[3].default.src = "../images/enemy2ImageS.png";
	enemy2.images[4].default.src = "../images/enemy2ImageD.png";

	let enemy3 = {
		dwidth: cellWidth,//画像の幅
		dheight: cellHeight,//画像の高さ
		direction: 1,
		dx: Math.ceil(cellWidth * 19),
		dy: Math.ceil(cellHeight * 25),
		radius: 10,
		currentPathIndex: 0,
		speed: 10, // 敵の移動速度
		images: {
			1: { default: new Image() }, // W
			2: { default: new Image() }, // A
			3: { default: new Image() }, // S
			4: { default: new Image() }, // D
		}
	};


	enemy3.images[1].default.src = "../images/enemy3ImageW.png";
	enemy3.images[2].default.src = "../images/enemy3ImageA.png";
	enemy3.images[3].default.src = "../images/enemy3ImageS.png";
	enemy3.images[4].default.src = "../images/enemy3ImageD.png";


	let score = 0;//スコアを覚える
	let countFood = 0;//餌がいくつあるかを保持する
	let getFood = 0;//何個餌を回収できたかを保持する

	let intervalTime = 300;//処理のインターバルを設定する変数
	let clearScreen = 0;//クリア時の画面を暗くさせる


	console.log(localStorage.getItem('highScore'))

	function Main() {
		canvas.style.border = "1px solid #111";

		setInterval(Draw, intervalTime);//"intervalTime"ms後にDrawを再実行}
	}

	function CountFood() {
		for (let i = 0; i < mazeflag.length; i++) {
			for (let j = 0; j < mazeflag[i].length; j++) {

				if (mazeflag[i][j] === 0) {//餌の数を数える
					countFood++;
				}
			}
		}
		console.log(countFood);
	}

	function DrawMazes() {//迷路の描画
		for (let i = 0; i < maze.length; i++) {
			for (let j = 0; j < maze[i].length; j++) {

				if (mazeflag[i][j] === 0) {//餌の描画
					ctx.beginPath();
					ctx.arc(j * cellWidth + cellWidth / 2, i * cellHeight + cellHeight / 2, 3, 0, Math.PI * 2);
					//ctx.arc(j * cellWidth + 15, i * cellHeight + 12, 3, 0, Math.PI * 2);
					ctx.fillStyle = 'yellow';
					ctx.fill();
					ctx.closePath();
				}

				if (maze[i][j] === 1) {//壁を描画
					ctx.fillStyle = 'blue';
					ctx.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
				}
			}
		}
	}


	function canMoveTo(y, x) {
		const i = Math.floor(y / cellHeight);
		const j = Math.floor(x / cellWidth);
		return (i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] === 0);
	}
	

	
    function DrawPlayer() {
        const direction = player.direction; // 現在のプレイヤーの移動している方向を保存
        const image = player.doJump ? player.images[direction].jump : player.images[direction].default;

        ctx.clearRect(player.dx - 1, player.dy - 1, player.dwidth + 2, player.dheight + 2); // 以前のプレイヤーの描画を消す

        // 画像の読み込みが完了している場合のみ描画
        if (image.complete) {
            ctx.drawImage(image, player.dx + (cellWidth - player.dwidth) / 2, player.dy + (cellHeight - player.dheight) / 2, player.dwidth, player.dheight);
        }

        if (direction !== 0) { // 方向が設定されている場合にだけ動かす(keyDownイベントで方向が設定される)
            let newDx = player.dx;
            let newDy = player.dy;

            if (direction === 1) newDy -= cellHeight; // W
            if (direction === 2) newDx -= cellWidth; // A
            if (direction === 3) newDy += cellHeight; // S
            if (direction === 4) newDx += cellWidth; // D

            // 進む方向に壁がないかどうかをチェック
            if (canMoveTo(newDy, newDx)) {
                player.dx = newDx;
                player.dy = newDy;
            }
        }
    }

	function resetPlayer() {
			player.dx = Math.ceil(cellWidth * 10);
			player.dy = Math.ceil(cellHeight * 15);
	}

	function moveEnemy(enemy) {
		let newDx = enemy.dx;
		let newDy = enemy.dy;

		if (enemy.direction === 1) newDy -= cellHeight; // W
		if (enemy.direction === 2) newDx -= cellWidth; // A
		if (enemy.direction === 3) newDy += cellHeight; // S
		if (enemy.direction === 4) newDx += cellWidth; // D

		// 進む方向に壁がないかどうかをチェック
		if (canMoveTo(newDy, newDx)) {
			enemy.dx = newDx;
			enemy.dy = newDy;
		} else {
			// 壁にぶつかったらランダムに方向を変更
			enemy.direction = Math.floor(Math.random() * 4) + 1;
		}
	}



	function DrawEnemy1() {
		const direction = enemy1.direction;//現在のプレイヤーの移動している方向を保存
		const image = enemy1.images[enemy1.direction].default;

		ctx.clearRect(enemy1.dx - 1, enemy1.dy - 1, enemy1.dwidth + 2, enemy1.dheight + 2); // 以前のプレイヤーの描画を消す

		// 画像の読み込みが完了している場合のみ描画
		if (image.complete) {
			moveEnemy(enemy1);
			ctx.drawImage(image, enemy1.dx + (cellWidth - enemy1.dwidth) / 2, enemy1.dy + (cellHeight - enemy1.dheight) / 2, enemy1.dwidth, enemy1.dheight);
		}

	}

	 function DrawEnemy2() {
	 	const direction = enemy2.direction;//現在のenemy2の移動している方向を保存
	 	const image = enemy2.images[direction].default;

	 	ctx.clearRect(enemy2.dx - 1, enemy2.dy - 1, enemy2.dwidth + 2, enemy2.dheight + 2); // 以前のプレイヤーの描画を消す

	 	// 画像の読み込みが完了している場合のみ描画
	 	if (image.complete) {
			moveEnemy(enemy2);
	 		ctx.drawImage(image, enemy2.dx + (cellWidth - enemy2.dwidth) / 2, enemy2.dy + (cellHeight - enemy2.dheight) / 2, enemy2.dwidth, enemy2.dheight);
	 	}


	 }

	 function DrawEnemy3() {
	 	const image = enemy3.images[enemy3.direction].default;

	 	const direction = enemy3.direction;//現在のenemy3の移動している方向を保存

	 	ctx.clearRect(enemy3.dx - 1, enemy3.dy - 1, enemy3.dwidth + 2, enemy3.dheight + 2); // 以前のプレイヤーの描画を消す

	 	// 画像の読み込みが完了している場合のみ描画
	 	if (image.complete) {

			moveEnemy(enemy3);
	 		ctx.drawImage(image,enemy3.dx + (cellWidth - enemy3.dwidth) / 2, enemy3.dy + (cellHeight - enemy3.dheight) / 2, enemy3.dwidth, enemy3.dheight);
	 	}


	 }

	function DrawEnemies() {
		DrawEnemy1();
		DrawEnemy2();
		DrawEnemy3();
	}

	function CheckGetFood(y, x) {
		const i = Math.floor(y / cellHeight);
		const j = Math.floor(x / cellWidth);

		if (mazeflag[i][j] === 0 && maze[i][j] === 0) {
			mazeflag[i][j] = 1;
			score += 10;
			getFood++;
			document.getElementById('gameScore').textContent = `score:${score}`;
		}
	}



	//全ての餌を食べられたかどうかを判定する
	function CheckClear() {
		if (getFood === 231) {
			// ctx.clearRect(0, 0, canvas.width, canvas.height);
			while (clearScreen <= canvas.height) {
				setTimeout(() => {
					ctx.clearRect(0, 0, clearScreen, clearScreen);
					console.log("画面クリアしている");
				}, 4 * 1000);
				clearScreen++
			}
			addLife();
			setScore(1, score);
			//localStorage.setItem("gameScore",score);
			location.href = '../html/gluttony_clear.html';
		}
	}

	function CheckGameover() {//ゲームオーバーかどうかを判定する

		if (player.life >= 1) {//lifeが0になったらゲームオーバーにする

			//残機あり
			player.life = player.life - 1;
			document.getElementById('playerLife').textContent = `life stock:${player.life}`;
			resetPlayer();
		} else {

			//残機なし
			gameOver();

		}
	}

	function gameOver() {

		
			flowFlag = 1;
			setScore(1, score);
			//localStorage.setItem("gameScore",score);
			location.href = '../html/gluttony_gameover.html';
	}



	function isColliding(rect1, rect2) {
		return rect1.x < rect2.x + rect2.width &&
			   rect1.x + rect1.width > rect2.x &&
			   rect1.y < rect2.y + rect2.height &&
			   rect1.y + rect1.height > rect2.y;
	}
	
	function CheckCollision() {

		const playerRect = { x: player.dx, y: player.dy, width: player.dwidth, height: player.dheight };

		// プレイヤーと敵1の衝突判定
		const enemy1Rect = { x: enemy1.dx, y: enemy1.dy, width: enemy1.dwidth, height: enemy1.dheight };
		if (isColliding(playerRect, enemy1Rect)) {
			CheckGameover();
			return;
		}
	
		// プレイヤーと敵2の衝突判定
		const enemy2Rect = { x: enemy2.dx, y: enemy2.dy, width: enemy2.dwidth, height: enemy2.dheight };
		if (isColliding(playerRect, enemy2Rect)) {
			CheckGameover();
			return;
		}
	
		// プレイヤーと敵3の衝突判定
		const enemy3Rect = { x: enemy3.dx, y: enemy3.dy, width: enemy3.dwidth, height: enemy3.dheight };
		if (isColliding(playerRect, enemy3Rect)) {
			CheckGameover();
			return;
		}
	}

	function Draw() {//行われる処理を書く
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		DrawMazes();//mapを生成
		CheckClear();//クリアしたかどうか(map上の餌を全て取得できたか)
		CheckGetFood(player.dy, player.dx);//餌を食べられたかどうか
		DrawPlayer();//プレイヤーを描画
		DrawEnemies();
		CheckCollision();
		player.doJump = !player.doJump;

	}
		

	//W,A,S,Dのキーが押された時に実行されるイベント
	document.addEventListener('keydown', function (event) {
		const key = (event.key.toUpperCase());
		//toUpperCaseで大文字にしてから撮っている(小文字でも大文字でもプレイヤーを操作できるようにするため)
		if (key === 'W') player.direction = 1;
		if (key === 'A') player.direction = 2;
		if (key === 'S') player.direction = 3;
		if (key === 'D') player.direction = 4;
	});

	const button = document.querySelector('#backToHome');

	button.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/gluttony_top.html';
	});

	CountFood();
	Main();
});
