import Image from "next/image";
import Link from "next/link";

interface CardAlunoProps {
  nome: string;
  img: string;
  id:number;
}

export default function CardAluno({nome, img, id}: CardAlunoProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <Image src={img} alt={nome} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-semibold">{nome}</h2>
      <Link href={`aluno/${id}`}>Ver mais</Link>
    </div>
  );
}
