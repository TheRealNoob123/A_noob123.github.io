(function(){
  const container = document.getElementById('player-container');
  const video = document.getElementById('movie');
  const fsBtn = document.getElementById('fs-btn');
  const fitBtn = document.getElementById('fit-btn');

  function isFullscreen() {
    return document.fullscreenElement === container || document.fullscreenElement === video;
  }

  async function toggleFullscreen() {
    try {
      if (isFullscreen()) await document.exitFullscreen();
      else if (container.requestFullscreen) await container.requestFullscreen();
      else if (video.requestFullscreen) await video.requestFullscreen();
    } catch (e) {}
  }

  fsBtn.addEventListener('click', toggleFullscreen);
  container.addEventListener('dblclick', toggleFullscreen);

  fitBtn.addEventListener('click', () => {
    const next = (video.style.objectFit === 'cover') ? 'contain' : 'cover';
    video.style.objectFit = next;
    fitBtn.textContent = next === 'cover' ? 'Cover' : 'Fit';
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyF') toggleFullscreen();
    if (e.code === 'Space' && document.activeElement === document.body) {
      e.preventDefault();
      if (video.paused) video.play(); else video.pause();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    container.classList.toggle('fullscreen', isFullscreen());
    fsBtn.textContent = isFullscreen() ? 'Exit' : 'Fullscreen';
  });

})();
