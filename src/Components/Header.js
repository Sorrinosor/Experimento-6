import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#282c34' }}>
      <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/" style={{ color: 'white' }}>Início</Link>
        <Link to="/todo" style={{ color: 'white' }}>To-Do List</Link>
        <Link to="/contador" style={{ color: 'white' }}>Contador</Link>
        <Link to="/jogo" style={{ color: 'white' }}>Jogo da Velha</Link>
        <Link to="/calculadora" style={{ color: 'white' }}>Calculadora</Link>
        <Link to="/cep" style={{ color: 'white' }}>Buscar CEP</Link>
      </nav>
    </header>
  );
};

export default Header;
