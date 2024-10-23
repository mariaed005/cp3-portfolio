"use client"
import CardAvaliacao from '@/components/Card/CardAvaliacao';
import { useEffect, useState } from 'react';

// Definir a interface para o tipo de dado das avaliações
interface Avaliacao {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  nota: number;
  feedback: string;
}

export default function Checkpoints() {
  // Ajustar o tipo de estado para o array de Avaliacao
  const [checkpoints, setCheckpoints] = useState<Avaliacao[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento de dados
    setTimeout(() => {
      const data: Avaliacao[] = [
        { id: 1, titulo: 'Checkpoint 1', descricao: 'Primeira avaliação', data: '2024-01-15', nota: 8.5, feedback: 'Boa performance.' },
        { id: 2, titulo: 'Checkpoint 2', descricao: 'Segunda avaliação', data: '2024-02-20', nota: 7.0, feedback: 'Precisa melhorar.' },
      ];
      setCheckpoints(data);
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <div className="text-center py-20">Carregando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">CheckPoints</h1>
      {checkpoints.map((checkpoint) => (
        <CardAvaliacao
          key={checkpoint.id}
          titulo={checkpoint.titulo}
          descricao={checkpoint.descricao}
          data={checkpoint.data}
          nota={checkpoint.nota}
          feedback={checkpoint.feedback}
        />
      ))}
    </div>
  );
}