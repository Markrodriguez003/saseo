// CHAKRA UI COMPONENTS
import { Box, Image, Text, Heading, Center } from "@chakra-ui/react";
import { useEffect } from "react";

// LIBRARY
// ? https://www.npmjs.com/package/react-xarrows
import Xarrow from "react-xarrows";
import aos from "aos";

// COMPONENTS
import WordRollerAnimation from "../ui/WordRollerAnimation";
import SideBookStackGraphic from "../ui/SideBookStackGraphic";
import FlipBook from "components/ui/FlipBook";

// CSS
import "./FrontPageSection.design.css";
import "aos/dist/aos.css";
// IMAGES
import magnifierIcon from "../../images/backgrounds/icon-347230_1920.png";
import middleBook from "../../images/hero/hero-middle-book.png";
import endBook from "../../images/hero/hero-end-book.png";
import sectionBackgroundImage from "../../images/backgrounds/background-tile-6.png";
import confusedAvatar from "../../images/confusedAvatar.png";

function FrontPageSection() {
  // Initialize aos library
  useEffect(() => {
    aos.init({
      delay: 29,
      offset: 80,
    });
  });
  return (
    <>
      {/* ********************* */}
      {/* INTRODUCTION SECTION */}
      {/* ********************* */}
      <Box
        position={"relative"}
        backgroundColor={"#4d2f00 "}
        // bgGradient="linear(to-tr, #E97F71, #E97F88)"
        // bgGradient="linear(to-tr, #4d2f00;, black;)"
        // backgroundColor={"rgba(0,0,0,0.9)"}
        // backgroundImage={sectionBackgroundImage}
        // backgroundBlendMode={"difference"}
        id="genre"
        paddingBottom={"40px"}
        paddingTop={"40px"}
      >
        <br />

        {/* SIDE BOOK */}
        <SideBookStackGraphic />
        <Image
          src={magnifierIcon}
          w={"120px"}
          h={"auto"}
          borderRadius={"8px"}
          textAlign={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={"20px"}
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
          w={"48%"}
          marginLeft={"auto"}
          marginRight={"auto"}
          paddingBottom={"105px"}
          paddingTop={"30px"}
          wordBreak={"normal"}
        >
          {/* // TODO: Add a secondary, offset, solid box shadow (right/left) behind main box  */}
          {/* // TODO: Add suggestion, random & ISBN search buttons  */}
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

      {/* //! DEFINE IN A NEW, SEPARATE COMPONENT AND SAVE/CALL IT INSIDE THIS COMPONENT 
      
        
      {/* ************************** */}
      {/* INFOGRAPHIC */}
      {/* ************************** */}

      <Box data-aos="fade-top">
        <Center marginTop={"45px"}>
          <Heading
            backgroundColor={"#E97F71"}
            color={"white"}
            fontSize={"5xl"}
            textAlign={"center"}
            padding={"25px"}
            display={"inline"}
            borderRadius={"45px"}
            id="how"
            marginBottom={"50px"}
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
              First, search for the book genre you wish to have suggested to
              you, or find a book via isbn.
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
            display={"flex"}
            flexDirection={"column"}
            gap={"22px"}
          >
            <Image
              src={confusedAvatar}
              w={"200px"}
              h={"auto"}
              borderRadius={"full"}
              alignSelf={"center"}
            />
            <Text
              color={"white"}
              fontSize={"xl"}
              letterSpacing={0.5}
              className="highlight-text"
              padding={"15px"}
              borderRadius={"90px"}
              id="middle"
            >
              Your suggested books will be generated. Find the books that
              interest you by saving them in your library.
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
            start="how" //can be react ref
            end="start" //or an id
            color="darkcyan"
            dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
            animateDrawing={5}
          />
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
      </Box>
      {/* // TODO: Add panel (UI panel, work on it) saying "How did we build this site?"   */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* ************************** */}
      {/* MONTHLY BOOK SUGGESTIONS  */}
      {/* ************************** */}
      <Heading
        color={"white"}
        backgroundColor={"darkcyan"}
        textAlign={"center"}
        fontSize={"6xl"}
        letterSpacing={1}
      >
        {" "}
        Suggestions of the Month:
      </Heading>
      <br />
      <br />
      <br />

      {/* <FlipBook /> */}
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
  //   backgroundColor={"darkcyan"}
            //   backgroundColor={"#4d2f00"}

*/
