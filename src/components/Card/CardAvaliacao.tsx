import React from 'react';

interface CardAvaliacaoProps {
  titulo: string;
  descricao: string;
  data: string;
  nota: number;
  feedback: string;
}

export default function CardAvaliacao({ titulo, descricao, data, nota, feedback }: CardAvaliacaoProps) {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2">{titulo}</h2>
      <p className="mb-2">{descricao}</p>
      <p className="text-gray-600 mb-1">Data: {data}</p>
      <p className="text-gray-600 mb-1">Nota: {nota}</p>
      <div className="bg-gray-100 p-2 rounded">
        <p className="text-sm font-semibold">Feedback:</p>
        <p>{feedback}</p>
      </div>
    </div>
  );
}
