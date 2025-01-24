import { useEffect } from 'react';
import Clock from './Components/Clock';
import Timer from './Components/Timer';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

const App = () => {

  

  return (
    <div>
      <div>
      
        </div>
      <Routes>
       <Route path='/' element={<Clock/>}/>
       <Route path='/Timer' element={<Timer/>}/>
      </Routes>
   
    </div>
  );
};

export default App;
