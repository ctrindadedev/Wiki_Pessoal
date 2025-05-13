import { Box } from "@chakra-ui/react";
import ArticleItem from "./ArticleItem";
// Função para simular a chamada de API para obter o resumo
const fetchSummary = async (title: string) => {
  // Simulação de uma chamada de API
  return `Resumo para o artigo: ${title}`;
};
const ArticleList = () => {
  const articles = [
    {
      id: 1,
      title: "React com TypeScript",
      summary: "Aprenda a usar TypeScript com React.",
    },
    {
      id: 2,
      title: "Estilização com Chakra UI",
      summary: "Guia para estilização com Chakra UI.",
    },
  ];
  return (
    <Box>
      {articles.map((article, index) => (
        <ArticleItem
          id={article.id}
          key={index}
          title={article.title}
          fetchSummary={() => fetchSummary(article.title)}
        />
      ))}
    </Box>
  );
};
export default ArticleList;
