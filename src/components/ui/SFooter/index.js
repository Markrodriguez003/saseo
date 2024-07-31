import {
  Button,
  Text,
  Flex,
  Box,
  Input,
  FormLabel,
  Heading,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

import BookmarkMobile from "../../../images/header/ribbon-1202755_1920 - Mobile.png";
import BookShelfAnimation from "../BookShelfAnimation";
import NewsletterForm from "components/NewsletterForm";
// import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";

 

export function SFooter() {
  return (
    <>
      {/* <Slide bottom opposite cascade> */}
      <Box>
        <Box maxW={"full"} p={"0px"} m={"0px"}>
          <Flex
            flexDirection={{
              base: "row",
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
              "2xs": "column",
            }}
            alignContent={"center"}
            align={"center"}
            justifyContent={"flex-start"}
            backgroundColor={"darkcyan"}
            gap={"18px"}
            p={"0px"}
            m={"0px"}
            flexWrap={"wrap"}
          >
            <Link to={"/"} rel="bookmark Shortcut ">
              <Box>
                <Box
                  backgroundImage={BookmarkMobile}
                  w={{
                    base: "350px",
                    lg: "350px",
                    md: "350px",
                    sm: "350px",
                    xs: "250px",
                    "2xs": "250px",
                  }}
                  h={{
                    base: "125px",
                    lg: "125px",
                    md: "125px",
                    sm: "125px",
                    xs: "90px",
                    "2xs": "90px",
                  }}
                  backgroundRepeat={"no-repeat"}
                  backgroundSize={"contain"}
                  filter={"hue-rotate(180deg)"}
                  marginBottom={{
                    base: "5px",
                    lg: "5px",
                    md: "5px",
                    sm: "5px",
                    xs: "0px",
                    "2xs": "0px",
                  }}
                >
                  <Heading
                    fontFamily={"brand-font"}
                    fontWeight={"bold"}
                    color={"white"}
                    fontSize={{
                      base: "7xl",
                      lg: "7xl",
                      md: "7xl",
                      sm: "7xl",
                      xs: "50px",
                      "2xs": "50px",
                    }}
                    textAlign={"center"}
                    marginTop="35px"
                    marginRight="5px"
                    paddingRight={{
                      base: "52px",
                      lg: "52px",
                      md: "52px",
                      sm: "52px",
                      xs: "38px",
                      "2xs": "38px",
                    }}
                    paddingTop={{
                      base: "20px",
                      lg: "20px",
                      md: "20px",
                      sm: "20px",
                      xs: "15px",
                      "2xs": "15px",
                    }}
                  >
                    {" "}
                    SASEO
                  </Heading>
                </Box>
              </Box>
            </Link>
            <Link to={"suggest"}  rel="search">
              <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
                Suggest Books
              </Text>
            </Link>
            <Link to="random" rel="search">
              <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
                Random pick
              </Text>
            </Link>
            <Link to="isbn" rel="search">
              <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
                ISBN Search
              </Text>
            </Link>
            <Box flexGrow={1}>
              <Link to="about" rel="search">
                <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
                  About
                </Text>
              </Link>
            </Box>

            <Box
              justifySelf={{
                base: "flex-end",
                lg: "flex-end",
                md: "flex-end",
                sm: "center",
                xs: "center",
                "2xs": "center",
              }}
              paddingRight={{
                base: "row",
                lg: "20px",
                md: "20px",
                sm: "0px",
                xs: "0px",
                "2xs": "0px",
              }}
            >
              <NewsletterForm />
            </Box>
          </Flex>
        </Box>

        {/* ********************* */}
        {/* Copyright Message */}
        {/* ********************* */}
        <Flex
          flexDirection={"column"}
          color={"white"}
          backgroundColor={"darkcyan"}
          justifyContent={"center"}
          align={"center"}
          marginTop={"-25px"}
        >
          <BookShelfAnimation />

          <Text color={"white"} paddingTop={"20px"} textAlign={"center"}>
            <Link to="cookies" rel="copyright license help">
              {" "}
              Site Cookies & Privacy Disclosure
            </Link>
          </Text>
          <Text color={"white"} paddingTop={"4px"} textAlign={"center"}>
            {" "}
            © 2023 SASEO - All Rights Reserved{" "}
          </Text>
        </Flex>
      </Box>
      {/* </Slide> */}
    </>
  );
}

export default SFooter;
