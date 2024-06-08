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

	const mazeflag = structuredClone(maze);


	canvas = document.getElementById('gameCanvas');
	ctx = canvas.getContext('2d');

	cellWidth = (canvas.width / maze[0].length);//一マスの幅
	cellHeight = (canvas.height / maze.length);//一マスの高さ

	let player = {
		dwidth: cellWidth,//プレイヤー画像の幅
		dheight: cellHeight,//プレイヤー画像の高さ
		dx: Math.ceil(cellWidth * 11),//x座標
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
	let mainInterval;
	let pauseEnemies = false; // 敵の動きを一時停止するフラグ
	let pausePlayer = false; // プレイヤーの動きを一時停止するフラグ


	function Main() {
		mainInterval = setInterval(Draw, intervalTime);//"intervalTime"ms後にDrawを再実行}
	}


	//マップ上に落ちている餌の数を数えその数をクリアの条件にする
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

	

	//プレイヤーを動かす
function movePlayer(){
	if(pausePlayer)return;
	const direction = player.direction; // 現在のプレイヤーの移動している方向を保存
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



	
function DrawPlayer() {
	const direction = player.direction;
	const image = player.doJump ? player.images[direction].jump : player.images[direction].default;

	if (image.complete) {
		ctx.drawImage(image, player.dx, player.dy, player.dwidth, player.dheight);
	}
}

	function moveEnemy(enemy) {
		if (pauseEnemies) return; // 敵の動きが一時停止されている場合は何もしない
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

	//プレイヤーを追跡するように敵を動かす
	function moveEnemyChase(enemy) {
		if (pauseEnemies) return; // 敵の動きが一時停止されている場合は何もしない
        let directions = [0, 0, 0, 0]; // [W, A, S, D]
        let newDx = enemy.dx;
        let newDy = enemy.dy;

        // 進む方向に壁がないかどうかをチェック
        // 進める方向がどこかを調べて配列に格納する
        // W
        if (canMoveTo(newDy - cellHeight, newDx)) {
            directions[0] = 1;
        }
        // A
        if (canMoveTo(newDy, newDx - cellWidth)) {
            directions[1] = 1;
        }
        // S
        if (canMoveTo(newDy + cellHeight, newDx)) {
            directions[2] = 1;
        }
        // D
        if (canMoveTo(newDy, newDx + cellWidth)) {
            directions[3] = 1;
        }

        let distance = [0, 0, 0, 0];
        for (let i = 0; i < directions.length; i++) {
            if (directions[i] != 0) {
                let tempDx = newDx, tempDy = newDy;
                if (i === 0) tempDy -= cellHeight; // W
                if (i === 1) tempDx -= cellWidth; // A
                if (i === 2) tempDy += cellHeight; // S
                if (i === 3) tempDx += cellWidth; // D
                distance[i] = Math.hypot(player.dx - tempDx, player.dy - tempDy);
            }
        }

        let minDis = Infinity;
        let minIndex = 0;

        for (let i = 0; i < directions.length; i++) {
            if (directions[i] != 0 && minDis > distance[i]) {
                minDis = distance[i];
                minIndex = i;
            }
        }

        enemy.direction = minIndex + 1; // 最小距離になる方向

        if (enemy.direction === 1) newDy -= cellHeight; // W
        if (enemy.direction === 2) newDx -= cellWidth; // A
        if (enemy.direction === 3) newDy += cellHeight; // S
        if (enemy.direction === 4) newDx += cellWidth; // D

        enemy.dx = newDx;
        enemy.dy = newDy;
    }



	//進んだ先が壁かどうかを調べる
	function canMoveTo(y, x) {
		const i = Math.floor(y / cellHeight);
		const j = Math.floor(x / cellWidth);
		return (i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] === 0);
	}


    function DrawEnemy(enemy) {
        const direction = enemy.direction;
        const image = enemy.images[direction].default;

        if (image.complete) {
            ctx.drawImage(image, enemy.dx, enemy.dy, enemy.dwidth, enemy.dheight);
        }
    }


	 //Draw関数内での処理行数を減らすための処理
	function DrawEnemies() {
		DrawEnemy(enemy1);
		DrawEnemy(enemy2);
		DrawEnemy(enemy3);
	}

	function CheckGetFood(y, x) {
		const i = Math.floor(y / cellHeight);
		const j = Math.floor(x / cellWidth);

		if (mazeflag[i][j] === 0 && maze[i][j] === 0) {
			mazeflag[i][j] = 1;
			score += 10;
			getFood++;
			document.getElementById('gameScore').textContent = `SCORE:${score}`;
		}
	}



	//全ての餌を食べられたかどうかを判定し、クリアしていたら画面を遷移する
	function CheckClear() {
		if (getFood === countFood) {
			console.log("全てのフードを収集しました。");
			// ゲームループを停止
			clearInterval(mainInterval);
	
			// 画面を少しずつ黒くする
			const interval = setInterval(() => {
				ctx.clearRect(0, 0, canvas.width, clearScreen);
				clearScreen += 10; // クリアする範囲を少しずつ増やす
				console.log("画面クリアしている");
	
				if (clearScreen > canvas.height) {
					clearInterval(interval); // インターバルをクリア
					addLife();
					addLife();
					setScore(1, score);
					location.href = '../html/gluttony_clear.html'; // クリア画面に遷移
				}
			}, 50); // 50msごとに実行
		}
	}


	//全ての餌を食べられたかどうかを判定し、クリアしていたら画面を遷移する
	function DebugCheckClear() {

		number = Math.floor(Math.random() * 2000) + 1;
		console.log("スコアを" + number + "に設定");

			// ゲームループを停止
			clearInterval(mainInterval);
	
			// 画面を少しずつ黒くする
			const interval = setInterval(() => {
				ctx.clearRect(0, 0, canvas.width, clearScreen);
				clearScreen += 10; // クリアする範囲を少しずつ増やす
				console.log("画面クリアしている");
	
				if (clearScreen > canvas.height) {
					clearInterval(interval); // インターバルをクリア
					addLife();
					setScore(1, number);
					location.href = '../html/gluttony_clear.html'; // クリア画面に遷移
				}
			}, 50); // 50msごとに実行
	}


//ゲームオーバーかどうかを判定する
	function CheckGameover() {

		if (player.life >= 1) {//lifeが0になったらゲームオーバーにする
			//残機あり
			player.life = player.life - 1;
			console.log("ライフが1減りました");
			document.getElementById('playerLife').textContent = `LIFE :${player.life}`;
			resetPlayer();
		} else {
			//残機なし
			gameOver();

		}
	}




	//敵と衝突した場合にプレイヤーの1をリセットする
	function resetPlayer() {
		player.dx = Math.ceil(cellWidth * 11 - cellWidth);
		player.dy = Math.ceil(cellHeight * 20);
		player.direction = 2;
		restart();
	}
		function restart() {
			pauseEnemies = true; // 敵の動きを一時停止する
			pausePlayer = true; // プレイヤーの動きを一時停止する
			let countdown = 3;
			
			const countdownInterval = setInterval(() => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				DrawMazes();
				DrawPlayer();
				DrawEnemies();
			
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // 半透明の黒背景を描画
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			
				ctx.fillStyle = 'white'; // カウントダウンテキストの色
				ctx.font = '70px dotFont'; // フォント設定
				ctx.textAlign = 'center'; // テキストを中央揃え
				if(countdown >= 1)ctx.fillText(countdown, canvas.width / 2, canvas.height / 2); // カウントダウンを描画
				if(countdown === 0)ctx.fillText('Ready!', canvas.width / 2, canvas.height / 2)
				countdown--;
			
				if (countdown < 0) {
					clearInterval(countdownInterval); // カウントダウンが終了したらインターバルをクリア
					pauseEnemies = false; // 敵の動きを再開する
					pausePlayer = false;//　プレイヤーの動きを再開する
				}
			}, 1000); // 1秒ごとに実行
		}
	



//ゲームオーバーになってページを遷移するための関数
	function gameOver() {
			flowFlag = 1;
			setScore(1, score);
			location.href = '../html/gluttony_gameover.html';
	}



    function isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }


	//プレイヤーと敵が衝突していないか調べる
	function CheckCollision() {

		const playerRect = { x: player.dx, y: player.dy, width: player.dwidth, height: player.dheight };
		const enemy1Rect = { x: enemy1.dx, y: enemy1.dy, width: enemy1.dwidth, height: enemy1.dheight };
		const enemy2Rect = { x: enemy2.dx, y: enemy2.dy, width: enemy2.dwidth, height: enemy2.dheight };
		const enemy3Rect = { x: enemy3.dx, y: enemy3.dy, width: enemy3.dwidth, height: enemy3.dheight };
		if (isColliding(playerRect, enemy1Rect)) {
			// プレイヤーと敵1の衝突判定
			console.log("敵１と衝突");
			CheckGameover();
			return;
		}else if (isColliding(playerRect, enemy2Rect)) {
			// プレイヤーと敵2の衝突判定
			console.log("敵２と衝突");
			CheckGameover();
			return;
		}else if (isColliding(playerRect, enemy3Rect)) {
			// プレイヤーと敵3の衝突判定
			console.log("敵３と衝突");
			CheckGameover();
			return;
		}
	}

	function Draw() {//行われる処理を書く
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		DrawMazes();//mapを生成
		CheckClear();//クリアしたかどうか(map上の餌を全て取得できたか)

		movePlayer();//プレイヤーを移動
		CheckGetFood(player.dy, player.dx);//餌を食べられたかどうか
		DrawPlayer();//プレイヤーを描画

		//敵をそれぞれ移動させる
		//moveEnemy(enemy1);
		moveEnemyChase(enemy1);
		moveEnemy(enemy2);
		moveEnemy(enemy3);
		DrawEnemies();

		CheckCollision();
		player.doJump = !player.doJump;

	}
		
	const Wkey = document.querySelector('#W');
	const Akey = document.querySelector('#A');
	const Skey = document.querySelector('#S');
	const Dkey = document.querySelector('#D');

	//W,A,S,Dのキーが押された時に実行されるイベント
	document.addEventListener('keydown', function (event) {
		if (pausePlayer) return; // プレイヤーの動きが一時停止されている場合は何もしない
		const key = (event.key.toUpperCase());
		//toUpperCaseで大文字にしてから撮っている(小文字でも大文字でもプレイヤーを操作できるようにするため)
		if (key === 'W'){
			player.direction = 1;
			Wkey.style.backgroundColor = 'rgb(130, 128, 128)';
			Akey.style.backgroundColor = 'rgb(219, 219, 219)';
			Skey.style.backgroundColor = 'rgb(219, 219, 219)';
			Dkey.style.backgroundColor = 'rgb(219, 219, 219)';

		}
		if (key === 'A'){
			player.direction = 2;
			Wkey.style.backgroundColor = 'rgb(219, 219, 219)';
			Akey.style.backgroundColor = 'rgb(130, 128, 128)';
			Skey.style.backgroundColor = 'rgb(219, 219, 219)';
			Dkey.style.backgroundColor = 'rgb(219, 219, 219)';
		}
		if (key === 'S'){
			player.direction = 3;
			Wkey.style.backgroundColor = 'rgb(219, 219, 219)';
			Akey.style.backgroundColor = 'rgb(219, 219, 219)';
			Skey.style.backgroundColor = 'rgb(130, 128, 128)';
			Dkey.style.backgroundColor = 'rgb(219, 219, 219)';
		}
		if (key === 'D'){
			player.direction = 4;
			Wkey.style.backgroundColor = 'rgb(219, 219, 219)';
			Akey.style.backgroundColor = 'rgb(219, 219, 219)';
			Skey.style.backgroundColor = 'rgb(219, 219, 219)';
			Dkey.style.backgroundColor = 'rgb(130, 128, 128)';
		}
	});


//戻るボタンを押した時の処理
	const button = document.querySelector('#return');
	button.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/gluttony_top.html';
	});

	 const debugButton = document.querySelector('#debug');

	 debugButton.addEventListener("click", (event) => {
	 	console.log("ボタンをクリックしました");
	 	DebugCheckClear();
	 });



	CountFood();
	Main();
});
