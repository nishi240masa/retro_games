fetch("/fighting_game/html/explanation/explanation.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#explanation").innerHTML = data));
