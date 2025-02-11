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

// CSS
import "./WordHighlighter.design";

function WordHighlighter({passage, highlightColor, color, size, letterSpacing}) {
  let examplePassage =
    `Interested in finding a book or two to read? Well, Saseo is here 
    to guide you! You can search for many book titles by genre. We have 
    almost every book genre to choose from! All you need to do is choose 
    a genre and how many books you would like to see what we suggested! `;
  let passageWordArray = passage.split(" ");

  return (
    <>
      {passageWordArray.map((word) => {
        return (
          <>
            <Text
              color={color}
              fontSize={size}
              letterSpacing={letterSpacing}
              className="highlight-text"
            >
              {word}
            </Text>
            <span>&nbsp; </span>
          </>
        );
      })}
    </>
  );
}

export default WordHighlighter;
