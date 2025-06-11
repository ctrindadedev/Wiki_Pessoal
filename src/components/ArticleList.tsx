import { useReducer } from "react";
import { Box, Heading } from "@chakra-ui/react";
import ArticleItem from "./ArticleItem";
import FavoriteArticles from "./FavoriteArticles";
import type { Article, ArticleAction } from "../service/types";

//Mook de artigos
const initialArticles: Article[] = [
  {
    id: 1,
    title: "React com TypeScript",
    summary: "Aprenda a usar TypeScript com React.",
    favorite: false,
  },
  {
    id: 2,
    title: "Estilização com Chakra UI",
    summary: "Guia para estilização com Chakra UI.",
    favorite: false,
  },
  {
    id: 3,
    title: "Hooks Avançados no React",
    summary: "Explore o poder do useReducer, useContext etc",
    favorite: false,
  },
  {
    id: 4,
    title: "Java com SpringBoot",
    summary: "Aprenda a usar SpringBoot",
    favorite: false,
  },
  {
    id: 5,
    title: "Nextjs: A React framework",
    summary: "Explore as vantagens de desenvolver utilizando Nextjs",
    favorite: false,
  },
  {
    id: 6,
    title: "Estrutura Básicas de dados",
    summary: "Entenda o básico e essencial de estrutura de dados",
    favorite: false,
  },
  {
    id: 7,
    title: "Complexidade de um algoritmo",
    summary:
      "Aprenda a analisar situações e desenvolver o algoritmo mais apropriado",
    favorite: false,
  },
  {
    id: 8,
    title: "Clean Code",
    summary: "Pratique e entenda boas práticas de desenvolvimento de código",
    favorite: false,
  },
  {
    id: 9,
    title: "Angular: Vantagens e Aplicações",
    summary: "Ganhe produtividade com Angular",
    favorite: false,
  },
  {
    id: 10,
    title: "HTML e CSS: O básico do desenvolvimento Web",
    summary:
      "Entenda o fundamental para começar a jornada no desenvolvimento web",
    favorite: false,
  },
];

// Reducer para gerenciar o estado dos artigos (favorito ou não)

const articlesReducer = (
  state: Article[],
  action: ArticleAction
): Article[] => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return state.map((article) =>
        article.id === action.payload
          ? { ...article, favorite: !article.favorite }
          : article
      );
    default:
      return state;
  }
};

const ArticleList = () => {
  const [articles, dispatch] = useReducer(articlesReducer, initialArticles);

  // Filtra a lista de favoritos a partir do estado principal

  const favoriteArticles = articles.filter((article) => article.favorite);

  return (
    <Box p={4}>
      <Heading size="lg" mb={4}>
        Artigos Favoritos
      </Heading>
      {/* Passa a lista de favoritos e o dispatch para o componente de favoritos */}
      <FavoriteArticles articles={favoriteArticles} dispatch={dispatch} />
      <Heading size="lg" mt={8} mb={4}>
        Todos os Artigos
      </Heading>

      {/* Mapeia todos os artigos e passa os dados e o dispatch para cada item */}

      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} dispatch={dispatch} />
      ))}
    </Box>
  );
};

export default ArticleList;
