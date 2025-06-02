import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const handleLogin = () => {
    const validationErrors: { username?: string; password?: string } = {};
    if (username.trim() === "") {
      validationErrors.username = "Nome de usuário é obrigatório";
    }
    if (password.trim() === "") {
      validationErrors.password = "Senha é obrigatória";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Se a validação passar, fazemos login e navegamos para a home
      login(username);
      navigate("/");
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10} p={4} shadow="md" borderWidth="1px">
      <FormControl id="username" isInvalid={!!errors.username} mb={4}>
        <FormLabel>Nome de Usuário</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <FormErrorMessage>{errors.username}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl id="password" isInvalid={!!errors.password} mb={4}>
        <FormLabel>Senha</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        )}
      </FormControl>
      <Button colorScheme="teal" onClick={handleLogin} width="full">
        Login
      </Button>
    </Box>
  );
};
export default Login;
