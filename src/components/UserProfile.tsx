import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
const UserProfile: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <Box p={4} shadow="md" borderWidth="1px" mb={4}>
      {user ? (
        <>
          <Text>Bem-vindo, {user}!</Text>
          <Button mt={2} colorScheme="teal" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <Text>Nenhum usuário logado</Text>
      )}
    </Box>
  );
};
export default UserProfile;
