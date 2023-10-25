// CHAKRA UI COMPONENTS
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Stack,
  Center,
} from "@chakra-ui/react";

// LIBRARY
// ? https://www.npmjs.com/package/react-xarrows
import Xarrow from "react-xarrows";

// COMPONENTS
import WordRollerAnimation from "../ui/WordRollerAnimation";
// CSS
import "./FrontPageSection.design.css";
// IMAGES
import magnifierIcon from "../../images/backgrounds/icon-347230_1920.png";
import middleBook from "../../images/hero/hero-middle-book.png";
import endBook from "../../images/hero/hero-end-book.png";
import sectionBackgroundImage from "../../images/backgrounds/background-tile-6.png";

function FrontPageSection() {
  return (
    <>
      <Box
        position={"relative"}
        backgroundColor={"#4d2f00 "}
        // bgGradient="linear(to-tr, #E97F71, #E97F88)"
        // bgGradient="linear(to-tr, #4d2f00;, black;)"
        // backgroundColor={"rgba(0,0,0,0.9)"}
        // backgroundImage={sectionBackgroundImage}
        // backgroundBlendMode={"difference"}
        id="genre"
      >
        <br />
        <Image
          src={magnifierIcon}
          w={"120px"}
          h={"auto"}
          borderRadius={"8px"}
          textAlign={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
        />
        <Center padding={5}>
          <Heading
            color={"white"}
            textAlign={"center"}
            fontSize={"6xl"}
            letterSpacing={1}
          >
            {" "}
            Explore different genres <WordRollerAnimation />
          </Heading>
        </Center>

        <br />
        <Center
          justifyContent={"center"}
          alignContent={"center"}
          w={"60%"}
          marginLeft={"auto"}
          marginRight={"auto"}
          paddingBottom={"105px"}
          paddingTop={"30px"}
          wordBreak={"normal"}
        >
          {/* //! Add a secondary, offset, solid box shadow (right/left) behind main box  */}
          <Text
            color={"white"}
            fontSize={"xl"}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
          >
            Interested in finding a book or two to read? Well, Saseo is here to
            guide you! You can search for many book titles by genre. We have
            almost every book genre to choose from! All you need to do is choose
            a genre and how many books you would like to see what we suggested!
          </Text>
        </Center>

        {/* <Image
          src={middleBook}
          alt="Open Book image"
          h={"auto"}
          w={"100vw"}
          m={0}
          p={0}
        /> */}
      </Box>

      <br />
      <br />
      <br />
      <br />
      <Center>
        <Heading
          //   backgroundColor={"darkcyan"}
        //   backgroundColor={"#4d2f00"}
          backgroundColor={"#E97F71"}
          color={"white"}
          fontSize={"5xl"}
          textAlign={"center"}
          padding={"25px"}
          display={"inline"}
          borderRadius={"45px"}
          id="how"
        >
          How to use Saseo:
        </Heading>
      </Center>
      <br />
      <br />
      <Box
        display={"flex"}
        flexDirection={{ base: "row", sm: "column", md: "column", lg: "row" }}
        padding={"30px"}
        height={"300px"}
        justifyContent={{
          base: "space-around",
          sm: "center",
          md: "center",
          lg: "space-around",
        }}
      >
        <Box alignContent={"center"} w={"30%"}>
          <Text
            color={"white"}
            fontSize={"xl"}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
            id="start"
          >
            First, search for the book genre you wish to have suggested to you,
            or find a book via isbn.
          </Text>
        </Box>
        <Box
          alignSelf={{
            base: "center",
            sm: "center",
            md: "end",
            lg: "end",
          }}
          w={"30%"}
        >
          <Text
            color={"white"}
            fontSize={"xl"}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"90px"}
            id="middle"
          >
            Your suggested books will be generated. Find the books that interest
            you by saving them in your library.
          </Text>
        </Box>
        <Box alignContent={"center"} w={"30%"}>
          <Text
            color={"white"}
            fontSize={"xl"}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
            id="end"
          >
            Afterward you can email the book suggestions to yourself or anyone
            else via email!{" "}
          </Text>
        </Box>

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
        <Xarrow
          start="genre" //can be react ref
          end="how" //or an id
        //   color="#E97F71"
          color="darkcyan"
          dashness={{ strokeLen: 10, nonStrokeLen: 10, animation: -5 }}
          animateDrawing={3}
        />
      </Box>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Box>
        <Image
          src={endBook}
          alt="Open Book image"
          h={"60vh"}
          w={"100vw"}
          m={0}
          p={0}
        />
      </Box> */}
    </>
  );
}

export default FrontPageSection;

/*
      <p className="body-text">
            Interested in finding a book or two to read? Well, Saseo is here to
            guide you! You can search for many book titles by genre. We have
            almost every book genre to choose from! All you need to do is choose
            a genre and how many books you would like to see what we suggested!
          </p>

*/
