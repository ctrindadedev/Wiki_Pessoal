import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { defaultSystem } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={defaultSystem}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);
