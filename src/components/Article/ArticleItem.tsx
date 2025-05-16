import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface ArticleItemProps {
  id: number;
  title: string;
  summary?: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ id, title, summary }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px" mb={4}>
      <Link to={`/article/${id}`}>
        <Text fontWeight="bold" color="teal.500">
          {title}
        </Text>
      </Link>
      <Text mt={2}>{summary}</Text>
    </Box>
  );
};
export default ArticleItem;
