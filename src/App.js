import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import TP from './COMPONOENTS/TP';
import TP1 from './COMPONOENTS/TP1';
import TP2 from './COMPONOENTS/TP2';
import TP3 from './COMPONOENTS/TP3';
import TP4 from './COMPONOENTS/TP4';

import NotFound from './COMPONOENTS/NotFound';
import Navbar from './COMPONOENTS/Navbar';


function App() {
  return (
    <div className="App">


    <Navbar />  
   
    <Routes>
      <Route path="/" element={<TP1/>}/>
      <Route path="/TP1" element={<TP1/>}/>
      <Route path="/TP2" element={<TP2/>}/>
      <Route path='/TP3' element={<TP3/>}/>
      <Route path='/TP4' element={<TP4/>}/>
      <Route path='*' element={<NotFound/>} />
      


    </Routes>
   
    </div>
  );
}

export default App;
