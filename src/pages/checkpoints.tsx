import React from 'react';
import CardAvaliacao from '@/components/CardAvaliacao';

export default function Checkpoints() {
  // Dados de exemplo
  const checkpoints = [
    { id: 1, titulo: 'Checkpoint 1', descricao: 'Primeira avaliação', data: '2024-01-15' },
    { id: 2, titulo: 'Checkpoint 2', descricao: 'Segunda avaliação', data: '2024-02-20' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">CheckPoints</h1>
      {checkpoints.map((checkpoint) => (
        <CardAvaliacao
          key={checkpoint.id}
          titulo={checkpoint.titulo}
          descricao={checkpoint.descricao}
          data={checkpoint.data}
        />
      ))}
    </div>
  );
}
