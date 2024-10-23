import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">Voltar ao Início</Link>
    </div>
  );
}
