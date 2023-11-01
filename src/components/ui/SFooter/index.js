import {
  Hide,
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
  InputGroup,
  InputRightAddon,
  Container,
} from "@chakra-ui/react";
import { useEffect } from "react";
import aos from "aos";
import BookmarkMobile from "../../../images/header/ribbon-1202755_1920 - Mobile.png";

import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";

function NewsLetterForm() {
  // useEffect(() => {
  //   aos.init({
  //     delay: 29,
  //     offset: 80,
  //   });
  // });

  const toast = useToast();
  function validateName(value) {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Email is required";
    }
    return error;
  }

  return (
    <>
      <Formik
        initialValues={{ name: "you@email" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            toast({
              title: "Thank you!",
              description: "We've signed you up to our newsletter!",
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  paddingBottom={"25px"}
                >
                  <FormLabel
                    color={"white"}
                    textAlign={{
                      base: "left",
                      lg: "left",
                      md: "center",
                      sm: "center",
                      xs: "center",
                      "2xs": "center",
                    }}
                  >
                    Sign up to our newsletter
                  </FormLabel>
                  <FormErrorMessage paddingBottom={"5px"}>
                    {form.errors.name}
                  </FormErrorMessage>
                  <Flex
                    flexDirection={{
                      base: "row",
                      lg: "row",
                      md: "rowr",
                      sm: "row",
                      xs: "column",
                      "2xs": "column",
                    }}
                    gap={"8px"}
                  >
                    <Input
                      {...field}
                      placeholder="Enter your email here!"
                      backgroundColor={"white"}
                      color={"darkcyan"}
                      w={"255px"}
                    />

                    <Box textAlign={"center"}>
                      <Button
                        backgroundColor={"salmon"}
                        isLoading={props.isSubmitting}
                        type="submit"
                        color={"white"}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Flex>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </>
  );
}

export function SFooter() {
  return (
    <>
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
          gap={"16px"}
          p={"0px"}
          m={"0px"}
          flexWrap={"wrap"}
        >
          <Link to={"/"}>
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
                  base: "25px",
                  lg: "25px",
                  md: "25px",
                  sm: "25px",
                  xs: "0px",
                  "2xs": "00px",
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
          <Link to={"suggest"}>
            <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
              Suggest Books
            </Text>
          </Link>
          <Link to="random">
            <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
              Random pick
            </Text>
          </Link>
          <Link to="about">
            <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
              ISBN Search
            </Text>
          </Link>
          <Box flexGrow={1}>
            <Link to="about">
              <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
                About
              </Text>
            </Link>
          </Box>

          <Box
            justifySelft={{
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
            <NewsLetterForm />
          </Box>
        </Flex>
      </Box>

      {/* ********************* */}
      {/* Copyright Message */}
      {/* ********************* */}
      <Box color={"white"} backgroundColor={"darkcyan"}>
        <Text color={"white"} paddingTop={"20px"} textAlign={"center"}>
          {" "}
          © 2023 SASEO - All Rights Reserved{" "}
        </Text>
      </Box>
    </>
  );
}

export default SFooter;

//  OLD

/*
<Flex className="footer-container" align={"center"}>
        <Link to={"/"}>
          <div className="footer-mobile-brand-background">
            <div>
              <img
                src={BookmarkMobile}
                alt="bookmark-panel"
                className="footer-bookmark-image"
              />
              <h1>SASEO</h1>
            </div>
          </div>
        </Link>

        <Divider orientation="vertical" size={"xl"} />

        <Hide below="md">
          <nav className="footer-nav-container">
            <Link to={"suggest"}>
              <button>Suggest Books</button>
            </Link>
            <Link to="random">
              <button>Random pick</button>
            </Link>
            <button>ISBN Search</button>
            <Link to="about">
              <button>About</button>
            </Link>
          </nav>
        </Hide>
      </Flex>
*/
