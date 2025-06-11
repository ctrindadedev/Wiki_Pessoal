import type { ReactNode } from "react";

// Definindo o tipo para o contexto de autenticação
export interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

//Tipo para o provider
export interface AuthProviderProps {
  children: ReactNode;
}

//Definindo o tipo para o contexto de mudança de tema

export interface ThemeContextType {
  defaultTheme: boolean;
  switchTheme: () => void;
}

export interface ThemeContextProviderProps {
  children: ReactNode;
}

//Tipos para os artigos

export interface Article {
  id: number;
  title: string;
  summary: string;
  favorite: boolean;
}

export type ArticleAction = {
  type: "TOGGLE_FAVORITE";
  // Espera o id do artigo
  payload: number;
};

export interface ArticleItemProps {
  article: Article;
  dispatch?: React.Dispatch<ArticleAction>;
}

export interface FavoriteArticlesProps {
  articles: Article[];
  dispatch?: React.Dispatch<ArticleAction>;
}


//Interface para os autores

//Interface complexa
export interface AutorPros {
  nome: string;
  artigos: string[];
  anonascimento: number;
}

export interface Autor {
  author: AutorPros;
}