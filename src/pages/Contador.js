import React, { useState } from 'react';
import '../App.css';

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="page-container">
      <h2>Contador de Cliques</h2>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador - 1)}>-1</button>
    </div>
  );
};

export default Contador;
