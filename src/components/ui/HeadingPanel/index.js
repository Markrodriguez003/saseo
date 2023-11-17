import { Heading } from "@chakra-ui/react";

function HeadingPanel({
  children,
  color = "white",
  backgroundColor = "primary",
}) {
  return (
    <>
      <Heading
        as={"h1"}
        position={"relative"}
        backgroundColor={backgroundColor}
        color={color}
        fontSize={"3xl"}
        textAlign={"center"}
        padding={"25px"}
        display={"inline-block"}
        borderRadius={"25px"}
        marginBottom={"30px"}
        marginTop={"30px"}
        boxShadow={"xl"}
        fontWeight={"bold"}
        letterSpacing={"1.2px"}
      >
        {children}
      </Heading>
    </>
  );
}

export default HeadingPanel;
