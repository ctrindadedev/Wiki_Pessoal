import { Box, Text, Stack } from "@chakra-ui/react";
import React from "react";

//Interface complexa
interface AutorPros {
  nome: string;
  artigos: string[];
  anonascimento: number;
}

interface Autor {
  author: AutorPros;
}


//Componente que receba um array de objetos como prop

const Autoritem: React.FC<Autor> = ({ author }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px" mb={4}>
      <Stack spacing={2}>
        <Text fontWeight="bold" color="teal.500">
          Nome do autor: {author.nome}
        </Text>
        <Text>
          <Text> Artigos: {author.artigos.join(", ")}</Text>
        </Text>
        <Text>Ano de Nascimento: {author.anonascimento}</Text>
      </Stack>
    </Box>
  );
};

export default Autoritem;
