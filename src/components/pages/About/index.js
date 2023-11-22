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
  List,
  ListItem,
  ListIcon,
  Container,
  Image,
  Divider,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

// EXTERNAL COMPONENTS
import RandomLetterHeader from "components/ui/RandomLetterHeader";

// ICONS
import { FaRocket, FaRegGem, FaNpm } from "react-icons/fa";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { GiTechnoHeart } from "react-icons/gi";
import { BsClipboard2CheckFill, BsConeStriped } from "react-icons/bs";
import { SiPnpm } from "react-icons/si";

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
        <RandomLetterHeader />
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
      </div>
      <br />
      <Flex
        justifyContent={"center"}
        align={"center"}
        paddingTop={"50px"}
        gap={5}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        {/* COG IMAGE */}
        <Box w={"350px"} h={"350px"} position={"relative"}>
          <Image
            src={techBackground}
            position={"absolute"}
            borderRadius={"3xl"}
          ></Image>

          <Image
            src={cogTop}
            position={"absolute"}
            className="top-cog"
            width={"125px"}
            height={"auto"}
            top={"90px"}
            left={"78px"}
          ></Image>
          <Image
            src={cogMiddle}
            position={"absolute"}
            className="other-cog"
            width={"75px"}
            height={"auto"}
            top={"150px"}
            left={"200px"}
          ></Image>
          <Image
            src={cogBottom}
            position={"absolute"}
            className="top-cog"
            width={"60px"}
            height={"auto"}
            top={"205px"}
            left={"150px"}
          ></Image>
        </Box>
        {/* TEXT */}
        <Flex flexDirection={"column"} flexBasis={"auto"}>
          <Heading
            color={"darkcyan"}
            borderRadius={"full"}
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
            }}
            marginLeft={{
              base: "30px",
              sm: "30px",
              md: "50px",
              lg: "0px",
            }}
            marginRight={{
              base: "30px",
              sm: "30px",
              md: "50px",
              lg: "0px",
            }}
            maxW="28rem"
          >
            TECHNOLOGIES USED TO BUILD THIS SITE
          </Heading>
          <Divider borderColor={"darkcyan"} />
          <List
            spacing={3}
            fontSize={"md"}
            paddingTop={"10px"}
            textAlign={{
              base: "center",
              sm: "center",
              md: "start",
              lg: "start",
            }}
            alignContent={"center"}
            marginLeft={{
              base: "0px",
              sm: "auto",
              md: "auto",
              lg: "0px",
            }}
            marginRight={{
              base: "0px",
              sm: "auto",
              md: "auto",
              lg: "0px",
            }}
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
                <strong>Axios </strong>- Library used to make API calls{" "}
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
          {/* //TODO: Add separate NPM packages here (confetti + arrows) in a simple list */}
        </Flex>
      </Flex>
      <br />
      <br />
      {/* TECH LOVE */}

      {/* *********** */}
      {/* NPM PACKAGES */}
      {/* *********** */}
      <Box
        backgroundColor={"tertiary"}
        w={{ base: "72%", sm: "72%", md: "75%", lg: "54%" }}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        margin={"auto"}
        padding={"40px"}
        borderRadius={"10px"}
        marginBottom={"20px"}
      >
        <VStack w={"100%"}>
          <Heading
            color={"white"}
            borderRadius={"full"}
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
            }}
            marginLeft={{
              base: "30px",
              sm: "30px",
              md: "50px",
              lg: "0px",
            }}
            marginRight={{
              base: "30px",
              sm: "30px",
              md: "50px",
              lg: "0px",
            }}
            maxW="28rem"
          >
            ADDITIONAL LIBRARIES
            {/* //! add this contribution website --> list of authors https://www.scribblewhatever.com/list-of-all-authors-their-first-name/#a */}
          </Heading>

          <HStack gap={"20px"}>
            <FaNpm size={"200px"} color="white" />
            <Text
              backgroundColor={"transparent"}
              fontSize="xl"
              color={"white"}
              letterSpacing={"1px"}
              textAlign={"center"}
            >
              <List
                spacing={3}
                fontSize={"md"}
                paddingTop={"10px"}
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                }}
                alignContent={"center"}
                marginLeft={{
                  base: "0px",
                  sm: "auto",
                  md: "auto",
                  lg: "0px",
                }}
                marginRight={{
                  base: "0px",
                  sm: "auto",
                  md: "auto",
                  lg: "0px",
                }}
                p={"20px"}
              >
                <ListItem color={"text"}>
                  <ListIcon as={SiPnpm} color="text" />
                  <a
                    href="https://react.dev/"
                    className="about-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>React-Reveal </strong>
                  </a>
                </ListItem>
                <ListItem color={"text"}>
                  <ListIcon as={SiPnpm} color="text" />
                  <a
                    href="https://react.dev/"
                    className="about-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>React-XArrows </strong>
                  </a>
                </ListItem>
                <ListItem color={"text"}>
                  <ListIcon as={SiPnpm} color="text" />
                  <a
                    href="https://react.dev/"
                    className="about-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Formik </strong>
                  </a>
                </ListItem>
                <ListItem color={"text"}>
                  <ListIcon as={SiPnpm} color="text" />
                  <a
                    href="https://react.dev/"
                    className="about-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Canvas Confetti </strong>
                  </a>
                </ListItem>
                <ListItem color={"text"}>
                  <ListIcon as={SiPnpm} color="text" />
                  <a
                    href="https://react.dev/"
                    className="about-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Slick Slider </strong>
                  </a>
                </ListItem>
                <ListItem color={"text"}>
                  <ListIcon as={SiPnpm} color="text" />
                  <a
                    href="https://react.dev/"
                    className="about-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>React-Cookies</strong>
                  </a>
                </ListItem>
                <ListItem color={"text"}>
                  <ListIcon as={SiPnpm} color="text" />
                  <a
                    href="https://react.dev/"
                    className="about-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Framer Motion </strong>
                  </a>
                </ListItem>
                <ListItem color={"text"}>
                  <ListIcon as={SiPnpm} color="text" />
                  <a
                    href="https://react.dev/"
                    className="about-anchor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Yup</strong>
                  </a>
                </ListItem>
              </List>
            </Text>
          </HStack>
        </VStack>
      </Box>
      <br />
      <Box
        backgroundColor={"primary"}
        w={{ base: "72%", sm: "72%", md: "75%", lg: "54%" }}
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
          <Text
            fontSize="xl"
            color={"white"}
            letterSpacing={"1px"}
            textAlign={"center"}
            textDecoration={"underline"}
          >
            <a
              href="https://github.com/Markrodriguez003/saseo"
              className="about-anchor"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              {" "}
              Check out the github repo for this site!{" "}
            </a>
          </Text>
        </VStack>
      </Box>
      <Flex
        justifyContent={"center"}
        align={"center"}
        paddingTop={"50px"}
        gap={5}
        flexDirection={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
      >
        {/* TEXT */}
        <Flex flexDirection={"column"} flexBasis={"auto"}>
          <Heading
            color={"darkcyan"}
            borderRadius={"full"}
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
            }}
            marginLeft={{
              base: "30px",
              sm: "30px",
              md: "50px",
              lg: "0px",
            }}
            marginRight={{
              base: "30px",
              sm: "30px",
              md: "50px",
              lg: "0px",
            }}
            maxW="28rem"
          >
            FUTURE PLANS
          </Heading>
          <Divider borderColor={"darkcyan"} />
          <List
            spacing={3}
            fontSize={"md"}
            paddingTop={"10px"}
            textAlign={{
              base: "center",
              sm: "center",
              md: "start",
              lg: "start",
            }}
            alignContent={"center"}
            marginLeft={{
              base: "0px",
              sm: "auto",
              md: "auto",
              lg: "0px",
            }}
            marginRight={{
              base: "0px",
              sm: "auto",
              md: "auto",
              lg: "0px",
            }}
          >
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Personal account for tracking of favorited books
            </ListItem>
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Customizable art assets (bookmarks,ect)
            </ListItem>
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Expand the search to include magazines & audiobooks
            </ListItem>
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Include better book search options
            </ListItem>
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Offer more helpful/reference links to books
            </ListItem>
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Display first paragraph of book
            </ListItem>
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Add AI search assistance.
            </ListItem>
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Improve site accessibility for screen readers and design.
            </ListItem>
            <ListItem>
              <ListIcon as={BsClipboard2CheckFill} color="darkcyan" />
              Create additional tools like genre quiz and AI chatbot
            </ListItem>
          </List>
        </Flex>

        <Box w={"350px"} h={"350px"} position={"relative"}>
          <Image src={futureBackground} borderRadius={"3xl"}></Image>
          <Image
            src={rightTestTube}
            position={"absolute"}
            className={"right-test-tube"}
          ></Image>
          <div position={"absolute"} className={"left-test-tube"}></div>
        </Box>
      </Flex>
      <br />
      <br />
      {/* FUTURE LOVE */}
      <Box
        // backgroundColor={"#4d2f00"}
        backgroundColor={"#F37B71"}
        w={{ base: "72%", sm: "72%", md: "75%", lg: "54%" }}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        margin={"auto"}
        padding={"40px"}
        borderRadius={"10px"}
      >
        <VStack>
          <BsConeStriped
            color="white"
            fontSize={"65px"}
            className="traffic-cone"
          />
          <Text
            fontSize="xl"
            color={"white"}
            letterSpacing={"1px"}
            textAlign={"center"}
          >
            This site will be receiving future updates, so bookmark this page
            and please stay tuned for more features!
          </Text>
        </VStack>
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
