import { Box, Button, Heading } from "@chakra-ui/react";
import NightMode from "./NightMode";
const Header = () => {
  return (
    <Box as="header" bg="teal.500" p={4} color="white">
      <Heading as="h1" size="lg">
        Wikipedia Pessoal 🌐
      </Heading>
      <NightMode />
    </Box>
  );
};
export default Header;
