import Link from 'next/link';

interface CardAlunoProps {
  nome: string;
  imagem: string;
  link: string;
}

export default function CardAluno({ nome, imagem, link }: CardAlunoProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <img src={imagem} alt={nome} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-semibold">{nome}</h2>
      <Link href={link} className="mt-2 text-blue-500 hover:underline">Ver Mais</Link>
    </div>
  );
}
