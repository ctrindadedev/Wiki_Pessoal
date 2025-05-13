import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
const App: React.FC = () => {
  return (
    <Container maxW="container.md">
      <Header />
      <SearchBar />
      <ArticleList />
    </Container>
  );
};
export default App;
