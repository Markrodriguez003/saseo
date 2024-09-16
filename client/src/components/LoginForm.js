import {
  Button,
  FormLabel,
  Input,
  FormControl,
  HStack,
  Box,
  InputRightElement,
  Text,
  InputGroup,
  useToast,
} from "@chakra-ui/react";

// LIBRARIES
import { useAuthStore } from "./../lib/store/store";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../lib/validationSchemas";
import { login } from "../lib/APIConnector";
function LogInForm(props) {
  // True/False values for "show password characters" process
  const [show, setShow] = useState(false);

  // Handles showing password characters or hiding them from user"
  const handleClick = () => setShow(!show);

  // Cookies / Context Store
  const setUsername = useAuthStore((state) => state.setUsername);

  // Page Navigator
  const navigate = useNavigate();

  // Creating instance of chakra toast component
  const toast = useToast();

  // STORE
  const usernameStore = useAuthStore((state) => state.auth.username);

  function loginResult(state) {
    if (state === "successful") {
      console.log(state);
      validatedLogin();
    } else {
      console.log(state);
      unvalidatedLogin();
    }
  }
  function validatedLogin() {
    // Setting up store.
    // Create session here
    setUsername(values.username);
    console.log(`Username entered: ${usernameStore}`);

    // navigate to account/dashboard page
    navigate("/account/dashboard");

    return toast({
      title: "Logging in!",
      description: "Taking to your dashboard!",
      status: "success",
      duration: 3500,
      isClosable: true,
    });
  }
  function unvalidatedLogin() {
    // Sign out session here
    return toast({
      title: "Cannot log in!",
      description:
        "The username and/or password is incorrect! If you need to reset password, use the link below.",
      status: "error",
      duration: 3500,
      isClosable: true,
    });
  }

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: { username: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      loginResult(await login(values));
    },
  });

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel htmlFor="username">Username:</FormLabel>
        <Input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={values.username}
        />
        {errors.username ? (
          <small style={{ color: "red", fontStyle: "italic" }}>
            {errors.username}
          </small>
        ) : (
          <>
            <br />
            <br />
          </>
        )}

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
          </small>
        ) : null}

        <Box paddingTop={"10px"}>
          <Link href="#">
            <Text color="primary">Reset Password</Text>
          </Link>
        </Box>
        <HStack paddingTop={"6px"} justifyContent={"center"}>
          <Button
            backgroundColor={"primary"}
            color={"white"}
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </HStack>
      </FormControl>
    </>
  );
}

export default LogInForm;
