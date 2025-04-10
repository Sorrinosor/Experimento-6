import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
  const [input, setInput] = useState('');

  const addInput = (val) => setInput((prev) => prev + val);
  const clearInput = () => setInput('');
  const calcular = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Erro');
    }
  };

  return (
    <div className="calculadora-container">
      <div className="calculadora">
        <div className="display">{input || '0'}</div>
        <div className="botoes">
          <button onClick={clearInput} className="btn clear">C</button>
          <button onClick={() => addInput('/')} className="btn">/</button>
          <button onClick={() => addInput('*')} className="btn">*</button>
          <button onClick={() => addInput('-')} className="btn">-</button>

          <button onClick={() => addInput('7')} className="btn">7</button>
          <button onClick={() => addInput('8')} className="btn">8</button>
          <button onClick={() => addInput('9')} className="btn">9</button>
          <button onClick={() => addInput('+')} className="btn">+</button>

          <button onClick={() => addInput('4')} className="btn">4</button>
          <button onClick={() => addInput('5')} className="btn">5</button>
          <button onClick={() => addInput('6')} className="btn">6</button>
          <button onClick={calcular} className="btn igual">=</button>

          <button onClick={() => addInput('1')} className="btn">1</button>
          <button onClick={() => addInput('2')} className="btn">2</button>
          <button onClick={() => addInput('3')} className="btn">3</button>
          <button onClick={() => addInput('0')} className="btn zero">0</button>
          <button onClick={() => addInput('.')} className="btn">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
