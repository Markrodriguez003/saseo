import { Center, VStack, Box, Text } from "@chakra-ui/react";

// COMPONENTS
import RegisterNewAccount from "../../RegisterNewAccount";

// ICONS
import { BsBookmarkPlusFill } from "react-icons/bs";
// LIBRARIES
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

function Registration() {
  return (
    <>
      <Center>
        {/* <Box m={"80px"} w={"60%"} border="4px solid teal" borderRadius={"xl"}> */}
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
            sm: "90%",
            md: "65%",
            lg: "60%",
            xl: "45%",
          }}
          border="4px solid teal"
          borderRadius={"xl"}
        >
          <VStack backgroundColor={"teal"} alignContent={"center"}>
            <BsBookmarkPlusFill
              color={"white"}
              size={"70px"}
              style={{ paddingTop: "15px" }}
            />
            <Text
              fontSize="4xl"
              margin={"auto"}
              color={"white"}
              textAlign={"center"}
              id="top-of-registration"
            >
              {" "}
              Create an account!{" "}
            </Text>
            <Text fontSize="sm" paddingBottom={"15px"} color={"white"}>
              Create an account to access all the features Saseo offers!
            </Text>
          </VStack>
          <VStack
            justifyContent={"center"}
            alignContent={"center"}
            padding={"30px"}
          >
            <RegisterNewAccount />
          </VStack>
        </Box>
      </Center>
    </>
  );
}

export default Registration;
