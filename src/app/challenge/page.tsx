import CardAvaliacao from "@/components/CardAvaliacao/CardAvaliacao";
import { TipoChallenge } from "@/types";

export default function Challenge({params}:{params:{challenge:TipoChallenge}}) {
  const sprints = [
    {
      id: 1,
      titulo: "Sprint 1",
      descricao: "Desafio de programação",
      data: "2024-05-10",
      nota: 8.0,
      feedback: "Bom desempenho na resolução do desafio.",
    },
    {
      id: 2,
      titulo: "Sprint 2",
      descricao: "Desafio de design de interface",
      data: "2024-07-20",
      nota: 7.5,
      feedback: "Interface criativa, mas com alguns ajustes necessários.",
    },
  ];

  return (
    <div>
      <h1>Challenger Sprints</h1>
      {sprints.map((sprint) => (
        <CardAvaliacao
          key={sprint.id}
          titulo={sprint.titulo}
          descricao={sprint.descricao}
          data={sprint.data}
          nota={sprint.nota}
          feedback={sprint.feedback}
        />
      ))}
    </div>
  );
}
