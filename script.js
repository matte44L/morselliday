const track = document.querySelector('.carousel-track');
const clones = track.innerHTML;
track.innerHTML += clones; 
function toggleCaption(button) {
  const caption = button.nextElementSibling;
  button.classList.toggle("open");
  caption.classList.toggle("visible");
}
