// CHAKRA UI COMPONENTS
import {
  Box,
  Image,
  Text,
  Heading,
  Center,
  Stack,
  Button,
  Link,
  Show,
  Hide,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";

// LIBRARY
import Xarrow from "react-xarrows";
import { bookGenreRetrival } from "lib/bookGenreRetrieval";

// ! replace with https://www.react-reveal.com/

// COMPONENTS
import WordRollerAnimation from "../ui/WordRollerAnimation";
import SideBookStackGraphic from "../ui/SideBookStackGraphic";
import FlipBook from "components/ui/FlipBook";
import HeadingPanel from "components/ui/HeadingPanel";
import TextPanel from "components/ui/TextPanel";
import Fade from "react-reveal/Fade";
import BookCoverAnimation from "components/ui/BookCoverAnimation";
import AdPanels from "components/ui/AdPanels";

// CSS
import "./FrontPageSection.design.css";

// IMAGES
import magnifierIcon from "../../images/backgrounds/icon-347230_1920.png";
import confusedAvatar from "../../images/confusedAvatar.png";

// ICONS
import { FaCog } from "react-icons/fa";

// NOTES
// ? CUSTOM BREAKPOINTS
// ? https://codesandbox.io/s/chakra-ui-custom-breakpoints-jx5dg?file=/src/App.tsx:269-307

/* ************************** */
/* INFOGRAPHIC PANEL */
/* ************************** */
export function InfographicSection() {
  return (
    <Box marginBottom={"180px"}>
      <Show below="lg">
        <Center>
          <Image
            src={confusedAvatar}
            w={"220px"}
            h={"auto"}
            borderRadius={"full"}
            marginTop={"45px"}
          />
        </Center>
      </Show>
      <Center marginTop={"45px"} marginBottom={"85px"}>
        <HeadingPanel backgroundColor={"secondary"}>
          How to use Saseo
        </HeadingPanel>
      </Center>
      <br />
      <br />
      <Box
        display={"flex"}
        flexDirection={{
          base: "row",
          sm: "column",
          md: "column",
          lg: "row",
          xs: "column",
          "2xs": "column",
        }}
        padding={"30px"}
        height={"300px"}
        justifyContent={{
          base: "space-around",
          sm: "center",
          md: "center",
          lg: "space-around",
          xs: "center",
          "2xs": "center",
        }}
        gap={"60px"}
      >
        {/* //TODO : REPLACE THE INFOGRAPHIC TEXT BOXES WITH THE NEWLY CREATED TEXTPANEL COMPONENT */}

        <TextPanel id="start">
          First, search for the book genre you wish to have suggested to you, or
          find a book via isbn.
        </TextPanel>

        <Box
          alignSelf={"center"}
          display={"flex"}
          flexDirection={"column"}
          gap={"35px"}
        >
          <Hide below="lg">
            <Image
              src={confusedAvatar}
              w={"220px"}
              h={"auto"}
              borderRadius={"full"}
              alignSelf={"center"}
            />
          </Hide>
          <TextPanel id="middle">
            Your suggested books will be generated. Find the books that interest
            you by saving them in your library.
          </TextPanel>
        </Box>

        <TextPanel id="end">
          Afterward you can email the book suggestions to yourself or anyone
          else via email!{" "}
        </TextPanel>

        {/* ARROWS */}

        <Xarrow
          start="start" //can be react ref
          end="middle" //or an id
          color="darkcyan"
          dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
          animateDrawing={5}
        />
        <Xarrow
          start="middle" //can be react ref
          end="end" //or an id
          color="darkcyan"
          dashness={{ strokeLen: 5, nonStrokeLen: 5, animation: -5 }}
          animateDrawing={3}
        />
      </Box>
    </Box>
  );
}

/* ************************** */
/* MONTHLY BOOK SUGGESTION PANEL  */
/* ************************** */
export function BookGenreSuggestionSection() {
  let covers = bookGenreRetrival();

  return (
    <Box
      textAlign={"center"}
      backgroundColor={"accent-1"}
      boxShadow="lg"
      p={"20px"}
      w={{
        base: "90%",
        lg: "60%",
        md: "90%",
        sm: "90%",
        xs: "95%",
        "2xs": "95%",
      }}
      marginLeft={"auto"}
      marginRight={"auto"}
      borderRadius={"30px"}
    >
      <HeadingPanel backgroundColor={"primary"}>
        Books you might like!
      </HeadingPanel>

      <Flex
        flexDirection={"row"}
        justifyContent={"center"}
        alignContent={"center"}
        gap={"20px"}
        wrap={"wrap"}
        marginTop={"25px"}
        marginBottom={"30px"}
      >
        <Box w={"360px"}>
          <Image
            src={
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
            }
            w={"360px"}
            h={"540px"}
            backgroundSize={"cover"}
            alt="Dan Abramov"
            boxShadow="dark-lg"
          />
          {/* <BookCoverAnimation cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg" /> */}
        </Box>
        <VStack
          gap={"10px"}
          wrap={"wrap"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <HStack
            gap={"10px"}
            wrap={"wrap"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Box w={"170px"} backgroundColor={"pink"}>
              <Image
                src={
                  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676734077i/122757672.jpg"
                }
                w={"170px"}
                backgroundSize={"cover"}
                alt="Dan Abramov"
                boxShadow="2xl"
              />
            </Box>
            <Box w={"170px"} hbackgroundColor={"pink"}>
              <Image
                src={
                  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684818185i/75665890.jpg"
                }
                w={"170px"}
                backgroundSize={"cover"}
                alt="Dan Abramov"
                boxShadow="2xl"
              />
            </Box>
            <Box w={"170px"} hbackgroundColor={"pink"}>
              <Image
                src={
                  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684818185i/75665890.jpg"
                }
                w={"170px"}
                backgroundSize={"cover"}
                alt="Dan Abramov"
                boxShadow="2xl"
              />
            </Box>
          </HStack>
          <HStack
            gap={"10px"}
            wrap={"wrap"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Box w={"170px"} backgroundColor={"pink"}>
              <Image
                src={
                  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686947278i/75593500.jpg"
                }
                w={"170px"}
                backgroundSize={"cover"}
                alt="Dan Abramov"
                boxShadow="2xl"
              />
            </Box>
            <Box w={"170px"} backgroundColor={"pink"}>
              <Image
                src={
                  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686947278i/75593500.jpg"
                }
                w={"170px"}
                backgroundSize={"cover"}
                alt="Dan Abramov"
                boxShadow="2xl"
              />
            </Box>
            <Box w={"170px"} backgroundColor={"pink"}>
              <Image
                src={
                  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683827919l/101673225.jpg"
                }
                w={"170px"}
                backgroundSize={"cover"}
                alt="Dan Abramov"
                boxShadow="2xl"
              />
            </Box>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

function FrontPageSection() {
  return (
    <>
      {/* ********************* */}
      {/* INTRODUCTION SECTION */}
      {/* ********************* */}
      <Box
        position={"relative"}
        // backgroundColor={"dark-accent-1"}
        backgroundColor={"tertiary"}
        id="genre"
        paddingBottom={"40px"}
        paddingTop={"20px"}
        overflow={"hidden"}
        zIndex={2}
        h={"90vh"}
      >
        <br />

        {/* SIDE BOOK */}

        <SideBookStackGraphic />

        <Image
          src={magnifierIcon}
          w={"100px"}
          h={"auto"}
          borderRadius={"8px"}
          textAlign={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={"2px"}
        />
        <Center padding={5}>
          <Heading
            color={"text"}
            textAlign={"center"}
            fontSize={"6xl"}
            letterSpacing={1}
          >
            {" "}
            Explore different genres
          </Heading>
        </Center>
        <WordRollerAnimation />

        <br />
        {/* <Center paddingBottom={"25px"} paddingTop={"20px"} wordBreak={"normal"} > */}
        <TextPanel>
          Interested in finding a book or two to read? Well, Saseo is here to
          guide you! You can search for many book titles by genre. We have
          almost every book genre to choose from! All you need to do is choose a
          genre and how many books you would like suggested to you! You can also
          roll the dice and get a random book suggested to you!
        </TextPanel>
        {/* </Center> */}
        <Text color={"white"} textAlign={"center"} paddingTop={"10px"}>
          Grab your book suggestions here:{" "}
        </Text>
        <Stack
          direction={{
            base: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
            "2xs": "column",
          }}
          spacing={4}
          align="center"
          justify={{
            base: "center",
            lg: "center",
            md: "center",
            sm: "center",
          }}
          paddingBottom={"45px"}
          paddingTop={"15px"}
        >
          <Link href="suggest">
            <Button
              backgroundColor={"primary"}
              variant="solid"
              color={"white"}
              // fontWeight={"bold"}
              fontSize={"xl"}
            >
              Suggestions
            </Button>
          </Link>
          <Link href="random">
            <Button
              backgroundColor={"secondary"}
              variant="solid"
              color={"white"}
              // fontWeight={"bold"}
              fontSize={"xl"}
            >
              Random
            </Button>
          </Link>
          <Link href="isbn">
            <Button
              backgroundColor={"white"}
              // variant="outline"
              color={"primary"}
              fontWeight={"bold"}
              fontSize={"xl"}
            >
              ISBN
            </Button>
          </Link>
        </Stack>
      </Box>

      {/* INFOGRAPHIC */}
      <Fade>
        <InfographicSection />
      </Fade>

      {/* MONTHLY BOOK SUGGESTIONS  */}
      <AdPanels />
      <BookGenreSuggestionSection />
      {/* <FlipBook /> */}
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default FrontPageSection;
