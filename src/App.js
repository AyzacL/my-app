import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Inicio from './pages/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Inicio/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/home" exact element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
