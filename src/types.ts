export type TipoAlunos = {

    id:number;
    nome:string;
    img: string;

    gs:TipoGs;
    challenge:TipoChallenge;
    checkpoints:TipoCheckpoints;
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

}

export type TipoCheckpoints = {
    
}