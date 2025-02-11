// This site uses cookies to help personalise content, tailor your experience and to keep you logged in if you register.
// By continuing to use this site, you are consenting to our use of cookies.

import { Button, Box, Container, Text, Link, HStack } from "@chakra-ui/react";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { useState } from "react";
import { useCookies } from "react-cookie";
import "./CookiesDisclaimer.design.css";

//? NOTES
// ? https://clerk.com/blog/setting-and-using-cookies-in-react?utm_source=www.google.com&utm_medium=referral&utm_campaign=none

function CookiesDisclaimer() {
  const [acceptCookies, setAcceptCookies] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["cookies_denied"]);

  function setCookiesStatus(event) {
    removeCookie("cookies_accept", { path: "/" });
    event.preventDefault();
    setAcceptCookies(!acceptCookies);
    setCookie("cookies_accept", acceptCookies, { path: "/" });
  }

  return (
    <>
      <Box
        backgroundColor={"secondary"}
        w={"100%"}
        h={"80px"}
        // display={acceptCookies ? "block" : "none"}
        position={"fixed"}
        zIndex={10}
        className="cookies-prompt-container"
      >
        <HStack
          justifyContent={"flex-start"}
          alignContent={"flex-start"}
          gap={"30px"}
          paddingLeft={"15px"}
          paddingTop={"15px"}
        >
          <Box backgroundColor={"primary"} color={"white"} h={"100%"}>
            <p>
              <BsFillExclamationSquareFill size={"40px"} />
            </p>
          </Box>
          <Text color={"white"} w={"50%"}>
            This site uses cookies to help personalise content, tailor your
            experience and to keep you logged in if you register. By continuing
            to use this site, you are consenting to our use of cookies.
          </Text>
          <HStack gap={"10px"}>
            <Button
              backgroundColor={"primary"}
              color="white"
              onClick={setCookiesStatus}
            >
              Accept
            </Button>

            <Button>
              <Link href="cookies" target="_blank" rel="help">Learn More</Link>
            </Button>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}

export default CookiesDisclaimer;
