import React, { useEffect } from 'react'
import "./App.css"
import Clock from './Components/Clock'
const App = () => {
  useEffect(() => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("portrait").catch((err) => console.log(err));
    }
  }, []);

  
  return (
    <div>
    <Clock/>
  
    </div>
  )
}

export default App