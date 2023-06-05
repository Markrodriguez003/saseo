import { Box, Flex, Heading } from "@chakra-ui/react";

import bgHero from "../../images/backgrounds/imagination-5153623_1920.png";
function FrontPageHero() {
  return (
    <Flex direction={{ base: "row", lg: "row", md: "column", sm: "column" }} justify={"center"} align={"center"} mb={12}>
      <Box w={"20%"}>
        <Heading color={"darkcyan"}>Looking for a book has never been easier.</Heading>
      </Box>
      <img
        src={bgHero}
        style={{ width: "350px", height: "auto", border: "darkCyan 8px solid" }}
      />
    </Flex>
  );
}

export default FrontPageHero;
