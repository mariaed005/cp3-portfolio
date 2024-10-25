import Link from 'next/link';
import '@/app/globals.css';

export default function Aluno() {
  return (
    <div className="details-container">
      <div className="details-header">
      <img src="/images/bia.jpeg" alt="Bia" className="details-img" />
        <h1 className="details-nome">Bia</h1>
      </div>

      <div className="details-boxes">
        <Link href="/checkpoint" className="box checkpoint"> 
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
  );
}
