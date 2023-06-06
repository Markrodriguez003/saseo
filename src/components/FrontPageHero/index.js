import { Box, Flex, Heading, Stack, Button, Image } from "@chakra-ui/react";
// import bgHero from "../../images/backgrounds/imagination-5153623_1920.png";
import bgHero from "../../images/backgrounds/Hero-Book.png";
import bg from "../../images/backgrounds/Abstract-4.jpg";
// import bgHeroB from "../../images/backgrounds/book-5831278_1920.jpg";

// ICONS
import { BsFillArrowDownCircleFill, BsSearchHeartFill } from "react-icons/bs";
 
function FrontPageHero() {
  return (
    <>
      <Heading color={"darkcyan"} mb={4} textAlign={"center"} size={"3xl"} margin={{bottom:10}} >
        Find your perfect book.
      </Heading>
      <Flex
        direction={{
          base: "row",
          lg: "row",
          md: "column-reverse",
          sm: "column-reverse",
        }}
        justify={"center"}
        align={"center"}
        mb={12}
      >
        <Box w={{ base: "20%", lg: "20%", md: "60%", sm: "60%" }}>
          <Heading color={"darkcyan"} mb={4}>
            Looking for a book has never been easier.
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <Button
              leftIcon={<BsFillArrowDownCircleFill />}
              colorScheme="teal"
              variant="solid"
            >
              Tell Me More!
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              rightIcon={<BsSearchHeartFill />}
            >
              Search
            </Button>
          </Stack>
        </Box>
        <Image src={bgHero} style={{ width: "385px", height: "auto" }} mb={6} />
      </Flex>
    </>
  );
}

export default FrontPageHero;
