import { promises } from "fs";
import { NextResponse } from "next/server";


export async function GET() {
    const arquivo = await promises.readFile(process.cwd() + "/src/data/base.json", "utf-8");

    const alunos = JSON.parse(arquivo);
    return NextResponse.json(alunos);
}