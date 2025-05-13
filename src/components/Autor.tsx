import { Box, Text } from "@chakra-ui/react";
interface Author {
  name: string;
  bio: string;
}
interface AuthorProps {
  author: Author;
}

const AuthorComponent: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px" mb={4}>
      <Text fontWeight="bold">{author.name}</Text>
      <Text mt={2}>{author.bio}</Text>
    </Box>
  );
};

export default AuthorComponent;
