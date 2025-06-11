import { Box, Text, IconButton } from "@chakra-ui/react";
import { Star } from "lucide-react";
import type { ArticleItemProps } from "../service/types";

const ArticleItem: React.FC<ArticleItemProps> = ({ article, dispatch }) => {
  const handleToggleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: article.id });
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      mb={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontSize="xl">{article.title}</Text>
      <IconButton
        aria-label="Favoritar artigo"
        icon={<Star fill={article.favorite ? "gold" : "none"} color="gold" />}
        onClick={handleToggleFavorite}
        variant="ghost"
      />
    </Box>
  );
};

export default ArticleItem;
