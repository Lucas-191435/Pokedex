import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PageInfoPokemon from './Components/PageInfoPokemon';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='infoPokemon/:id' element={<PageInfoPokemon />} />
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
