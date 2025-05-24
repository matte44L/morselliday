const track = document.querySelector('.carousel-track');
const clones = track.innerHTML;
track.innerHTML += clones; 
function toggleCaption(button) {
  const caption = button.closest('.carousel-item').querySelector('.caption-text');
  caption.classList.toggle('visible');
  button.classList.toggle('open');
}

