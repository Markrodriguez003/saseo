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
  useToast,
  Wrap,
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
import { registerNewAccountSchema } from "../lib/validationSchemas";
import { MdPendingActions } from "react-icons/md";

const bookGenreValues = bookSubjects.b_subjects
  .map((genre, i) => Object.values(genre))
  .flat();

function RegisterNewAccount() {
  let toast = useToast();

  // True/False values for "show password characters" process
  const [show, setShow] = useState(false);
  const [genreOption, setGenreOption] = useState(
    "Select your favorite book genre"
  );
  // Handles showing password characters or hiding them from user"
  const handleClick = () => setShow(!show);

  // * Holds form data
  let registrationFormValues = {};

  function handleFormReset() {
    resetForm();
  }
  async function handleFormSubmission() {}

  const {
    values,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting,
    errors,
  } = useFormik({
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
      <FormControl onSubmit={handleSubmit}>
        <FormLabel htmlFor="nickname">Profile Nickname:</FormLabel>
        <Input
          type="text"
          name="nickname"
          id=" nickname"
          onChange={handleChange}
          value={values.nickname}
        />
        {errors.nickname ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{errors.nickname}</Shake>
          </small>
        ) : null}
        <br />
        <br />
        <FormLabel>
          Favorite Book Genre{" "}
          <span style={{ fontSize: "12px", color: "grey" }}>(optional)</span>:
        </FormLabel>
        <Select
          name="favoriteGenre"
          id="favoriteGenre"
          
          placeholder={genreOption}
          value={values.favoriteGenre}
          onChange={(e) =>
            setGenreOption(e.target.options[e.target.selectedIndex].text)
          }
        >
          <DropdownOptions type="subject" />
          <option value={"Undecided"}>Undecided</option>
          <option value={"Undecided"}>All of them!</option>
        </Select>
        {errors.favoriteGenre ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{errors.favoriteGenre}</Shake>
          </small>
        ) : null}
        <br />

        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{errors.email}</Shake>
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
            onChange={handleChange}
            value={values.password}
          />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.password ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{errors.password}</Shake>
            <Wrap>
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
            </Wrap>
          </small>
        ) : (
          <Wrap>
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
          </Wrap>
        )}

        <br />
        <FormLabel>Confirm Password:</FormLabel>
        <InputGroup>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Re-enter password"
            onChange={handleChange}
            value={values.confirmPassword}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        {errors.confirmPassword ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            <Shake>{errors.confirmPassword}</Shake>
          </small>
        ) : (
          <></>
        )}

        {/* FORM FOOTER */}
        <HStack paddingTop={"6px"} justifyContent={"center"}>
          <Button
            backgroundColor={"primary"}
            color={"white"}
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting ? true : false}
          >
            Sign Up!
          </Button>
          <Button
            backgroundColor={"red"}
            color={"white"}
            type="submit"
            disabled={isSubmitting ? true : false}
            onClick={handleFormReset}
          >
            Clear
          </Button>
        </HStack>
      </FormControl>
    </>
  );
}

export default RegisterNewAccount;
