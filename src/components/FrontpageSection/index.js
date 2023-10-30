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
} from "@chakra-ui/react";
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
    //   <Show above='sm'>

    // </Show>
    // <Hide below='md'>
    //   <Box>This text hides at the "md" value screen width and smaller.</Box>
    // </Hide>

    <Box data-aos="fade-top">
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
      <Center marginTop={"45px"}>
        <Heading
          backgroundColor={"secondary"}
          color={"white"}
          fontSize={"5xl"}
          textAlign={"center"}
          padding={"25px"}
          display={"inline"}
          borderRadius={"45px"}
          id="how"
          marginBottom={"120px"}
          marginTop={{
            base: "50px",
            sm: "0px",
            md: "0px",
            lg: "50px",
            xs: "0px",
            "2xs": "0px",
          }}
        >
          How to use Saseo:
        </Heading>
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
        <Box
          alignContent={"center"}
          alignSelf={{
            base: "flex-start",
            sm: "center",
            md: "center",
            lg: "flex-start",
            xs: "center",
            "2xs": "center",
          }}
          w={{
            base: "30%",
            sm: "80%",
            md: "50%",
            lg: "30%",
            xs: "80%",
            "2xs": "80%",
          }}
        >
          <Text
            color={"white"}
            fontSize={"xl"}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
            id="start"
            textAlign={"center"}
          >
            First, search for the book genre you wish to have suggested to you,
            or find a book via isbn.
          </Text>
        </Box>
        <Box
          alignSelf={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "end",
            xs: "center",
            "2xs": "center",
          }}
          w={{
            base: "30%",
            sm: "80%",
            md: "50%",
            lg: "30%",
            xs: "80%",
            "2xs": "80%",
          }}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
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
          <Text
            color={"white"}
            fontSize={"xl"}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
            id="middle"
            textAlign={"center"}
          >
            Your suggested books will be generated. Find the books that interest
            you by saving them in your library.
          </Text>
        </Box>
        <Box
          alignContent={"center"}
          alignSelf={{
            base: "flex-start",
            sm: "center",
            md: "center",
            lg: "flex-start",
            xs: "center",
            "2xs": "center",
          }}
          w={{
            base: "30%",
            sm: "80%",
            md: "50%",
            lg: "30%",
            xs: "80%",
            "2xs": "80%",
          }}
        >
          <Text
            color={"white"}
            fontSize={"xl"}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
            id="end"
            textAlign={"center"}
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
      </Box>
      {/* <Center>
        <Link href="about">
          <Button
            backgroundColor={"tertiary"}
            variant="link"
            color={"white"}
            fontSize={"3xl"}
            p={"35px"}
            marginTop={"55px"}
            leftIcon={<FaCog />}
            fontWeight={"bold"}
          >
            How did we build this site?
          </Button>
        </Link>
      </Center> */}
    </Box>
  );
}

/* ************************** */
/* MONTHLY BOOK SUGGESTION PANEL  */
/* ************************** */
export function BookSuggestionSection() {
  return (
    <Heading
      color={"white"}
      backgroundColor={"primary"}
      textAlign={"center"}
      fontSize={"6xl"}
      letterSpacing={1}
    >
      {" "}
      Suggestions of the Month:
    </Heading>
  );
}

function FrontPageSection() {
  // Initialize aos library
  useEffect(() => {
    aos.init({
      delay: 35,
      offset: 70,
    });
  });
  return (
    <>
      {/* ********************* */}
      {/* INTRODUCTION SECTION */}
      {/* ********************* */}
      <Box
        position={"relative"}
        backgroundColor={"tertiary"}
        id="genre"
        paddingBottom={"40px"}
        paddingTop={"20px"}
        overflow={"hidden"}
        zIndex={2}
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
            Explore different genres
          </Heading>
        </Center>
        <WordRollerAnimation />

        <br />
        <Center
          justifyContent={"center"}
          alignContent={"center"}
          w={{
            base: "48%",
            xs: "85%",
            "2xs": "85%",
            sm: "78%",
            md: "78%",
            lg: "48%",
          }}
          marginLeft={"auto"}
          marginRight={"auto"}
          paddingBottom={"25px"}
          paddingTop={"30px"}
          wordBreak={"normal"}
        >
          <Text
            color={"white"}
            fontSize={"xl"}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"18px"}
            borderRadius={"30px"}
            textAlign={"center"}
            // fontFamily={"body-font"}
          >
            Interested in finding a book or two to read? Well, Saseo is here to
            guide you! You can search for many book titles by genre. We have
            almost every book genre to choose from! All you need to do is choose
            a genre and how many books you would like suggested to you! You can
            also roll the dice and get a random book suggested to you!
          </Text>
        </Center>
        <Stack
          direction="row"
          spacing={4}
          align="center"
          justify={{
            base: "center",
            lg: "center",
            md: "center",
            sm: "center",
          }}
          paddingBottom={"45px"}
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
        </Stack>
      </Box>

      {/* INFOGRAPHIC */}
      <InfographicSection />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* MONTHLY BOOK SUGGESTIONS  */}
      {/* <BookSuggestionSection /> */}
      {/* <FlipBook /> */}
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default FrontPageSection;
