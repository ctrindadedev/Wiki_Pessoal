import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Home from "./pages/Home";
import Article from "./pages/Article";
import UserProfile from "./components/UserProfile";
import Login from "./pages/Login";

import Header from "./components/Header";
const App: React.FC = () => {
  return (
    <Container maxW="container.md">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Routes>
    </Container>
  );
};
export default App;
