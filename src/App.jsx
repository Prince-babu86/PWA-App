import React from 'react'
import "./App.css"
const App = () => {
  return (
    <div>
      <button onClick={((e)=>{
        alert("you clicked me ")
      })}>click me</button>
  
    </div>
  )
}

export default App