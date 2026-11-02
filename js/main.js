// slide
document.querySelector("nav .menu input").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("slide");
});

// add background navbar when scrolling
const isScrolling = () => {
  const headerEl = document.querySelector("nav");
  let windowPosition = window.scrollY > 100;
  headerEl.classList.toggle("active", windowPosition);
};
window.addEventListener("scroll", isScrolling);

const EMAIL_TUJUAN = "harisccf102@gmail.com";

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const f = e.target;

    const subjek = f.subjek.value.trim();
    const isi =
      `Nama: ${f.nama.value.trim()}\n` +
      `Email: ${f.email.value.trim()}\n\n` +
      f.pesan.value.trim();

    window.location.href =
      `mailto:${EMAIL_TUJUAN}` +
      `?subject=${encodeURIComponent(subjek)}` +
      `&body=${encodeURIComponent(isi)}`;
  });
