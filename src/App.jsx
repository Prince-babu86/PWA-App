import React, { useEffect } from 'react'
import "./App.css"
import Clock from './Components/Clock'
const App = () => {
  useEffect(() => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("portrait").catch((err) => console.log(err));
    }
  }, []);

  window.addEventListener("resize", () => {
    console.log(`Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`);
  });
  
  return (
    <div>
    <Clock/>
  
    </div>
  )
}

export default App