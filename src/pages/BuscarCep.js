import React, { useState } from 'react';
import '../App.css';

const BuscaCEP = () => {
  const [cep, setCep] = useState('');
  const [info, setInfo] = useState(null);

  const buscar = async () => {
    if (!cep) return;
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    setInfo(data);
  };

  return (
    <div className="page-container">
      <h2>Buscador de CEP</h2>
      <input value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP" />
      <button onClick={buscar}>Buscar</button>
      {info && (
        <div>
          <p><strong>Rua:</strong> {info.logradouro}</p>
          <p><strong>Bairro:</strong> {info.bairro}</p>
          <p><strong>Cidade:</strong> {info.localidade} - {info.uf}</p>
        </div>
      )}
    </div>
  );
};

export default BuscaCEP;
