export type TipoAlunos = {

    id:number;
    nome:string;
    img: string;

    gs:TipoGs;
    challenge:TipoChallenge[];
    checkpoints:TipoCheckpoints;
}

export type TipoAluno = {
    
    id:number;
    nome: string;
    img: string;
}

export type TipoGs = {
    python:number;
    data:number;
    front:number;
    software:number;
    java:number;
    ia:number;
    descricao:string;
}

export type TipoChallenge = {
    sprint:number;
    python:number;
    data:number;
    front:number;
    software:number;
    java:number;
    ia:number;
    descricao:string;
}

export type TipoCheckpoints = {
    cp1:TipoCp[];
    cp2:TipoCp[];
    cp3:TipoCp[];
    cp4:TipoCp[];
    cp5:TipoCp[];
}

export type TipoCp = {
    materia:string;
    nota:number;
    data:string;
    feedback:string;
}