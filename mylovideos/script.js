// Live search filter
const searchInput = document.getElementById('searchInput');
const videos = document.querySelectorAll('.video-card');

searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  videos.forEach(video => {
    const title = video.querySelector('h3').innerText.toLowerCase();
    video.style.display = title.includes(filter) ? '' : 'none';
  });
});
