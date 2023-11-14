import {
  Button,
  FormHelperText,
  FormLabel,
  Input,
  FormControl,
  VStack,
  HStack,
  Select,
  ListItem,
  UnorderedList,
  InputRightElement,
  InputGroup,
  Toast,
  useToast
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
  // favoriteGenre: Yup.string()
  //   .required("Please select your favorite book genre")
  //   .oneOf(bookGenreValues),
  //   favoriteGenre: Yup.object({
  //     value: Yup.string().oneOf(bookGenreValues),
  //   }),

  nickname: Yup.string()
    .max(15, "Must be above 4 characters (max 15)")
    .min(5, "Must be above 4 characters (max 15)")
    .required("Please enter your favorite genre!"),
  password: Yup.string()
    .max(15, "Must be above 4 characters (max 15)")
    .min(5, "Must be above 4 characters (max 15)")
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    )
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

function RegisterNewAccount() {
  let toast = useToast();

  // True/False values for "show password characters" process
  const [show, setShow] = useState(false);
  const [genreOption, setGenreOption] = useState(
    "Select your favorite book genre"
  );
  // Handles showing password characters or hiding them from user"
  const handleClick = () => setShow(!show);
  let registrationFormValues = {};
  // console.log("This is inside the array! " + JSON.stringify(bookGenreValues));

  const formik = useFormik({
    initialValues: { nickname: "", email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: registerNewAccountSchema,
    onSubmit: (values) => {
      registrationFormValues = {
        favoriteBookGenre:
          genreOption === "Select your favorite book genre" ? "" : genreOption,
        ...values,
      };
      console.log(`Form Values:`, registrationFormValues);
      toast({
        title: "Account Registration Sucessful! ",
        description: "Thank you creating a new account!",
        status: "success",
        duration: 2400,
        isClosable: true,
        position: "top-center",
      });
    },
  });
  return (
    <>
      <FormControl onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="nickname">Profile Nickname:</FormLabel>
        <Input
          type="text"
          name="nickname"
          id=" nickname"
          onChange={formik.handleChange}
          value={formik.values.nickname}
        />
        {formik.errors.favoriteGenre ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{formik.errors.nickname}</Shake>
          </small>
        ) : null}
        <br />
        <br />
        <FormLabel>Favorite Book Genre <span style={{fontSize:"12px", color:"grey"}}>(optional)</span>:</FormLabel>
        <Select
          name="favoriteGenre"
          id="favoriteGenre"
          placeholder={genreOption}
          value={formik.values.favoriteGenre}
          onChange={(e) =>
            setGenreOption(e.target.options[e.target.selectedIndex].text)
          }
        >
          <DropdownOptions type="subject" />
          <option value={"Undecided"}>Undecided</option>
          <option value={"Undecided"}>All of them!</option>
        </Select>
        {formik.errors.favoriteGenre ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{formik.errors.favoriteGenre}</Shake>
          </small>
        ) : null}
        <br />

        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.favoriteGenre ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{formik.errors.email}</Shake>
          </small>
        ) : (
          <FormHelperText>We'll never share your email.</FormHelperText>
        )}

        <br />
        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            id="password"
            name="password"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {formik.errors.password ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{formik.errors.password}</Shake>
            <UnorderedList
              fontSize={"12.5px"}
              color="red"
              paddingTop={"10px"}
              paddingLeft={"10px"}
            >
              <ListItem>One lowercase character</ListItem>
              <ListItem>One uppercase character</ListItem>
              <ListItem>One number</ListItem>
              <ListItem>One special character</ListItem>
              <ListItem>8 characters minimum</ListItem>
            </UnorderedList>
          </small>
        ) : (
          <UnorderedList
            fontSize={"12.5px"}
            color="grey"
            paddingTop={"10px"}
            paddingLeft={"10px"}
          >
            <ListItem>One lowercase character</ListItem>
            <ListItem>One uppercase character</ListItem>
            <ListItem>One number</ListItem>
            <ListItem>One special character</ListItem>
            <ListItem>8 characters minimum</ListItem>
          </UnorderedList>
        )}

        {/* FORM FOOTER */}
        <HStack paddingTop={"6px"} justifyContent={"center"}>
          <Button
            backgroundColor={"primary"}
            color={"white"}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Sign Up!
          </Button>
          <Button backgroundColor={"red"} color={"white"} type="submit">
            Clear
          </Button>
        </HStack>
      </FormControl>
    </>
  );
}

export default RegisterNewAccount;
