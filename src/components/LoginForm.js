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
} from "@chakra-ui/react";

// LIBRARIES
import { useFormik } from "formik";
import { useState } from "react";
// import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";
import { loginSchema } from "lib/validationSchemas";

function LogInForm(props) {
  // True/False values for "show password characters" process
  const [show, setShow] = useState(false);
  // Handles showing password characters or hiding them from user"
  const handleClick = () => setShow(!show);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(`Form Values:`, values);
    },
  });

  return (
    <FormControl onSubmit={handleSubmit}>
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
          {/* <Shake> */}
          {errors.email}
          {/* </Shake> */}
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
          {/* <Shake> */}
          {errors.password}
          {/* </Shake> */}
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
  );
}

export default LogInForm;
