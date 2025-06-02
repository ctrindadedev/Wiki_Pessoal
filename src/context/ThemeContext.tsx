import type { ReactNode } from "react";
import React, { useContext, createContext, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

//Definindo o tipo para o contexto de mudança de tema

interface ThemeContextType {
  defaultTheme: boolean;
  switchTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

//Context com valor padrão

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Provider

export const ThemeProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [defaultTheme, setTheme] = useState<boolean>(true);

  const { toggleColorMode } = useColorMode(); // hook do Chakra

  const switchTheme = () => {
    toggleColorMode(); // muda o tema real no Chakra UI
    setTheme((prev) => !prev); // opcional: atualiza seu estado local
  };

  return (
    <ThemeContext.Provider value={{ defaultTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook para usar o contexto do modo escuro
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useNightMOde deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
