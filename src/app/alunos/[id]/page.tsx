"use client"
import React, { useEffect, useState } from 'react'
import { TipoAlunos } from "@/types";
import Link from 'next/link';
import Image from 'next/image';

export default function Aluno({params}:{params:{id:number}}) {

    const [aluno, setAluno] = useState<TipoAlunos>({
        id:0,
        nome:"",
        img:"",

        gs:{
            python:0,
            data:0,
            front:0,
            software:0,
            java:0,
            ia:0,
            descricao:""
        },

        checkpoints:{
            cp1:[
                {
                    materia:"",
                    nota:0,
                    data:"",
                    feedback:""
                }
            ],

            cp2:[
                {
                    materia:"",
                    nota:0,
                    data:"",
                    feedback:""
                },
            ],

            cp3:[
                {
                    materia:"",
                    nota:0,
                    data:"",
                    feedback:""
                },
            ],

            cp4:[
                {
                    materia:"",
                    nota:0,
                    data:"",
                    feedback:""
                },
            ],

            cp5:[
                {
                    materia:"",
                    nota:0,
                    data:"",
                    feedback:""
                },
            ]
        },

        challenge:[
            {
                sprint:1,
                python:0,
                data:0,
                front:0,
                software:0,
                java:0,
                ia:0,
                descricao:""
            },
        ]
    })

    useEffect(() => {

        const chamandoApi = async () => {
          const response = await fetch(`http://localhost:3000/api/base-alunos/${params.id}`);
          const dados = await response.json();
          setAluno(dados);
        }
        chamandoApi();
      }, [params.id])

    return (
        <div className="details-container">
            <div className="details-header">
              <Image src={aluno.img} alt={aluno.nome} className="details-img" />
              <h1 className="details-nome">{aluno.nome}</h1>
            </div>
            
            <div className="details-boxes">
              <Link href="/checkpoint"  className="box checkpoint"> 
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

