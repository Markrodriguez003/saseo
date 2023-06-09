import { Box, Flex, Heading, Stack, Container, Button, Image, Badge, Divider, InputLeftElement, FormControl, Input, InputGroup, Text, Center, position } from "@chakra-ui/react";
import { useState } from "react";

// COMPONENTS
import BookmarkHeader from "../ui/BookmarkHeader"
import PageDesignWaves from "../ui/PageDesignWaves"

// LIBS / UTILITIES
import FetchBook from "../../lib/FetchBook";

// IMAGES
// import bgHero from "../../images/backgrounds/imagination-5153623_1920.png";
import bgHero from "../../images/backgrounds/Hero-Book.png";
import bgHero2 from "../../images/backgrounds/Hero-2.png";
import bgHero3 from "../../images/backgrounds/icon-347230_1920.png";
import "./styles.css"
// import bgHeroB from "../../images/backgrounds/book-5831278_1920.jpg";
import splashBook from "../../images/hero/hero-half-book.png"

// ICONS
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { color } from "framer-motion";

function FrontPageHero() {
 
  const [placeholderText, setPlaceholderText] = useState("")
  return (
    <>

      {/* <Box w={"100%"} h={"900px"} position={"absolute"} backgroundColor={"rgba(0,139,139,0.6)"} style={{ clipPath: " polygon(0% 98.25%, 0% 52.5%, 50% 81.25%, 100% 51.5%, 100% 97.25%)" }} /> */}
      {/* <Box w={"100%"} h={"900px"} position={"absolute"} backgroundColor={"rgba(0,139,139,0.3)"} style={{ clipPath: " polygon(0% 95.25%, 0% 50.5%, 50% 81.25%, 100% 49.5%, 100% 95.25%)" }} /> */}
      {/* <Box w={"100%"} h={"900px"} position={"absolute"} backgroundColor={"rgba(0,139,139,0.2)"} style={{ clipPath: " polygon(0% 95.25%, 0% 50.5%, 50% 81.25%, 100% 49.5%, 100% 95.25%)" }} /> */}
      {/* <Box w={"100%"} h={"900px"} position={"absolute"} backgroundColor={"rgba(0,139,139,0.18)"} style={{ clipPath: " polygon(0% 95.25%, 0% 47.5%, 50% 81.25%, 100% 48.5%, 100% 97.25%)" }} /> */}
      {/* <Box w={"100%"} h={"900px"} position={"absolute"} backgroundColor={"rgba(0,139,139,0.15)"} style={{ clipPath: " polygon(0% 94%, 0% 46%, 50% 81.25%, 100% 47%, 100% 96%)" }} /> */}
      {/* <Box w={"100%"} h={"900px"} position={"absolute"} backgroundColor={"rgba(0,139,139,1)"} style={{ clipPath: " polygon(0% 99.25%, 0% 54.5%, 50% 81.25%, 100% 54.5%, 100% 99.25%)" }} /> */}



      <Container height={"80vh"} maxW={"100%"} width={"100%"} p={0} m={0}>
        <Center position={"relative"} zIndex={2}>
          <Stack>
            <Heading color={"darkcyan"} mb={4} textAlign={"center"} size={"3xl"} margin={{ bottom: 10 }} >
            {/* <span style={{ color: "brown" }}>Find your </span> Perfect <span style={{backgroundColor:"darkcyan", color:"white"}}>Book.</span> */}
              <span style={{ color: "#4d2f00" }}>Find your </span> Perfect Book.
            </Heading>

            <InputGroup w={"80%"} alignSelf={"center"}>
              <InputLeftElement pointerEvents='none'>
                <BiSearch color='rgba(0,0,0,0.2)' size={"1.3em"} />
              </InputLeftElement>
              <Input mb={2} type='text' placeholder='Type a Book Genre!' border={"2px"} borderColor={"darkcyan"} />
            </InputGroup>
          </Stack>
        </Center>
        <Box position={"relative"} zIndex={1}>
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
            position={"relative"}
          >
            <Box w={{ base: "20%", lg: "20%", md: "60%", sm: "60%" }}>

              <Heading color={"darkcyan"} mb={4}>
                Looking for a book has never been easier.
              </Heading>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme="teal"
                  variant="solid"
                >
                  Tell Me More!
                </Button>
                <Button
                  colorScheme="teal"
                  variant="outline"
                >
                  About
                </Button>
              </Stack>
            </Box>
            <Image src={bgHero} style={{ width: "16%", height: "auto" }} mb={8} mt={6}/>
          </Flex>
          {/* <PageDesignWaves /> */}
          <Box w={"100%"} h={"100px"} position={"absolute"} bottom={-2}>
            <Image src={splashBook} alt="fuck off" h={"600px"} w={"100%"} m={0} p={0} />
          </Box>
        </Box >
      </Container>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <br />
      <BookmarkHeader>
        Explore many book genres
      </BookmarkHeader>

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
              rightIcon={<BiSearch />}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Divider />
      <br />
      <br /> */}
    </>
  );
}

export default FrontPageHero;
