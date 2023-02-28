// slide
document.querySelector('nav .menu input').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('slide')
})

// add background navbar when scrolling
const isScrolling = () => {
  const headerEl = document.querySelector('nav');
  let windowPosition = window.scrollY > 100;
  headerEl.classList.toggle('active', windowPosition);
}
window.addEventListener('scroll', isScrolling);