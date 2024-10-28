import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/alunos/1">Bia</Link>
        </li>
        <li>
          <Link href="/alunos/2">Duda</Link>
        </li>
        <li>
          <Link href="/aluno/3">Erick</Link>
        </li>
        <li>
          <Link href="/aluno/4">Guilherme</Link>
        </li>
        <li>
          <Link href="/aluno/5">Icaro</Link>
        </li>
      </ul>
    </nav>
  );
}
