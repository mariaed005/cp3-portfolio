import React, { useState } from 'react';

export default function FormularioAvaliacao() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [nota, setNota] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ titulo, descricao, data, nota, feedback });
    alert('Avaliação salva com sucesso!');
    // Limpar campos após o envio
    setTitulo('');
    setDescricao('');
    setData('');
    setNota('');
    setFeedback('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Adicionar Avaliação</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Título</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Descrição</label>
          <textarea
            className="w-full p-2 border rounded"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Data</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Nota</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Feedback</label>
          <textarea
            className="w-full p-2 border rounded"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Salvar
        </button>
      </form>
    </div>
  );
}
