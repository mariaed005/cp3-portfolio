import { TipoAlunos } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CardAlunoProps {
  nome: string;
  imagem: string;
}

export default function CardAluno({nome, img, id}: TipoAlunos) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <Image src={img} alt={nome} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-semibold">{nome}</h2>
      <Link href={`aluno/${id}`}></Link>
    </div>
  );
}
