import React, { createContext, useState, useContext } from "react";
// Definindo o tipo para o contexto de autenticação
interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

// Criando o contexto com um valor padrão
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{ children: React.Node }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null);
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
