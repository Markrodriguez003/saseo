import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

function sFooter() {
  return (
    <Container
      position={"relative"}
      height={"100vh"}
      w="100vw"
      maxWidth={"100%"}
    >
      <Box
        bg={"darkcyan"}
        color={"white"}
        pb={6}
        mt={12}
        position={"absolute"}
        left={0}
        bottom={0}
        w="100%"
      >
        <Container
          as={Stack}
          w="100%"
          // py={4}
          direction={{ base: "column", md: "row" }}
          spacing={8}
          mb={8}
          mt={4}
          justify={{ base: "start", md: "space-between" }}
          // justify={{ base: "start", md: "start" }}
          align={{ base: "start", md: "center" }}
        >
          <Stack direction={"row"} spacing={6} alignItems={"center"}>
            <Heading size={"xl"}>SASEO</Heading>
            <Link href={"#"} fontSize={"xl"}>
              Home
            </Link>
            <Link href={"#"} fontSize={"xl"}>
              About
            </Link>
            <Link href={"#"} fontSize={"xl"}>
              Contact
            </Link>
            <Link href={"#"} fontSize={"xl"}>
              FAQ
            </Link>
          </Stack>
        </Container>
        <Text align={"center"}>© 2023 Saseo. All rights reserved</Text>
      </Box>
    </Container>
  );
}

export default sFooter;
