import { useRouter } from 'next/router';
import React from 'react';

export default function DetalheAvaliacao() {
  const router = useRouter();
  const { id } = router.query;

  const avaliacao = {
    id,
    titulo: `Avaliação ${id}`,
    descricao: 'Detalhes sobre a avaliação.',
    data: '2024-01-15',
    feedback: 'Feedback específico sobre esta avaliação.'
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{avaliacao.titulo}</h1>
      <p className="text-lg mb-2">{avaliacao.descricao}</p>
      <p className="text-gray-600 mb-4">Data: {avaliacao.data}</p>
      <div className="bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Feedback</h2>
        <p>{avaliacao.feedback}</p>
      </div>
    </div>
  );
}
