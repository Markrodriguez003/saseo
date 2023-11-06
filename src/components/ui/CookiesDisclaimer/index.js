// This site uses cookies to help personalise content, tailor your experience and to keep you logged in if you register.
// By continuing to use this site, you are consenting to our use of cookies.

import { Button, Box, Container, Text, Link, HStack } from "@chakra-ui/react";
import { BsFillExclamationSquareFill } from "react-icons/bs";

function CookiesDisclaimer() {
  return (
    <>
      <Box backgroundColor={"secondary"} w={"100%"}>
        <HStack
          justifyContent={"flex-start"}
          alignContent={"flex-start"}
          gap={"30px"}
        >
          <Box backgroundColor={"primary"} color={"white"} h={"100%"}>
            <p>
              <BsFillExclamationSquareFill size={"40px"} />
            </p>
          </Box>
          <Text color={"white"} w={"60%"}>
            This site uses cookies to help personalise content, tailor your
            experience and to keep you logged in if you register. By continuing
            to use this site, you are consenting to our use of cookies.
          </Text>
          <HStack gap={"10px"}>
            <Button backgroundColor={"primary"} color="white">
              Accept
            </Button>

            <Button>
              <Link href="cookies">Learn More</Link>
            </Button>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}

export default CookiesDisclaimer;
