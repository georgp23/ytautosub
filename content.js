function enableSubtitles() {
  const interval = setInterval(() => {
    // give the player focus so it hears our keystroke
    const video = document.querySelector('video');
    if (video) video.focus();

    // dispatch the 'c' keydown to toggle captions
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'c',
      code: 'KeyC',
      keyCode: 67,
      which: 67,
      bubbles: true,
      cancelable: true
    }));

    console.log('Dispatched C to toggle captions');
    // clear after first run so it doesn't spam
    clearInterval(interval);
  }, 500);
}

window.addEventListener('load', enableSubtitles);
