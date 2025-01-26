const email = localStorage.getItem('userEmail');
const emailSpan = document.getElementById('userEmail');
emailSpan.textContent = email

const dismissForm = document.querySelector(".dismissForm");

dismissForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
});