document.addEventListener('DOMContentLoaded', function () {

	canvas = document.getElementById('gameCanvas');
	ctx = canvas.getContext('2d');

	let appearChar = true;//文字を点滅させる
	let appearCharMessage = false;//ミニテキストを点滅
	let intervalTime = 500;

	Main();

	function Main() {

		setInterval(GameStart, intervalTime);
	}

	function GameStart() {
		ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア

		ctx.font = "80px 'VT323','Jaro','Danfo',serif";
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Ready! ", canvas.width / 2 - 90, canvas.height / 2);

		if (appearCharMessage) {
			ctx.font = "30px 'VT323','Jaro','Danfo',serif";
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText("Press space button", canvas.width / 2 - 100, canvas.height / 2 + 100);
		}

		appearCharMessage = !appearCharMessage;

	}
	//スペースキーが押された時に実行されるイベント
	document.addEventListener('keydown', function (event) {
		const key = (event.key.toUpperCase());
		//toUpperCaseで大文字にしてから撮っている(小文字でも大文字でもプレイヤーを操作できるようにするため)
		if (key === ' ') {
			gameStartFlag = 1
			console.log("スペースキー押し込み");
			removeLife();//ライフ消費
			location.href = '../html/gluttony_main.html';
		};
	});


	const button = document.querySelector('#backToHome');

	button.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/gluttony_top.html';
	});

});
