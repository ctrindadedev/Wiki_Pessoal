import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ArticleList from "../components/ArticleList";
import SearchBar from "../components/SearchBar";
import FavoriteArticles from "../components/FavoriteArticles";
const Home: React.FC = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Bem-vindo à Wikipedia Pessoal
      </Heading>
      <Text mb={4}>Pesquise e visualize seus artigos favorito s!</Text>
      <SearchBar />
      <ArticleList />
      <FavoriteArticles />
    </Box>
  );
};
export default Home;
