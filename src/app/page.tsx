import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-paperboard">
      <h1 className="text-4xl font-bold mb-8">Portfólio Acadêmico</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
        <Link href="/checkpoints" className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">CheckPoints</h2>
          <p>Avaliações intermediárias para acompanhar o progresso.</p>
        </Link>
        <Link href="/globalsolution" className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">GlobalSolution</h2>
          <p>Projetos integradores que aplicam conhecimentos adquiridos.</p>
        </Link>
        <Link href="/challengersprints" className="bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700 transition flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">Challenger Sprints</h2>
          <p>Desafios rápidos focados em resolução de problemas.</p>
        </Link>
      </div>
    </div>
  );
}
