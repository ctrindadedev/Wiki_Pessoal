import { Box } from "@chakra-ui/react";
import Autoritem from "./Autoritem";

const AutorList = () => {
  const autores = [
    {
      nome: "Caio Trindade",
      artigos: ["React com TypeScript", "Estilização com chakra UI"],
      anonascimento: 2005,
    },
    {
      nome: "José Silva",
      artigos: ["Java com springboot"],
      anonascimento: 2000,
    },
  ];

  return (
    <Box>
      {autores.map((autore, index) => (
        <Autoritem key={index} author={autore} />
      ))}
    </Box>
  );
};

export default AutorList;
