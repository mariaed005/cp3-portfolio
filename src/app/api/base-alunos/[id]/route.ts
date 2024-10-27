import { TipoAlunos } from "@/types";
import { promises } from "fs";
import { NextResponse } from "next/server";


export async function GET(request: Request, {params}:{params:{id:number}}) {
    const arquivo = await promises.readFile(process.cwd() + "/src/data/base.json", "utf-8");

    const alunos:TipoAlunos[] = JSON.parse(arquivo);

    const alunoAlvo = alunos.find(aluno => aluno.id == params.id);
    return NextResponse.json(alunoAlvo);
}