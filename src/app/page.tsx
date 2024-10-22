import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Portfólio!</h1>
      <p className="text-lg text-gray-700">
        Explore as avaliações de <span className="font-semibold">CheckPoints</span>, 
        <span className="font-semibold"> GlobalSolution</span>, e 
        <span className="font-semibold"> Challenger Sprints</span>.
      </p>
    </div>
  );
}
