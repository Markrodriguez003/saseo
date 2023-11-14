// ? NOTES
// https://codepen.io/lmoroz/pen/jLMLRE
// https://codepen.io/mikedevelops/pen/vOavQB

// CHAKRA COMPONENTS
import {
  Box,
  Flex,
  Heading,
  Stack,
  Container,
  Button,
  Image,
  Center,
  Hide,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

// EXTERNAL COMPONENTS
import BookmarkHeader from "components/ui/BookmarkHeader";
import PageDesignWaves from "components/ui/PageDesignWaves";

// IMAGES
import bgHero from "images/backgrounds/Hero-Book.png";
import bgHero2 from "images/backgrounds/Hero-2.png";
import bgHero3 from "images/backgrounds/icon-347230_1920.png";
import "./styles.css";
// import bgHeroB from "images/backgrounds/book-5831278_1920.jpg";
import splashBook from "images/hero/hero-half-book.png";

// ICONS
// import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiSearch, BiBookReader } from "react-icons/bi";
// import { AiOutlineBook } from "react-icons/ai";
import { color } from "framer-motion";

function FrontPageHero() {
  const [placeholderText, setPlaceholderText] = useState("");

  function StopAnchorPropagration(event) {
    event.stopPropagation();
    // event.preventDefault();
  }
  return (
    <>
      <Container maxW={"100%"} p={0} m={0} paddingTop={"45px"}>
        <Center position={"relative"} className="header-box">
          <Stack>
            {/* TOP HEADER TEXT */}
            <Heading
              color={"darkcyan"}
              textAlign={"center"}
              size={"2xl"}
              p={"5px"}
            >
              <span style={{ color: "#4d2f00" }}>Find your </span> Perfect Book.
            </Heading>

            {/* BOTTOM HALF OF HEADER TEXT */}
            <Flex
              direction={{
                base: "column-reverse",
                lg: "row",
                md: "column-reverse",
                sm: "column-reverse",
              }}
              justify={"center"}
              align={"center"}
              mb={12}
              position={"relative"}
            >
              <Box w={{ base: "60%", lg: "45%", md: "60%", sm: "60%" }}>
                <Heading
                  color={"darkcyan"}
                  mb={4}
                  textAlign={{
                    base: "center",
                    lg: "left",
                    md: "center",
                    sm: "center",
                  }}
                >
                  <Hide above="992.1px">
                    <span
                      style={{ paddingBottom: "10px", fontWeight: "bold" }}
                      textAlign="center"
                    >
                      ↑
                    </span>
                    <br />
                  </Hide>
                  Looking for this has never been easier{" "}
                  <Hide below="992.1px">
                    {" "}
                    <span>→</span>
                  </Hide>
                </Heading>
                <Stack
                  direction="row"
                  spacing={4}
                  align="center"
                  justify={{
                    base: "flex-start",
                    lg: "flex-start",
                    md: "center",
                    sm: "center",
                  }}
                >
                  <a href="#genre" onClick={StopAnchorPropagration}>
                    <Button colorScheme="teal" variant="solid">
                      More Info!
                    </Button>
                  </a>
                  <Button colorScheme="teal" variant="outline">
                    <Link to="about">About</Link>
                  </Button>
                </Stack>
              </Box>

              <Image src={bgHero} maxW={"10rem"} mb={8} mt={6} />
            </Flex>
          </Stack>
        </Center>

        {/* BOTTOM OPEN BOOK (TOP PORTION) IMAGE */}
        <Box className="openBookImg">
          <Image
            src={splashBook}
            alt="Open Book image"
            h={"60vh"}
            w={"100vw"}
            m={0}
            p={0}
          />
        </Box>
      </Container>
    </>
  );
}

export default FrontPageHero;

// UNUSED CODE
