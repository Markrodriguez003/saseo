// NOTES
// Cool font https://www.ransomizer.com/
// Instead of ransom text above perhaps halftone fonts --> https://www.sliderrevolution.com/resources/css-text-animation/ "Strokes, Shadows + Halftone Effects"
// HTML TO JSX generator https://transform.tools/html-to-jsx
// ? Texture used for bottom headers?
// https://codepen.io/hexagoncircle/pen/Exyewjv
// https://codepen.io/robdimarzo/pen/VqjvqR
// CHAKRA COMPONENTS
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  List,
  ListItem,
  ListIcon,
  Container,
  Button,
  Image,
  Badge,
  Divider,
  InputLeftElement,
  InputRightElement,
  FormControl,
  Input,
  InputGroup,
  Text,
  Center,
  VStack,
  position,
} from "@chakra-ui/react";
import { useState } from "react";

// EXTERNAL COMPONENTS

// ICONS
import { FaRocket } from "react-icons/fa";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { GiDrippingTube, GiTechnoHeart } from "react-icons/gi";

// IMAGES
import booksBackground from "../../../images/backgrounds/Abstract-2.jpg";
import techBackground from "../../../images/header/tech-cog-background.png";
import futureBackground from "../../../images/backgrounds/chemical-1674885_1282.png";
import cogTop from "../../../images/header/tech-cog-top.png";
import cogMiddle from "../../../images/header/tech-cog-middle.png";
import cogBottom from "../../../images/header/tech-cog-bottom.png";
import rightTestTube from "../../../images/header/right-test-tube.png";

import "./styles.css";

function About() {
  return (
    <>
      <div className="about-us-hero">
        {/**************************/}
        {/*//* HEADER */}
        {/* // ! MOVE THIS TO A COMPONENT --> UI */}
        {/* Download imgur textures */}
        {/**************************/}
        <Box w={"75%"} textAlign={"center"} className="about-header">
          <div id="ransomizer">
            <div className="rww">
              <div
                className="rr"
                style={{
                  backgroundColor: "#006847",
                  color: "#ceffef",
                  fontFamily:
                    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                  fontSize: "110%",
                  backgroundImage: "url(https://i.imgur.com/1wxqouY.png)",
                  backgroundPosition: "left top",
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  lineHeight: "125%",
                  margin: "0.1em",
                  padding: "0.2em",
                  verticalAlign: "0.1em",
                }}
              >
                W
              </div>
              <div
                style={{
                  backgroundColor: "#F9AA51",
                  color: "#000000",
                  fontFamily:
                    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                  fontSize: "100%",
                  fontWeight: "bold",
                  backgroundImage: "url(https://i.imgur.com/ruhP2kd.png)",
                  backgroundPosition: "center top",
                  fontStyle: "italic",
                  textTransform: "lowercase",
                  lineHeight: "75%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "-0.1em",
                }}
              >
                E
              </div>
            </div>{" "}
            <div className="rww">
              <div
                style={{
                  backgroundColor: "#0C8489",
                  color: "#fbffff",
                  fontFamily:
                    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                  fontSize: "90%",
                  backgroundImage: "url(https://i.imgur.com/ruhP2kd.png)",
                  backgroundPosition: "center top",
                  boxShadow: "-1px 1px 2px #333",
                  textTransform: "uppercase",
                  lineHeight: "75%",
                  textDecoration: "underline",
                  margin: "0.1em",
                  padding: "0.1em",
                  verticalAlign: "baseline",
                }}
              >
                H
              </div>
              <div
                className="rr"
                style={{
                  backgroundColor: "#0C8489",
                  color: "#fbffff",
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "110%",
                  backgroundImage: "url(https://i.imgur.com/IcV8Q3G.png)",
                  backgroundPosition: "center center",
                  boxShadow: "1px -1px 2px #333",
                  textTransform: "lowercase",
                  lineHeight: "100%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "-0.1em",
                }}
              >
                E
              </div>
              <div
                className="rl"
                style={{
                  backgroundColor: "#D2A567",
                  color: "#000000",
                  fontFamily: '"Impact", Charcoal, sans-serif',
                  fontSize: "90%",
                  fontWeight: "bolder",
                  backgroundImage: "url(https://i.imgur.com/pwrAKPo.png)",
                  backgroundPosition: "right bottom",
                  fontStyle: "italic",
                  boxShadow: "-1px -1px 2px #333",
                  textTransform: "uppercase",
                  lineHeight: "125%",
                  margin: "0.1em",
                  padding: "0.2em",
                  verticalAlign: "0.1em",
                }}
              >
                L
              </div>
              <div
                className="rr"
                style={{
                  backgroundColor: "#D2A567",
                  color: "#000000",
                  fontFamily: '"Verdana", Geneva, sans-serif',
                  fontSize: "90%",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  boxShadow: "1px 1px 2px #333",
                  textTransform: "uppercase",
                  lineHeight: "75%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "0.1em",
                }}
              >
                P
              </div>
            </div>{" "}
            <div className="rww">
              <div
                className="rr"
                style={{
                  backgroundColor: "#0C8489",
                  color: "#fbffff",
                  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
                  fontSize: "100%",
                  fontWeight: "bold",
                  backgroundImage: "url(https://i.imgur.com/1wxqouY.png)",
                  backgroundPosition: "center top",
                  boxShadow: "1px -1px 2px #333",
                  lineHeight: "75%",
                  margin: "0.1em",
                  padding: "0.1em",
                  verticalAlign: "-0.1em",
                }}
              >
                B
              </div>
              <div
                style={{
                  backgroundColor: "#803F1D",
                  color: "#ffffff",
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "90%",
                  textTransform: "uppercase",
                  lineHeight: "100%",
                  margin: "0.1em",
                  padding: "0.2em",
                  verticalAlign: "baseline",
                }}
              >
                U
              </div>
              <div
                className="rr"
                style={{
                  backgroundColor: "#803F1D",
                  color: "#ffffff",
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "110%",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  boxShadow: "1px -1px 2px #333",
                  textTransform: "lowercase",
                  lineHeight: "75%",
                  textDecoration: "underline",
                  margin: "0.1em",
                  padding: "0.1em",
                  verticalAlign: "-0.1em",
                }}
              >
                I
              </div>
              <div
                style={{
                  backgroundColor: "#F15770",
                  color: "#000000",
                  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
                  fontSize: "110%",
                  fontWeight: "bold",
                  backgroundImage: "url(https://i.imgur.com/ruhP2kd.png)",
                  backgroundPosition: "left top",
                  textTransform: "uppercase",
                  lineHeight: "125%",
                  margin: "0.1em",
                  padding: "0.1em",
                  verticalAlign: "baseline",
                }}
              >
                L
              </div>
              <div
                style={{
                  backgroundColor: "#CE1126",
                  color: "#ffffff",
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "90%",
                  fontWeight: "bold",
                  boxShadow: "1px 1px 2px #333",
                  lineHeight: "100%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "0.1em",
                }}
              >
                D
              </div>
            </div>{" "}
            <div className="rww">
              <div
                style={{
                  backgroundColor: "#F9AA51",
                  color: "#000000",
                  fontFamily: '"Impact", Charcoal, sans-serif',
                  fontSize: "100%",
                  fontWeight: "bold",
                  backgroundImage: "url(https://i.imgur.com/IcV8Q3G.png)",
                  backgroundPosition: "right bottom",
                  boxShadow: "-1px 1px 2px #333",
                  textTransform: "lowercase",
                  lineHeight: "75%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "-0.1em",
                }}
              >
                Y
              </div>
              <div
                className="rl"
                style={{
                  backgroundColor: "#F9AA51",
                  color: "#000000",
                  fontFamily: '"Verdana", Geneva, sans-serif',
                  fontSize: "100%",
                  fontWeight: "bold",
                  backgroundImage: "url(https://i.imgur.com/1wxqouY.png)",
                  backgroundPosition: "right bottom",
                  boxShadow: "-1px -1px 2px #333",
                  textTransform: "lowercase",
                  lineHeight: "100%",
                  margin: "0.1em",
                  padding: "0.1em",
                  verticalAlign: "baseline",
                }}
              >
                O
              </div>
              <div
                style={{
                  backgroundColor: "#CE1126",
                  color: "#ffffff",
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "90%",
                  fontWeight: "bolder",
                  backgroundImage: "url(https://i.imgur.com/pwrAKPo.png)",
                  backgroundPosition: "left center",
                  textTransform: "lowercase",
                  lineHeight: "75%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "0.1em",
                }}
              >
                U
              </div>
              <div
                className="rl"
                style={{
                  backgroundColor: "#CE1126",
                  color: "#ffffff",
                  fontFamily: '"Impact", Charcoal, sans-serif',
                  fontSize: "100%",
                  backgroundImage: "url(https://i.imgur.com/IcV8Q3G.png)",
                  backgroundPosition: "right top",
                  fontStyle: "italic",
                  boxShadow: "1px 1px 2px #333",
                  lineHeight: "100%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "-0.1em",
                }}
              >
                R
              </div>
            </div>{" "}
            <div className="rww">
              <div
                className="rl"
                style={{
                  backgroundColor: "#F9AA51",
                  color: "#000000",
                  fontFamily: '"Impact", Charcoal, sans-serif',
                  fontSize: "100%",
                  fontWeight: "bold",
                  backgroundImage: "url(https://i.imgur.com/1wxqouY.png)",
                  backgroundPosition: "center bottom",
                  fontStyle: "italic",
                  lineHeight: "75%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "0.1em",
                }}
              >
                L
              </div>
              <div
                style={{
                  backgroundColor: "#006847",
                  color: "#ceffef",
                  fontFamily:
                    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                  fontSize: "110%",
                  backgroundImage: "url(https://i.imgur.com/1wxqouY.png)",
                  backgroundPosition: "right center",
                  boxShadow: "1px 1px 2px #333",
                  textTransform: "lowercase",
                  lineHeight: "125%",
                  margin: "0.1em",
                  padding: "0.2em",
                  verticalAlign: "0.1em",
                }}
              >
                I
              </div>
              <div
                className="rr"
                style={{
                  backgroundColor: "#F15770",
                  color: "#000000",
                  fontFamily: '"Arial", Helvetica, sans-serif',
                  fontSize: "110%",
                  backgroundImage: "url(https://i.imgur.com/1wxqouY.png)",
                  backgroundPosition: "left center",
                  fontStyle: "italic",
                  textTransform: "lowercase",
                  lineHeight: "125%",
                  margin: "0.1em",
                  padding: "0.1em",
                  verticalAlign: "0.1em",
                }}
              >
                B
              </div>
              <div
                style={{
                  backgroundColor: "#803F1D",
                  color: "#ffffff",
                  fontFamily: '"Comic Sans MS", cursive',
                  fontSize: "90%",
                  backgroundImage: "url(https://i.imgur.com/1wxqouY.png)",
                  backgroundPosition: "right center",
                  fontStyle: "italic",
                  boxShadow: "-1px -1px 2px #333",
                  textTransform: "uppercase",
                  lineHeight: "75%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "-0.1em",
                }}
              >
                R
              </div>
              <div
                style={{
                  backgroundColor: "#D2A567",
                  color: "#000000",
                  fontFamily: '"Georgia", serif',
                  fontSize: "90%",
                  textTransform: "lowercase",
                  lineHeight: "125%",
                  margin: "0.1em",
                  padding: "0.3em",
                  verticalAlign: "-0.1em",
                }}
              >
                A
              </div>
              <div
                className="rr"
                style={{
                  backgroundColor: "#F8C83C",
                  color: "#000000",
                  fontFamily: '"Tahoma", Geneva, sans-serif',
                  fontSize: "100%",
                  backgroundImage: "url(https://i.imgur.com/pwrAKPo.png)",
                  backgroundPosition: "right top",
                  fontStyle: "italic",
                  boxShadow: "1px 1px 2px #333",
                  textTransform: "lowercase",
                  lineHeight: "125%",
                  textDecoration: "underline",
                  margin: "0.1em",
                  padding: "0.2em",
                  verticalAlign: "0.1em",
                }}
              >
                R
              </div>
              <div
                className="rr"
                style={{
                  backgroundColor: "#0C8489",
                  color: "#fbffff",
                  fontFamily: '"Tahoma", Geneva, sans-serif',
                  fontSize: "100%",
                  fontStyle: "italic",
                  textTransform: "lowercase",
                  lineHeight: "75%",
                  margin: "0.1em",
                  padding: "0.2em",
                  verticalAlign: "baseline",
                }}
              >
                Y
              </div>
            </div>
          </div>
        </Box>

        {/**************************/}
        {/**************************/}

        <Container maxW="container.md" color="#262626" className="about-header">
          <Text
            textAlign={"center"}
            // fontSize={{ base: "xl", sm: "sm", md: "xl", lg: "xl" }}
            fontSize="xl"
            color={"white"}
            marginTop={"50px"}
            paddingBottom={"50px"}
            letterSpacing={"1px"}
          >
            Saseo was created to solve a problem that should not exist in
            today's age, finding the perfect book to read! Saseo's purpose is to
            help readers find any book, from any genre by suggesting from a book
            repo! You can also use Saseo to email book suggestions to anyone! We
            are here to help build libraries everywhere!
          </Text>
        </Container>

        {/* <a href="#about">
          <Text className="page-arrow-down" color={"white"} fontWeight={"bold"}>
            Technologies Used <PiArrowBendRightDownBold />
          </Text>
        </a> */}
      </div>
      <br />
      <br />
      <br />
      {/* // ! Replace <Box> with <Flex> */}
      <Box
        w={"100%"}
        justify={"center"}
        align={"start"}
        paddingTop={"50px"}
        id="about"
        display={"flex"}
        gap={1}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        marginLeft={"auto"}
        marginRight={"auto"}
      >
        <Box w={"400px"} h={"400px"} position={"relative"}>
          <Image
            src={techBackground}
            position={"absolute"}
            borderRadius={"3xl"}
          ></Image>

          <Image
            src={cogTop}
            position={"absolute"}
            className="top-cog"
            width={"135px"}
            height={"auto"}
            top={"108px"}
            left={"90px"}
          ></Image>
          <Image
            src={cogMiddle}
            position={"absolute"}
            className="other-cog"
            width={"95px"}
            height={"auto"}
            top={"150px"}
            left={"225px"}
          ></Image>
          <Image
            src={cogBottom}
            position={"absolute"}
            className="top-cog"
            width={"60px"}
            height={"auto"}
            top={"225px"}
            left={"182px"}
          ></Image>
        </Box>

        <Container>
          <Heading
            color={"darkcyan"}
            padding={"10px"}
            borderRadius={"full"}
            marginTop={5}
          >
            TECHNOLOGIES USED TO BUILD THIS SITE
          </Heading>
          <Divider borderColor={"darkcyan"} />
          <List
            spacing={3}
            alignContent={"center"}
            fontSize={"md"}
            paddingTop={"10px"}
          >
            <ListItem>
              <ListIcon as={FaRocket} color="darkcyan" />
              <a
                href="https://react.dev/"
                className="about-anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>ReactJS </strong> - We used ReactJS for the Front end
              </a>
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="darkcyan" />
              <a
                href="https://vitejs.dev/"
                className="about-anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Vite </strong> - Frontend Development and build{" "}
              </a>
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="darkcyan" />
              <a
                href="https://www.emailjs.com/"
                className="about-anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>EmailJS </strong> - Email Library{" "}
              </a>
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="darkcyan" />
              <a
                href="https://openlibrary.org/developers/api"
                className="about-anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>OpenLibrary API </strong> - Library API{" "}
              </a>
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="darkcyan" />
              <a
                href="https://axios-http.com/"
                className="about-anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> Axios </strong>- Library used to make API calls{" "}
              </a>
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="darkcyan" />
              <a
                href="https://chakra-ui.com/"
                className="about-anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Chakra UI </strong> - CSS Library{" "}
              </a>
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="darkcyan" />
              <a
                href="https://react-icons.github.io/react-icons/"
                className="about-anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>React-Icons </strong>- Site Icons{" "}
              </a>
            </ListItem>
          </List>
        </Container>
      </Box>

      <br />
      <br />

      <Box
        backgroundColor={"darkcyan"}
        w="65%"
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        margin={"auto"}
        padding={"40px"}
        borderRadius={"10px"}
      >
        <VStack>
          <GiTechnoHeart color="white" fontSize={"65px"} className="heart" />
          <Text
            fontSize="xl"
            color={"white"}
            letterSpacing={"1px"}
            textAlign={"center"}
          >
            This site would not exist without the help from all of the above
            technologies! For more information please visit their site by
            clicking the link above and support them!
          </Text>
        </VStack>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Box
        w={"100%"}
        justify={"center"}
        align={"start"}
        paddingTop={"50px"}
        id="about"
        display={"flex"}
        flexDirection={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        gap={4}
      >
        <Box>
          <Heading color={"darkcyan"} borderRadius={"full"} marginTop={5}>
            FUTURE PLANS
          </Heading>
          <Divider borderColor={"darkcyan"} />
          <List
            spacing={3}
            alignContent={"start"}
            fontSize={"md"}
            paddingTop={"10px"}
          >
            <ListItem>
              <ListIcon as={GiDrippingTube} color="darkcyan" />
              Personal account for tracking of favorited books
            </ListItem>
            <ListItem>
              <ListIcon as={GiDrippingTube} color="darkcyan" />
              Customizable art assets (bookmarks,ect)
            </ListItem>
            <ListItem>
              <ListIcon as={GiDrippingTube} color="darkcyan" />
              Expand the search to include magazines & audiobooks
            </ListItem>
            <ListItem>
              <ListIcon as={GiDrippingTube} color="darkcyan" />
              Include better book search options
            </ListItem>
            <ListItem>
              <ListIcon as={GiDrippingTube} color="darkcyan" />
              Include more helpful/reference links to books
            </ListItem>
          </List>
        </Box>

        <Box w={"400px"} h={"400px"} position={"relative"}>
          <Image src={futureBackground} borderRadius={"3xl"}></Image>
          <Image
            src={rightTestTube}
            position={"absolute"}
            className={"right-test-tube"}
          ></Image>
          <div position={"absolute"} className={"left-test-tube"}></div>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default About;

/*


        // BUBBLE ANIMATION 
        <div class="container-bubble">
          <Image src={booksBackground} w={"28vw"} className="shape"></Image>
        </div>

 <Heading
              color={"darkcyan"}
              textAlign={"center"}
              size={"2xl"}
              p={"5px"}
            >
              <span style={{ color: "#4d2f00" }}>Find your </span> Perfect Book.
            </Heading>




<Center backgroundColor={"#4d2f00"}>
          <Heading color={"white"} textAlign={"center"} size={"2xl"} p={"5px"}>
            About
          </Heading>  
          <Heading
            color={"white"}
            backgroundColor={"darkcyan"}
            textAlign={"center"}
            size={"2xl"}
            p={"5px"}
          >
            About us
          </Heading>
        </Center>
        <Text textAlign={"center"} color={"white"} fontSize={"18px"}>
          Saseo was created to solve a problem that should not exist, finding
          the perfect book to read! So Saseo's purpose is to help readers find
          any book, from any genre by suggesting from a book repo! We utilized
          OpenLibrary API to help gather potential book suggestions.
        </Text>







            
*/
