document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title_name");
  console.log(title);
  title.innerText = "Fighting Game";
});

document.getElementById("return").addEventListener("click", () => {
  window.location.href = "../../main/html/index.html";
});
