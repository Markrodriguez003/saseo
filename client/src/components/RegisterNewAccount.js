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
  useToast,
  Wrap,
  Center,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
// NOTES
//? https://www.youtube.com/watch?v=7Ophfq0lEAY&ab_channel=NikitaDev

// DATA
import bookSubjects from "../data/book_subjects.json";

// LIBRARIES
import { useFormik } from "formik";
import { useState } from "react";
import { useAuthStore } from "./../lib/store/store";
import { registerUser } from "../lib/APIConnector";
// import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";
import { BookGenreSuggestionSection } from "./FrontpageSection";
import DropdownOptions from "./ui/DropdownOptions";
import { registerNewAccountSchema } from "../lib/validationSchemas";
import { MdPendingActions } from "react-icons/md";

const bookGenreValues = bookSubjects.b_subjects
  .map((genre, i) => Object.values(genre))
  .flat();

function RegisterNewAccount() {
  // True/False values for "show password characters" form fields
  const [show, setShow] = useState(false);
  // Holds user's favorite genre
  const [genreOption, setGenreOption] = useState(
    "Select your favorite book genre"
  );
  // Handles showing password characters or hiding them from user"
  const handleClick = () => setShow(!show);

  // * Holds form data
  let registrationFormValues = {};

  // Resets entire form
  function handleFormReset() {
    resetForm();
  }

  // Creating instance of chakra toast component
  const toast = useToast();

  // STORE
  // const usernameStore = useAuthStore((state) => state.auth.username);
  function registerUserResult(state) {
    if (state === "successful") {
      console.log(state);
      registeredUserSuccess();
    } else if (state === "email_failure") {
      console.log(state);
      registeredUserEmailFailure();
    } else if (state === "username||password_failure") {
      console.log(state);
      registeredExistsFailure();
    } else {
      // console.log(`Registering user failed! (FE) ${state}`);
      registeredUserFailure();
    }
  }
  function registeredUserSuccess() {
    // Setting up store.
    // Create session here
    // setUsername(values.username);

    // navigate to account/dashboard page
    // navigate("/account/dashboard");

    return toast({
      title: "Account Registration Sucessful! ",
      description: "Thank you creating a new account!",
      status: "success",
      duration: 2400,
      isClosable: true,
      position: "top-center",
    });
  }

  function registeredUserEmailFailure() {
    // Setting up store.
    // Create session here
    // setUsername(values.username);

    // navigate to account/dashboard page
    // navigate("/account/dashboard");

    return toast({
      title: "Account Registration Unsucessful! ",
      description: "Email could not be sent out!!",
      status: "error",
      duration: 2400,
      isClosable: true,
      position: "top-center",
    });
  }
  function registeredUserFailure() {
    //! Sign out session here
    return toast({
      title: "Cannot Register account! ",
      description: "An error has occurred! Please double check form entries!.",
      status: "error",
      duration: 2400,
      isClosable: true,
      position: "top-center",
    });
  }

  function registeredExistsFailure() {
    //! Sign out session here
    return toast({
      title: "Cannot Register account! ",
      description:
        "An error has occurred! Email or username is already in use!",
      status: "error",
      duration: 2400,
      isClosable: true,
      position: "top-center",
    });
  }

  const {
    values,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      // favoriteBookGenre: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: registerNewAccountSchema,
    onSubmit: async (values) => {
      registerUserResult(
        await registerUser({
          favoriteBookGenre:
            genreOption === "Select your favorite book genre"
              ? ""
              : genreOption,
          ...values,
        })
      );
    },
  });
  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        {isSubmitting ? (
          <Center>
            <CircularProgress
              color="green.300"
              isIndeterminate
              size={"150px"}
              thickness={"2px"}
            >
              <CircularProgressLabel style={{ fontSize: "15px" }}>
                Registering
              </CircularProgressLabel>
            </CircularProgress>
          </Center>
        ) : (
          <></>
        )}

        <FormLabel htmlFor="username">Username:</FormLabel>
        <Input
          type="text"
          name="username"
          id=" username"
          onChange={handleChange}
          value={values.username}
        />
        {errors.username ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            {errors.username}
          </small>
        ) : null}
        <br />
        <br />
        <FormLabel htmlFor="favoriteBookGenre">
          Favorite Book Genre{" "}
          <span style={{ fontSize: "12px", color: "grey" }}>(optional)</span>:
        </FormLabel>
        <Select
          name="favoriteBookGenre"
          id="favoriteBookGenre"
          placeholder={genreOption}
          value={values.favoriteBookGenre}
          onChange={(e) =>
            setGenreOption(e.target.options[e.target.selectedIndex].text)
          }
        >
          <DropdownOptions type="subject" />
          <option value={"Undecided"}>Undecided</option>
          <option value={"Undecided"}>All of them!</option>
        </Select>
        {errors.favoriteBookGenre ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            {errors.favoriteBookGenre}
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
            {errors.email}
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
            {errors.password}

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
            {errors.confirmPassword}
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
            // onClick={handleSubmit}
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
