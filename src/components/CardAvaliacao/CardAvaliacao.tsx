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
    <div className="card">
      <h2>{titulo}</h2>
      <p className="descricao">{descricao}</p>
      <p className="data">Data: {data}</p>
      <p className="nota">Nota: {nota}</p>
      <div>
        <p className="feedback">Feedback:</p>
        <p>{feedback}</p>
      </div>
    </div>
  );
}
