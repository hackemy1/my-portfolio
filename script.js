// Hero Button

const heroBtn = document.getElementById("heroBtn");

heroBtn.addEventListener("click", () => {
    alert("Thank you for your interest!");
});


// Contact Form

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    successMessage.textContent =
        "Message sent successfully!";

    form.reset();
});