// NOTES
// Cool font https://www.ransomizer.com/
// Instead of ransom text above perhaps halftone fonts --> https://www.sliderrevolution.com/resources/css-text-animation/ "Strokes, Shadows + Halftone Effects"
// HTML TO JSX generator https://transform.tools/html-to-jsx
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
  position,
} from "@chakra-ui/react";
import { useState } from "react";

// EXTERNAL COMPONENTS

// ICONS
import { CiFaceSmile } from "react-icons/ci";
import { FaRocket } from "react-icons/fa";
import { PiArrowBendRightDownBold } from "react-icons/pi";

// IMAGES
import booksBackground from "../../../images/backgrounds/Abstract-2.jpg";

import "./styles.css";

function About() {
  return (
    <>
      <div className="about-us-hero">
        {/* <h1>"WE HELP BUILD LIBRARIES"</h1> */}

        {/**************************/}
        {/* HEADER */}
        {/* // ! MOVE THIS TO A COMPONENT --> UI */}
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

        {/* <Heading
          color={"white"}
          border="2px"
          padding={"10px"}
          borderRadius={"full"}
          borderColor="white"
          marginTop={5}
        >
          ABOUT US
        </Heading> */}
        <Container maxW="container.md" color="#262626" className="about-header">
          <Text
            textAlign={"center"}
            fontSize="xl"
            color={"white"}
            marginTop={"50px"}
            letterSpacing={"1px"}
          >
            Saseo was created to solve a problem that should not exist in
            today's age, finding the perfect book to read! Saseo's purpose is to
            help readers find any book, from any genre by suggesting from a book
            repo! You can also use Saseo to email book suggestions to anyone! We
            are here to help build libraries everywhere!
          </Text>
        </Container>
        <a href="#about">
          <span className="page-arrow-down">
            Technologies Used <PiArrowBendRightDownBold />
          </span>
        </a>
      </div>

      <HStack
        w={"100%"}
        justify={"center"}
        align={"start"}
        paddingTop={"50px"}
        id="about"
 
      >
        <Image src={booksBackground} w={"28vw"}></Image>
        <Container>
          <Heading
            color={"darkcyan"}
            // border="2px"
            padding={"10px"}
            borderRadius={"full"}
            // borderColor="darkcyan"
            marginTop={5}
          >
            <FaRocket />
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
              <ListIcon as={CiFaceSmile} color="darkcyan" />
              ReactJS - We used ReactJS for the Front end
            </ListItem>
            <ListItem>
              <ListIcon as={CiFaceSmile} color="darkcyan" />
              EmailJS - Email Library
            </ListItem>
            <ListItem>
              <ListIcon as={CiFaceSmile} color="darkcyan" />
              Axios - Library used to make API calls
            </ListItem>
            <ListItem>
              <ListIcon as={CiFaceSmile} color="darkcyan" />
              Chakra UI - CSS Library
            </ListItem>
            <ListItem>
              <ListIcon as={CiFaceSmile} color="darkcyan" />
              React-Icons - Site Icons
            </ListItem>
          </List>
        </Container>
      </HStack>

      <br />
      <br />
      <br />
    </>
  );
}

export default About;

/*

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
