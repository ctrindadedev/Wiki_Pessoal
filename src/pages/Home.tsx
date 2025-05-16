import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ArticleList from "../components/Article/ArticleList";
import SearchBar from "../components/SearchBar";
import FavoriteArticles from "../components/FavoriteArticles";
import AutorList from "../components/Autor/AutorList";

const Home: React.FC = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Bem-vindo à Wikipedia Pessoal
      </Heading>
      <Text mb={4}>Pesquise e visualize seus artigos favoritos!</Text>
      <SearchBar />
      <ArticleList />
      <FavoriteArticles />
      <Text mb={4}>Pesquise e visualize seus autores favoritos!</Text>
      <SearchBar />
      <AutorList />
    </Box>
  );
};
export default Home;
