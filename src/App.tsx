import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Article from "./pages/Article";
import UserProfile from "./components/UserProfile";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  );
};

export default App;
