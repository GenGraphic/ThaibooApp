import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import Kontakt from './Pages/Kontakt';
import Speisekarte from './Pages/Speisekarte';
import UberUns from './Pages/UberUns';

const App = () => {
  return (
    <div className='App'> 
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Kontakt' element={<Kontakt />}/>
          <Route path='/Speisekarte' element={<Speisekarte />}/>
          <Route path='/UberUns' element={<UberUns />}/>
       </Routes>
    </div>
  )
}

export default App
