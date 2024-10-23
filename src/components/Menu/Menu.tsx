import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="my-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-blue-950">
            Início
          </Link>
        </li>
        <li>
          <Link href="/checkpoint" className="text-white hover:text-blue-950">
            CheckPoints
          </Link>
        </li>
        <li>
          <Link href="/gs" className="text-white hover:text-blue-950">
            GlobalSolution
          </Link>
        </li>
        <li>
          <Link href="/challenge" className="text-white hover:text-blue-950">
            Challenger Sprints
          </Link>
        </li>
      </ul>
    </nav>
  );
}
