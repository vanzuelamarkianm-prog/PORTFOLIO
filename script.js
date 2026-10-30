const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});


// Click a certificate to open an animated full-size preview.
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("certificateLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("lightboxClose");
  let lastTrigger = null;
  if (!lightbox || !lightboxImage || !closeButton) return;
  function openPreview(button) {
    lastTrigger = button;
    lightboxImage.src = button.dataset.certificate;
    const thumb = button.querySelector("img");
    lightboxImage.alt = thumb ? thumb.alt : "Expanded certificate";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-active");
    closeButton.focus();
  }
  function closePreview() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-active");
    lightboxImage.src = "";
    if (lastTrigger) lastTrigger.focus();
  }
  document.querySelectorAll(".certificate-card").forEach(function (button) {
    button.addEventListener("click", function () { openPreview(button); });
  });
  closeButton.addEventListener("click", closePreview);
  lightbox.addEventListener("click", function (event) { if (event.target === lightbox) closePreview(); });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) closePreview();
  });
});

/* FLOATING PURPLE PARTICLES */

document.addEventListener("DOMContentLoaded", function () {
  const background = document.getElementById("particles-background");

  if (!background) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const particleCount = window.innerWidth < 650 ? 16 : 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.setProperty("--size", (3 + Math.random() * 5) + "px");
    particle.style.setProperty("--duration", (12 + Math.random() * 15) + "s");
    particle.style.setProperty("--delay", (-Math.random() * 25) + "s");
    particle.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");

    background.appendChild(particle);
  }
});
