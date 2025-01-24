import React, { useEffect, useState } from 'react'
import "./Clock.css"
const Clock = () => {
    
    const [time, settime] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(() => {
            settime((new Date()))
        }, 1000);
        return () => clearInterval(timer)
    },[])

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  


  return (
    <div className='clock'>
    <h1>{formattedTime}</h1>
    </div>
  )
}

export default Clock