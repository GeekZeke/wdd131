// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// MODAL
const images = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-viewer");

// Open modal
images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Close modal function
function closeModal() {
  modal.classList.add("hidden");
}

// Close with X button
closeBtn.addEventListener("click", closeModal);

// Close when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});