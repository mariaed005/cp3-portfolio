"use client"
import React, { useEffect, useState } from 'react'
import { TipoAluno } from "@/types";
import Link from 'next/link';
import Image from 'next/image';

export default function Aluno({params}:{params:{id:number}}) {

    const [aluno, setAluno] = useState<TipoAluno>({
        id:0,
        nome:"",
        img:""
    })

    useEffect(() => {

        const chamandoApi = async () => {
          const response = await fetch(`http://localhost:3000/api/base-alunos/${params.id}`);
          const dados = await response.json();
          setAluno(dados);
        }
        chamandoApi();
      }, [])

    return (
        <div className="details-container">
            <div className="details-header">
              <Image src={aluno.img} alt={aluno.nome} className="details-img" />
              <h1 className="details-nome">{aluno.nome}</h1>
            </div>
  
            <div className="details-boxes">
              <Link href="/checkpoint" className="box checkpoint"> 
                <h2>CheckPoints</h2>
                <p>Avaliações intermediárias para acompanhar o progresso.</p>
              </Link>
        
              <Link href="/gs" className="box globalsolution">
                <h2>GlobalSolution</h2>
                <p>Projetos integradores que aplicam conhecimentos adquiridos.</p>
              </Link>
        
              <Link href="/challenge" className="box challenge">
                <h2>Challenge Sprints</h2>
                <p>Desafios rápidos focados em resolução de problemas.</p>
              </Link>
            </div>
        </div>
      )
}

