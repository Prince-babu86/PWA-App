import { useEffect } from 'react';
import Clock from './Components/Clock';

const App = () => {
  const enterFullscreen = () => {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) { // Firefox
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullscreen) { // Chrome, Safari, Opera
      docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) { // IE/Edge
      docElm.msRequestFullscreen();
    }
  };

  useEffect(() => {
    // Example: Automatically enter fullscreen when the app is loaded (optional)
    // enterFullscreen();
  }, []);

  return (
    <div>
    <Clock/>
    </div>
  );
};

export default App;
