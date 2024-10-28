"use client"
import React, { useEffect, useState } from 'react';
import CardAluno from '@/components/CardAluno/CardAluno';
import { TipoAlunos } from '@/types';

export default function Home() {

  const [alunos, setAlunos] = useState<TipoAlunos[]>([]);

  useEffect(() => {

    const chamandoApi = async () => {
      const response = await fetch('http://localhost:3000/api/base-alunos');
      const dados = await response.json();
      setAlunos(dados);
    }

    chamandoApi();


  }, [])
  
  return (

    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Portfólio Acadêmico</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alunos.map((aluno) => (
          <CardAluno key={aluno.id} nome={aluno.nome} img={aluno.img} id={aluno.id}/>
        ))}
      </div>
    </div>
  );
}
