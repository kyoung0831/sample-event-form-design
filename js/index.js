const PRELOADER_FADE_DURATION = 500;

// Preloader fade out and reveal main content on page load
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.querySelector(".container");

  if (preloader && mainContent) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.classList.add("show");
    }, PRELOADER_FADE_DURATION);
  }  else {
    console.warn("Preloader or main content not found.");
  }
});
const form = document.getElementById("registrationForm");
const popup = document.getElementById("thankYouPopup");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  popup.style.display = "flex";
  form.reset();
});

function closePopup() {
  popup.style.display = "none";
}