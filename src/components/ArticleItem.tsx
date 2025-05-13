// import { useState } from "react";
// import { Box, Button, Text } from "@chakra-ui/react";
// interface ArticleItemProps {
//   id: number;
//   title: string;
//   summary: string;
// }
// const ArticleItem: React.FC<ArticleItemProps> = ({ title, summary }) => {
//
//   const [isSummaryVisible, setSummaryVisible] = useState<boolean>(false);
//   const toggleSummaryVisibility = () => {
//     setSummaryVisible(!isSummaryVisible);
//   };
//   return (
//     <Box p={4} shadow="md" borderWidth="1px" mb={4}>
//       <Text fontWeight="bold">{title}</Text>
//       {isSummaryVisible && <Text mt={2}>{summary}</Text>}
//       <Button mt={4} onClick={toggleSummaryVisibility}>
//         {isSummaryVisible ? "Ocultar Conteúdo" : "Mostrar Conteúdo"}
//       </Button>
//     </Box>
//   );
// };
// export default ArticleItem;

import { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
interface ArticleItemProps {
  id: number;
  title: string;
  fetchSummary: () => Promise<string>;
}
const ArticleItem: React.FC<ArticleItemProps> = ({ title, fetchSummary }) => {
  const [summary, setSummary] = useState<string>("");

  // Usando useState com TypeScript para gerenciar a visibilidade do conteúdo
  //O estado isSummaryVisible é inicializado como false e é alternado entre true e false quando o botão é clicado.
  const [isSummaryVisible, setSummaryVisible] = useState<boolean>(false);
  useEffect(() => {
    // Simulando uma chamada de API para carregar o conteúdo do artigo
    const loadSummary = async () => {
      const fetchedSummary = await fetchSummary();
      setSummary(fetchedSummary);
    };
    loadSummary();
  }, [fetchSummary]); // Dependência do useEffect
  const toggleSummaryVisibility = () => {
    setSummaryVisible(!isSummaryVisible);
  };
  return (
    <Box p={4} shadow="md" borderWidth="1px" mb={4}>
      <Text fontWeight="bold">{title}</Text>
      {isSummaryVisible && <Text mt={2}>{summary}</Text>}
      <Button mt={4} onClick={toggleSummaryVisibility}>
        {isSummaryVisible ? "Ocultar Conteúdo" : "Mostrar Conteúdo"}
      </Button>
    </Box>
  );
};
export default ArticleItem;
