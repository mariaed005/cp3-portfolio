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
          <Link href="/checkpoints" className="text-white hover:text-blue-950">
            CheckPoints
          </Link>
        </li>
        <li>
          <Link href="/globalsolution" className="text-white hover:text-blue-950">
            GlobalSolution
          </Link>
        </li>
        <li>
          <Link href="/challengersprints" className="text-white hover:text-blue-950">
            Challenger Sprints
          </Link>
        </li>
      </ul>
    </nav>
  );
}
