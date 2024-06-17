document.addEventListener('DOMContentLoaded', function () {

	const button = document.querySelector('#goGame');

	button.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/breaking_blocks_game.html';
	});

	const backButton = document.querySelector('.back');

	backButton.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		 location.href = '../../main/html/index.html';
	});

// const startBtn = document.querySelector('#goGame');

// let blinkFlag = 0;
// function blinking (){
// 	if (blinkFlag == 0){
// 		startBtn.style.opacity = 0.1;
// 		blinkFlag = 1;
// 	} else {
// 		startBtn.style.opacity = 1;
// 		blinkFlag = 0;
// 	}
// }

// setInterval(blinking,415);

});