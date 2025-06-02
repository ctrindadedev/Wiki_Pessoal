import React, { useReducer } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

// Definindo o tipo de um artigo
interface Article {
  id: number;
  title: string;
}
// Definindo o tipo do estado dos favoritos, que é uma lista de artigos
type FavoritesState = Article[];
// Definindo as ações que podem ser realizadas no estado dos favoritos
type FavoritesAction =
  | { type: "ADD_FAVORITE"; article: Article } // Ação para adicionar um artigo
  | { type: "REMOVE_FAVORITE"; articleId: number }; // Ação para remover um artigo
// Implementando a função reducer
const favoritesReducer = (
  state: FavoritesState,
  action: FavoritesAction
): FavoritesState => {
  switch (action.type) {
    case "ADD_FAVORITE":
      // Retorna uma nova lista de favoritos com o novo artig adicionado
      return [...state, action.article];
    case "REMOVE_FAVORITE":
      // Retorna uma nova lista de favoritos, removendo o artigo com o ID correspondente
      return state.filter((article) => article.id !== action.articleId);
    default:
      return state; // Retorna o estado atual por padrão sea ação não for reconhecida
  }
};

//Usando a função reducer
const FavoriteArticles: React.FC = () => {
  // Inicializando o useReducer com o reducer e um estado inicial (lista vazia)
  const [favorites, dispatch] = useReducer(favoritesReducer, []);
  // Função para adicionar um artigo aos favoritos
  const addFavorite = (article: Article) => {
    dispatch({ type: "ADD_FAVORITE", article });
  };
  // Função para remover um artigo dos favoritos
  const removeFavorite = (articleId: number) => {
    dispatch({ type: "REMOVE_FAVORITE", articleId });
  };

  return (
    <Box>
      <Text fontWeight="bold">Artigos Favoritos</Text>
      <ul>
        {favorites.map((article) => (
          <li key={article.id}>
            {article.title}
            <Button
              ml={2}
              size="sm"
              onClick={() => removeFavorite(article.id)}
              colorScheme="red"
            >
              Remover
            </Button>
          </li>
        ))}
      </ul>
      <Button
        mt={4}
        mb={4}
        colorScheme="teal"
        onClick={() => addFavorite({ id: 1, title: "React comTypeScript" })}
      >
        Adicionar "React com TypeScript" aos Favoritos
      </Button>
    </Box>
  );
};
export default FavoriteArticles;
