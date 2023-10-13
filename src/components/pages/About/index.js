// NOTES

// CHAKRA COMPONENTS
import {
  Box,
  Flex,
  Heading,
  Stack,
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

// IMAGES

import "./styles.css";

function About() {
  return (
    <>
      <Center>
        <Heading color={"darkcyan"} textAlign={"center"} size={"2xl"} p={"5px"}>
          About
        </Heading>
        <Heading color={"white"} backgroundColor={"darkcyan"} textAlign={"center"} size={"2xl"} p={"5px"}>
        Saseo
        </Heading>
      </Center>
      <Text textAlign={"center"} fontSize={"18px"}>
        Saseo was created to solve a problem that should not exist, finding the
        perfect book to read! So Saseo's purpose is to help readers find any book, from any genre by suggesting 
        from a book repo! We utilized OpenLibrary API to help gather potential book suggestions.
      </Text>
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

*/
