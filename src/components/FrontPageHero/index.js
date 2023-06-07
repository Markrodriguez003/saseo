import { Box, Flex, Heading, Stack, Button, Image, Badge, Divider } from "@chakra-ui/react";

// COMPONENTS
import BookmarkHeader from "../ui/BookmarkHeader"


// LIBS / UTILITIES
import FetchBook from "../../lib/FetchBook";

// IMAGES
// import bgHero from "../../images/backgrounds/imagination-5153623_1920.png";
import bgHero from "../../images/backgrounds/Hero-Book.png";
import bgHero2 from "../../images/backgrounds/Hero-2.png";
import bgHero3 from "../../images/backgrounds/icon-347230_1920.png";
import bg from "../../images/backgrounds/Abstract-4.jpg";
import "./styles.css"
// import bgHeroB from "../../images/backgrounds/book-5831278_1920.jpg";

// ICONS
import { BsFillArrowDownCircleFill, BsSearchHeartFill } from "react-icons/bs";
import { color } from "framer-motion";

function FrontPageHero() {
  return (
    <>

      <br />
      <br />
      <br />
      <br />
      <FetchBook />
      <br />
      <br />
      <br />
      <Heading color={"darkcyan"} mb={6} textAlign={"center"} size={"3xl"} margin={{ bottom: 10 }} >
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <BookmarkHeader>
        Explore many book genres
      </BookmarkHeader>
      {/* <Heading color={"darkcyan"} textAlign={"center"} mb={6}>
        Explore many titles from every subject a book can be.
      </Heading> */}
      <Flex
        direction={{
          base: "row",
          lg: "row",
          md: "column-reverse",
          sm: "column-reverse",
        }}
        justify={"center"}
        align={"center"}
        textAlign={"center"}
        mb={12}
      >
        <Stack direction='column' m={4} className="badge-zoom">
          <Badge backgroundColor={"darkcyan"} fontSize='xl' color={"white"}>Fiction</Badge>
          <Badge backgroundColor={"white"} fontSize='xl' color={"darkcyan"} border='1px' borderColor='darkcyan'>Sci-Fi</Badge>
          <Badge backgroundColor={"hotpink"} fontSize='xl' color={"white"}>Educational</Badge>
          <Badge backgroundColor={"white"} fontSize='xl' color={"darkcyan"} border='1px' borderColor='darkcyan'>Memoir</Badge>
          <Badge backgroundColor={"tomato"} fontSize='xl' color={"white"}>DYI</Badge>
          <Badge backgroundColor={"white"} fontSize='xl' color={"darkcyan"} border='1px' borderColor='darkcyan'>Religion</Badge>
          <Badge backgroundColor={"dodgerblue"} fontSize='xl' color={"white"}>Sports</Badge>
          <Badge backgroundColor={"white"} fontSize='xl' color={"darkcyan"} border='1px' borderColor='darkcyan'>Art</Badge>


        </Stack>
        <Image src={bgHero3} style={{ width: "385px", height: "auto" }} mb={6} />
        <Stack direction='column' m={4} className="badge-zoom">
          <Badge backgroundColor={"white"} fontSize='xl' color={"darkcyan"} border='1px' borderColor='darkcyan'>History</Badge>
          <Badge backgroundColor={"darkmagenta"} fontSize='xl' color={"white"}>Mystery</Badge>
          <Badge backgroundColor={"white"} fontSize='xl' color={"darkcyan"} border='1px' borderColor='darkcyan'>Travel</Badge>
          <Badge backgroundColor={"darkolivegreen"} fontSize='xl' color={"white"}>Crime</Badge>
          <Badge backgroundColor={"white"} fontSize='xl' color={"darkcyan"} border='1px' borderColor='darkcyan'>Western</Badge>
          <Badge backgroundColor={"orange"} fontSize='xl' color={"white"}>Thriller</Badge>
          <Badge backgroundColor={"white"} fontSize='xl' color={"darkcyan"} border='1px' borderColor='darkcyan'>LGBTQ+</Badge>
          <Badge backgroundColor={"brown"} fontSize='xl' color={"white"} border='1px' borderColor='darkcyan'>Non-Fiction</Badge>
        </Stack>
      </Flex>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
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
        <Image src={bgHero2} style={{ width: "385px", height: "auto" }} mb={6} mr={8} />
        <Box w={{ base: "20%", lg: "20%", md: "60%", sm: "60%" }}>
          <Heading color={"darkcyan"} mb={4}>
            Expand your mind or get lost in fiction.
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
      </Flex>
      <Divider />
      <br />
      <br />
    </>
  );
}

export default FrontPageHero;
