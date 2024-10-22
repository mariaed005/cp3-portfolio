import React from 'react';
import CardAvaliacao from '@/components/CardAvaliacao';

export default function GlobalSolution() {
  // Dados de exemplo
  const solutions = [
    { id: 1, titulo: 'GlobalSolution 1', descricao: 'Projeto Integrador 1', data: '2024-03-10' },
    { id: 2, titulo: 'GlobalSolution 2', descricao: 'Projeto Integrador 2', data: '2024-06-05' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">GlobalSolution</h1>
      {solutions.map((solution) => (
        <CardAvaliacao
          key={solution.id}
          titulo={solution.titulo}
          descricao={solution.descricao}
          data={solution.data}
        />
      ))}
    </div>
  );
}
