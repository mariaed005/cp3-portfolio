import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/aluno1">Bia</Link>
        </li>
        <li>
          <Link href="/aluno2">Duda</Link>
        </li>
        <li>
          <Link href="/aluno3">Erick</Link>
        </li>
        <li>
          <Link href="/aluno4">Guilherme</Link>
        </li>
        <li>
          <Link href="/aluno5">Icaro</Link>
        </li>
      </ul>
    </nav>
  );
}
