document.addEventListener('DOMContentLoaded', function () {

	const button = document.querySelector('#goGame');

	button.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/gluttony_ready.html';
	});

	const backButton = document.querySelector('#backToHome');

	backButton.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		const Hscore = document.querySelector("#highScore");
		// ハイスコアをリセット
		localStorage.setItem("highScore", 0);
		Hscore.textContent = 0;
		// location.href = '../html/gluttony_top.html';
	});


});