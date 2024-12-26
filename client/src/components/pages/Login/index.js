import { Center, VStack, Box, Text } from "@chakra-ui/react";

// COMPONENTS
import LogInForm from "../../LoginForm";

// ICONS
import { MdAccountCircle } from "react-icons/md";

// LIBRARIES

import confetti from "canvas-confetti";

function Login() {
  return (
    <>
      <Center>
        <Box
          m={{
            base: "50px",
            "2xs": "25px",
            xs: "25px",
            sm: "25px",
            md: "50px",
            lg: "50px",
            xl: "50px",
          }}
          w={{
            base: "50%",
            "2xs": "95%",
            xs: "90%",
            sm: "80%",
            md: "45%",
            lg: "45%",
            xl: "35%",
          }}
          border="4px solid teal"
          borderRadius={"xl"}
        >
          <VStack backgroundColor={"teal"} alignContent={"center"}>
            <MdAccountCircle
              color={"white"}
              size={"75px"}
              style={{ paddingTop: "15px" }}
            />
            <Text
              fontSize="4xl"
              margin={"auto"}
              color={"white"}
              textAlign={"center"}
              paddingBottom={"15px"}
            >
              {" "}
              Log in{" "}
            </Text>
            <Text fontSize="sm" color={"white"}>
              Log into your Saseo account here!
            </Text>
          </VStack>
          <VStack
            justifyContent={"center"}
            alignContent={"center"}
            padding={"30px"}
          >
            <LogInForm />
          </VStack>
        </Box>
      </Center>
    </>
  );
}

export default Login;
