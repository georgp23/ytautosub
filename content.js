function enableSubtitles() {
  const interval = setInterval(() => {
    const button = document.querySelector('.ytp-subtitles-button');
    if (button && button.getAttribute('aria-pressed') === 'false') {
      button.click();
      clearInterval(interval);
    }
  }, 500);
}

window.addEventListener('load', enableSubtitles);
