import { Box, Flex, Heading, Stack, Button, Image } from "@chakra-ui/react";
// import "./styles.css";
import FrontPageHero from "../../FrontPageHero";
import WordRollerAnimation from "../../ui/WordRollerAnimation"
import FlipBook from "../../FlipBook";
import BookLoader from "../../ui/BookLoader/BookLoader";

function FrontPage() {
  return (
    <>
      <FrontPageHero />
      <WordRollerAnimation />
    </>
  );
}

export default FrontPage;
