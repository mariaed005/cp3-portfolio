import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home">
      <h1>Portfólio Acadêmico</h1>
      <div>
        <Link href="/checkpoint" className="checkpoints">
          <h2>CheckPoints</h2>
          <p>Avaliações intermediárias para acompanhar o progresso.</p>
        </Link>
        <Link href="/gs" className="gs">
          <h2>GlobalSolution</h2>
          <p>Projetos integradores que aplicam conhecimentos adquiridos.</p>
        </Link>
        <Link href="/challenge" className="challenge">
          <h2>Challenge Sprints</h2>
          <p>Desafios rápidos focados em resolução de problemas.</p>
        </Link>
      </div>
    </div>
  );
}
