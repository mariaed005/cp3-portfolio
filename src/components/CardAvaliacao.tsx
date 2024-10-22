import React from 'react';

interface CardAvaliacaoProps {
  titulo: string;
  descricao: string;
  data: string;
}

export default function CardAvaliacao({ titulo, descricao, data }: CardAvaliacaoProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md my-4">
      <h2 className="text-2xl font-bold">{titulo}</h2>
      <p className="my-2">{descricao}</p>
      <span className="text-gray-500 text-sm">Data: {data}</span>
    </div>
  );
}
