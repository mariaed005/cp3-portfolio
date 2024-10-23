import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/checkpoint">CheckPoints</Link>
        </li>
        <li>
          <Link href="/gs">GlobalSolution</Link>
        </li>
        <li>
          <Link href="/challenge">Challenger Sprints</Link>
        </li>
      </ul>
    </nav>
  );
}
