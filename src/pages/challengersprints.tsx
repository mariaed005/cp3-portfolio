import React from 'react';
import CardAvaliacao from '@/components/CardAvaliacao';

export default function ChallengerSprints() {
  // Dados de exemplo
  const sprints = [
    { id: 1, titulo: 'Sprint 1', descricao: 'Desafio de programação', data: '2024-04-15' },
    { id: 2, titulo: 'Sprint 2', descricao: 'Desafio de design', data: '2024-07-20' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Challenger Sprints</h1>
      {sprints.map((sprint) => (
        <CardAvaliacao
          key={sprint.id}
          titulo={sprint.titulo}
          descricao={sprint.descricao}
          data={sprint.data}
        />
      ))}
    </div>
  );
}
