import React from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Artigo {id}
      </Heading>
      <Text mb={4}>Aqui você verá o conteúdo do artigo com ID: {id}.</Text>
      <Link to="details" style={{ color: "teal" }}>
        Ver Detalhes
      </Link>
      <Routes>
        <Route path="details" element={<ArticleDetails />} />
      </Routes>
    </Box>
  );
};
const ArticleDetails: React.FC = () => {
  return (
    <Box mt={4}>
      <Heading as="h3" size="lg" mb={2}>
        Detalhes do Artigo
      </Heading>
      <Text>Aqui estão os detalhes adicionais do artigo.</Text>
    </Box>
  );
};
export default Article;
