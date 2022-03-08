import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PageInfoPokemon from './Components/PageInfoPokemon';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='infoPokemon/:id' element={<PageInfoPokemon />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
