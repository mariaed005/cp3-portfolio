import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
      <p className="text-lg mb-8">Desculpe, a página que você está procurando não existe.</p>
      <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded">
        Voltar ao Início
      </Link>
    </div>
  );
}
