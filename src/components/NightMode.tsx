import { Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NightMode = () => {
  const { defaultTheme, switchTheme } = useTheme();

  return (
    <Button onClick={switchTheme}>
      {defaultTheme ? "Modo Escuro" : "Modo Claro"}
    </Button>
  );
};

export default NightMode;
