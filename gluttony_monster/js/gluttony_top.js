document.addEventListener('DOMContentLoaded', function () {

	const button = document.querySelector('#goGame');

	button.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		location.href = '../html/gluttony_ready.html';
	});

	const backButton = document.querySelector('#backToHome');

	backButton.addEventListener("click", (event) => {
		console.log("ボタンをクリックしました");
		 location.href = '../../main/html/index.html';
	});


});