import { Box, Heading } from "@chakra-ui/react";
const Header = () => {
  return (
    <Box as="header" bg="teal.500" p={4} color="white">
      <Heading as="h1" size="lg">
        Wikipedia Pessoal 🌐
      </Heading>
    </Box>
  );
};
export default Header;
