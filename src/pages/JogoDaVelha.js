import React, { useState } from 'react';
import './JogoDaVelha.css';

const JogoDaVelha = () => {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorX, setJogadorX] = useState(true);
  const [vencedor, setVencedor] = useState(null);

  const linhasVitoria = [
    [0,1,2], [3,4,5], [6,7,8], // linhas
    [0,3,6], [1,4,7], [2,5,8], // colunas
    [0,4,8], [2,4,6]           // diagonais
  ];

  const verificarVencedor = (novoTabuleiro) => {
    for (let linha of linhasVitoria) {
      const [a, b, c] = linha;
      if (
        novoTabuleiro[a] &&
        novoTabuleiro[a] === novoTabuleiro[b] &&
        novoTabuleiro[a] === novoTabuleiro[c]
      ) {
        return novoTabuleiro[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (tabuleiro[index] || vencedor) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = jogadorX ? 'X' : 'O';

    const ganhador = verificarVencedor(novoTabuleiro);
    setVencedor(ganhador);
    setTabuleiro(novoTabuleiro);
    setJogadorX(!jogadorX);
  };

  const reiniciarJogo = () => {
    setTabuleiro(Array(9).fill(null));
    setJogadorX(true);
    setVencedor(null);
  };

  return (
    <div className="container-jogo">
      <h2>Jogo da Velha</h2>
      <div className="tabuleiro">
        {tabuleiro.map((valor, index) => (
          <button
            key={index}
            className={`casa ${valor === 'X' ? 'x' : valor === 'O' ? 'o' : ''}`}
            onClick={() => handleClick(index)}
          >
            {valor}
          </button>
        ))}
      </div>
      {vencedor && <h3 className="vencedor">Vencedor: {vencedor}</h3>}
      {!vencedor && !tabuleiro.includes(null) && <h3 className="vencedor">Empate!</h3>}
      <button className="reiniciar" onClick={reiniciarJogo}>Reiniciar</button>
    </div>
  );
};

export default JogoDaVelha;
