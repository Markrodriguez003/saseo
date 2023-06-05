import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

export default function SmallWithNavigation() {
  return (
    <Box
      bg={"darkcyan"}
      color={"white"}
      pb={6}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        // py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        // justify={{ base: "center", md: "space-between" }}
        justify={{ base: "start", md: "start" }}
        align={{ base: "start", md: "center" }}
      >
        <Heading size={"lg"}>SASEO</Heading>
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Sources</Link>
        </Stack>
        <Text>© 2023 Saseo. All rights reserved</Text>
      </Container>
    </Box>
  );
}
