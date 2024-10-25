import React from 'react';
import CardAluno from '@/components/CardAluno/CardAluno';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Portfólio Acadêmico</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardAluno nome="Bia" imagem="/images/bia.jpeg" link="/aluno1" />
        <CardAluno nome="Duda" imagem="/images/duda.jpeg" link="/aluno2" />
        <CardAluno nome="Erick" imagem="/images/erick.jpeg" link="/aluno3" />
        <CardAluno nome="Guilherme" imagem="/images/guilherme.jpeg" link="/aluno4" />
        <CardAluno nome="Icaro" imagem="/images/icaro.jpeg" link="/aluno5" />
      </div>
    </div>
  );
}
