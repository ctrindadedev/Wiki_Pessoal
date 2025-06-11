import React from "react";
import { Box, Button, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import type { FavoriteArticlesProps } from "../service/types";

const FavoriteArticles: React.FC<FavoriteArticlesProps> = ({
  articles,
  dispatch,
}) => {
  const handleRemoveFavorite = (articleId: number) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: articleId });
  };

  if (articles.length === 0) {
    return <Text>Você ainda não tem artigos favoritos.</Text>;
  }

  return (
    <Box p={4} borderRadius="md">
      <UnorderedList spacing={2}>
        {articles.map((article) => (
          <ListItem
            key={article.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>{article.title}</Text>
            <Button
              size="sm"
              onClick={() => handleRemoveFavorite(article.id)}
              colorScheme="red"
            >
              Remover
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default FavoriteArticles;
