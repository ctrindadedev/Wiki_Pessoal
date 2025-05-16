import { Box, Input, Button } from "@chakra-ui/react";
const SearchBar = () => {
  return (
    <Box display="flex" mt={4} mb={4}>
      <Input placeholder="Search for your favorites!"></Input>
      <Button ml={2} colorScheme="teal">
        Search
      </Button>
    </Box>
  );
};
export default SearchBar;
