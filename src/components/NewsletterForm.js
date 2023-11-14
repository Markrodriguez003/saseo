import {
  Button,
  FormHelperText,
  FormLabel,
  Input,
  FormControl,
  Toast,
  useToast,
  Flex,
} from "@chakra-ui/react";

// NOTES
//? https://www.youtube.com/watch?v=7Ophfq0lEAY&ab_channel=NikitaDev

// DATA
import bookSubjects from "../data/book_subjects.json";

// LIBRARIES
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";
import { BookGenreSuggestionSection } from "./FrontpageSection";
import DropdownOptions from "./ui/DropdownOptions";

const bookGenreValues = bookSubjects.b_subjects
  .map((genre, i) => Object.values(genre))
  .flat();

// ^ Creating new account form validation
const registerNewAccountSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

function NewsletterForm() {
  const formik = useFormik({
    initialValues: { email: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: registerNewAccountSchema,
    onSubmit: (values) => {
      console.log(`Form Values:`, values);
      toast({
        title: "Registration Sucessful! ",
        description: "Thank you for subscribing to our newsletter service!",
        status: "success",
        duration: 2400,
        isClosable: true,
        position: "bottom-center",
      });
    },
  });

  // ALLOWS THE USE OF CHAKRA TOAST
  let toast = useToast();
  return (
    <>
      <FormControl onSubmit={formik.handleSubmit} paddingBottom={"5px"}>
        <FormLabel
          htmlFor="email"
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
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here!"
            backgroundColor={"white"}
            color={"darkcyan"}
            w={"255px"}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />

          <Button
            backgroundColor={"primary"}
            color={"white"}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Sign Up!
          </Button>
        </Flex>
        {formik.errors.email ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{formik.errors.email}</Shake>
          </small>
        ) : (
          <FormHelperText color={"white"} fontSize={"10px"}>
            We'll never share your email.
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}

export default NewsletterForm;
