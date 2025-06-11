import React, { createContext, useState, useContext } from "react";
import type { AuthContextType, AuthProviderProps } from "../service/types";

// Criando o contexto com um valor padrão para armanezar e compartilhar as informações de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//Componente que fornece o contexto de autenticação para todos os outros, gerenciando o estado de autenticação em qualquer parte da aplicação
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  //Funções de login e logout
  const login = (username: string) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
