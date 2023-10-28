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
} from "@chakra-ui/react";
import { useEffect } from "react";
import aos from "aos";
import BookmarkMobile from "../../../images/header/ribbon-1202755_1920 - Mobile.png";
import "./SFooter.design.css";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";

function NewsLetterForm() {
  useEffect(() => {
    aos.init({
      delay: 29,
      offset: 80,
    });
  });

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <>
      <Formik
        initialValues={{ name: "Sasuke" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel color={"white"}>
                    Sign up to our newsletter
                  </FormLabel>
                  <Input
                    {...field}
                    placeholder="name"
                    backgroundColor={"white"}
                    color={"darkcyan"}
                    w={"300px"}
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              backgroundColor={"salmon"}
              isLoading={props.isSubmitting}
              type="submit"
              color={"white"}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export function SFooter() {
  return (
    <>
      <Flex
        data-aos={"slide-up"}
        flexDirection={{
          base: "row",
          lg: "row",
          md: "column",
          sm: "column",
        }}
        alignContent={"center"}
        align={"center"}
        justifyContent={"flex-start"}
        backgroundColor={"darkcyan"}
        gap={"16px"}
      >
        <Link to={"/"}>
          <Box>
            <Box
              backgroundImage={BookmarkMobile}
              w={"350px"}
              h={"125px"}
              backgroundRepeat={"no-repeat"}
              backgroundSize={"contain"}
              filter={"hue-rotate(180deg)"}
              marginBottom={"35px"}
            >
              <Heading
                fontFamily={"brand-font"}
                fontWeight={"bold"}
                color={"white"}
                fontSize={"7xl"}
                textAlign={"center"}
                marginTop="35px"
                marginRight="5px"
                paddingRight={"52px"}
                paddingTop={"20px"}
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

        {/* ********************* */}
        {/* Newsletter form */}
        {/* ********************* */}

        <Box justifySelf={"flex-end"} paddingRight={"20px"}>
          <NewsLetterForm />
        </Box>
      </Flex>

      {/* ********************* */}
      {/* Copyright Message */}
      {/* ********************* */}
      {/* <Box color={"white"} backgroundColor={"darkcyan"}>
        <Text
          color={"white"}
          paddingTop={"20px"}
          textAlign={{ base: "left", md: "left", lg: "left", sm: "center" }}
        >
          {" "}
          © 2023 SASEO - All Rights Reserved{" "}
        </Text>
      </Box> */}
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
