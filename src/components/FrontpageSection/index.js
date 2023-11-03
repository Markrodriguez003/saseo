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

import Xarrow from "react-xarrows";

// ! replace with https://www.react-reveal.com/

// COMPONENTS
import WordRollerAnimation from "../ui/WordRollerAnimation";
import SideBookStackGraphic from "../ui/SideBookStackGraphic";
import FlipBook from "components/ui/FlipBook";
import TextPanel from "components/ui/TextPanel";
import Fade from "react-reveal/Fade";

// TESTING
import BookCard from "components/BookCard";

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
    <Box>
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
          borderRadius={"25px"}
          id="how"
          marginBottom={{
            base: "120px",
            sm: "120px",
            md: "120px",
            lg: "120px",
            xs: "120p",
            "2xs": "145px",
          }}
          marginTop={{
            base: "40px",
            sm: "0px",
            md: "0px",
            lg: "40px",
            xs: "0px",
            "2xs": "0px",
          }}
        >
          How to use Saseo
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
            xs: "90%",
            "2xs": "90%",
          }}
        >
          {/* //TODO : REPLACE THE INFOGRAPHIC TEXT BOXES WITH THE NEWLY CREATED TEXTPANEL COMPONENT */}
          <Text
            color={"white"}
            fontSize={{
              base: "xl",
              sm: "xl",
              md: "xl",
              lg: "xl",
              xs: "md",
              "2xs": "md",
            }}
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
            xs: "90%",
            "2xs": "90%",
          }}
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
          <Text
            color={"white"}
            fontSize={{
              base: "xl",
              sm: "xl",
              md: "xl",
              lg: "xl",
              xs: "md",
              "2xs": "md",
            }}
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
            xs: "90%",
            "2xs": "90%",
          }}
        >
          <Text
            color={"white"}
            fontSize={{
              base: "xl",
              sm: "xl",
              md: "xl",
              lg: "xl",
              xs: "md",
              "2xs": "md",
            }}
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
  // TESTING
  const booktest = {
    title: "Example Title",
    name: "Example book name",
    author_name: "Example Author II",
    subject: "SubjectII",
    isbn: "19812712432",
    cover: "240727",
    description:
      "While hitchhiking through the galaxy, Arthur Dent is dropped off on a planet in a rainstorm. He appears to be in England on Earth, even though he had seen the planet destroyed by the Vogons. He has been gone for several years, but only a few months have passed on Earth. He hitches a lift with a man named Russell and his sister Fenchurch (nicknamed Fenny). Russell explains that Fenny, who is sitting in a drugged state in the back seat of the car, became delusional after worldwide mass hysteria, in which everyone hallucinated big yellow spaceships (the Vogon destructor ships that demolished the Earth). Arthur becomes curious about Fenchurch, but he is dropped off before he can ask more questions. Inside his inexplicably undamaged home, Arthur finds a gift-wrapped bowl inscribed with the words So long and thanks for all the fish, into which he puts his Babel Fish. Arthur thinks that Fenchurch is somehow connected to him and to the Earth's destruction. He still has the ability to fly whenever he lets his thoughts wander. Arthur puts his life in order, and then tries to find out more about Fenchurch. He happens to find her hitchhiking and picks her up. He obtains her phone number, but shortly thereafter loses it. He discovers her home by accident when he searches for the cave in which he had lived on prehistoric Earth; Fenchurch's flat is built on the same spot. Arthur and Fenchurch find more circumstances connecting them. Fenchurch reveals that, moments before her hallucinations, she had an epiphany about how to make everything right, but then blacked out. She has not been able to recall the substance of the epiphany. Eventually discovering that Fenchurch's feet do not touch the ground, Arthur teaches her how to fly. They have sex in the skies over London.",
  };

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
        <Center paddingBottom={"25px"} paddingTop={"20px"} wordBreak={"normal"}>
          <TextPanel>
            Interested in finding a book or two to read? Well, Saseo is here to
            guide you! You can search for many book titles by genre. We have
            almost every book genre to choose from! All you need to do is choose
            a genre and how many books you would like suggested to you! You can
            also roll the dice and get a random book suggested to you!
          </TextPanel>
        </Center>
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
      {/* {BookCard(booktest)} */}
    </>
  );
}

export default FrontPageSection;
