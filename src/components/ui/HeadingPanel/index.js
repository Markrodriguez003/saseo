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
        backgroundColor={backgroundColor}
        color={color}
        fontSize={"5xl"}
        textAlign={"center"}
        padding={"25px"}
        display={"inline-block"}
        borderRadius={"25px"}
        marginBottom={"30px"}
        marginTop={"30px"}
        boxShadow={"xl"}
      >
        {children}
      </Heading>
    </>
  );
}

export default HeadingPanel;
