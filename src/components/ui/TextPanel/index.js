import { Button, Text, Flex, Box, Heading } from "@chakra-ui/react";

function TextPanel({children, backgroundC = "primary"}) {
  return (
    <>
      <Box
        justifyContent={"center"}
        alignContent={"center"}
        w={{
          base: "88%",
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
          {children}
        </Text>
      </Box>
    </>
  );
}

export default TextPanel;
