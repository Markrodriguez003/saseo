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
    <Box
      bg={"darkcyan"}
      color={"white"}
      pb={6}
      mt={"lg"}
      position={"relative"}
      left={0}
      bottom={0}
      w="100%"
    >
      <Container
        as={Stack}
        w="100%"
        // py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        // justify={{ base: "start", md: "start" }}
        align={{ base: "start", md: "center" }}
      >
        <Heading size={"xl"}>SASEO</Heading>
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Random Book</Link>
          <Link href={"#"}>Search a Book</Link>
          <Link href={"#"}>Search ISBN</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Sources</Link>
        </Stack>
        <Text>© 2023 Saseo. All rights reserved</Text>
      </Container>
    </Box>
  );
}

export default sFooter;
