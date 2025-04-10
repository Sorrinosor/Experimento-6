import React, { useState } from 'react';
import '../App.css';

const TodoList = () => {
  const [tarefas, setTarefas] = useState([]);
  const [nova, setNova] = useState('');

  const adicionar = () => {
    if (nova.trim() !== '') {
      setTarefas([...tarefas, nova]);
      setNova('');
    }
  };

  return (
    <div className="page-container">
      <h2>To-Do List</h2>
      <input value={nova} onChange={e => setNova(e.target.value)} placeholder="Nova tarefa" />
      <button onClick={adicionar}>Adicionar</button>
      <ul>
        {tarefas.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
};

export default TodoList;
