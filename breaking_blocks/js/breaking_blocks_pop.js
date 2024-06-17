const openModalButton2 = document.getElementById('openModal');
const closeModalButton2 = document.getElementById('closeModal');
const modal2 = document.getElementById('modal');

openModalButton2.addEventListener('click', function() {
    modal2.style.display = 'block';
});

closeModalButton2.addEventListener('click', function() {
    modal2.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal2) {
        modal2.style.display = 'none';
    }
});