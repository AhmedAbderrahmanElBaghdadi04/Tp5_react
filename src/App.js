import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TP from './COMPONOENTS/TP';
import TP1 from './COMPONOENTS/TP1';
import TP2 from './COMPONOENTS/TP2';
import TP3 from './COMPONOENTS/TP3';
import TP4 from './COMPONOENTS/TP4';
import TP5 from './COMPONOENTS/TP5';
import TP6 from './COMPONOENTS/TP6';
import OffcanvasExample from './COMPONOENTS/OffcanvasExample';
import NotFound from './COMPONOENTS/NotFound';
import Navbar1 from './COMPONOENTS/Navbar';
import { Row,Col } from 'react-bootstrap';


function App() {
  // État local pour gérer le thème (light ou dark)
  const [theme, setTheme] = useState('light');

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      {/* Utilisez le thème actuel pour définir la classe CSS */}
      <Navbar1 toggleTheme={toggleTheme} />
      <Routes>
      <Route path="/" element={<TP5/>}/>
      <Route path="/TP1" element={<TP1/>}/>
      <Route path="/TP2" element={<TP2/>}/>
      <Route path='/TP3' element={<TP3/>}/>
      <Route path='/TP4' element={<TP4/>}/>
      <Route path='/TP5' element={<TP5/>}/>
      <Route path='*' element={<NotFound/>} />
      


    </Routes>
    </div>
  );
}

export default App;
