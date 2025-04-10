import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Contador from './pages/Contador';
import JogoDaVelha from './pages/JogoDaVelha';
import Calculadora from './pages/Calculadora';
import BuscarCep from './pages/BuscarCep';

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/jogo" element={<JogoDaVelha />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/cep" element={<BuscarCep />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
