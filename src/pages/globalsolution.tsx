import React from 'react';
import CardAvaliacao from '@/components/CardAvaliacao';

export default function GlobalSolution() {
  const solutions = [
    { 
      id: 1, 
      titulo: 'GlobalSolution 1', 
      descricao: 'Projeto integrador inicial', 
      data: '2024-04-10',
      nota: 9.0, 
      feedback: 'Excelente trabalho!' 
    },
    { 
      id: 2, 
      titulo: 'GlobalSolution 2', 
      descricao: 'Projeto integrador avançado', 
      data: '2024-06-15',
      nota: 8.5, 
      feedback: 'Bom desempenho com algumas melhorias sugeridas.' 
    },
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
          nota={solution.nota}
          feedback={solution.feedback}
        />
      ))}
    </div>
  );
}
