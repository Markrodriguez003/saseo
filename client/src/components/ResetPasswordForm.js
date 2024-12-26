import {
  Button,
  FormLabel,
  Input,
  FormControl,
  HStack,
  Center,
  CircularProgress,
  CircularProgressLabel,
  useToast,
} from "@chakra-ui/react";

// LIBRARIES
import { useAuthStore } from "./../lib/store/store";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { passwordResetSchema } from "../lib/validationSchemas";
import { verifyAccount, verifyOTP, generateOTPCode } from "../lib/APIConnector";
function LogInForm(props) {
  // True/False values for "show password characters" process
  const [otpCodeRetrieved, setOTPCodeRetrieved] = useState(false);

  // Page Navigator
  const navigate = useNavigate();

  // useEffect to make sure store is updated correctly

  // Creating instance of chakra toast component
  const toast = useToast();

  // Cookies / Context Store
  //! move to useEffect since it is not updating
  //   const setUsername = useAuthStore((state) => state.setUsername);
  //   const usernameStore = useAuthStore((state) => state.auth.username);

  async function OTPRequestResult(state) {
    if (state === "successful") {
      setOTPCodeRetrieved(true);
      validatedOTPReset();
      let x = await generateOTPCode(values);
      console.log(`This is the code: ${JSON.stringify(x)}`);
    } else {
      unvalidatedOTPReset(false);
    }
  }
  // Login Validation Success
  // ! change to one function with props passed for success & failure
  function validatedOTPReset() {
    return toast({
      title: "OTP Code sent to email!",
      description: "Check your email to see generated OTP Code!",
      status: "success",
      duration: 3500,
      isClosable: true,
    });
  }
  // OTP Code reset  Failure
  function unvalidatedOTPReset() {
    return toast({
      title: "OTP Code could not be sent!",
      description: "Check email entered in form!",
      status: "error",
      duration: 3500,
      isClosable: true,
    });
  }
  const { values, handleChange, handleSubmit, errors, isSubmitting } =
    useFormik({
      initialValues: { username: "", email: "" },
      validateOnChange: false,
      validateOnBlur: false,
      validationSchema: passwordResetSchema,
      onSubmit: async (values) => {
        // console.log(
        //   `Password reset email:::${values.email} & ${values.username} && is submitting? ${isSubmitting}`
        // );
        // let verifiedAccountResult = await verifyAccount(values);
        OTPRequestResult(await verifyAccount(values));
      },
    });

  // Handles onChange on the OTP input
  const [otpCode, setOTPCode] = useState("");
  // HANDLES OTP SUBMISSION AFTER ACCOUNT VERIFICATION
  function handleOTPSubmit(e) {
    // e.preventDefault();
    console.log(`GENERATED OTP CODE SUBMITTED::: ${otpCode}`);
    verifyOTP({ code: otpCode });
    return "successful";
  }

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
                Submitting OTP Code
              </CircularProgressLabel>
            </CircularProgress>
          </Center>
        ) : (
          <></>
        )}

        {otpCodeRetrieved ? (
          <>
            <>
              {" "}
              <FormLabel htmlFor="username">OTP:</FormLabel>
              <Input
                type="text"
                name="otp"
                id="otp"
                placeholder="Type emailed OTP code here "
                value={otpCode}
                autoComplete={"off"}
                required
                // pattern="/^[A-Z]+$ {6}$/"
                maxLength={6}
                minLength={6}
                onChange={(event) => setOTPCode(event.target.value)}
              />
              <HStack paddingTop={"6px"} justifyContent={"center"}>
                <Button
                  backgroundColor={"primary"}
                  color={"white"}
                  type="submit"
                  // disabled={isSubmitting ? true : false}
                  onClick={(event) => handleOTPSubmit(event)}
                >
                  Enter
                </Button>
                <Button
                  backgroundColor={"primary"}
                  color={"white"}
                  type="submit"
                  // disabled={isSubmitting ? true : false}
                  onClick={(event) => setOTPCodeRetrieved(!otpCodeRetrieved)}
                >
                  Back
                </Button>
              </HStack>
            </>
          </>
        ) : (
          <>
            {" "}
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
            <FormLabel htmlFor="username">Email:</FormLabel>
            <Input
              type="text"
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
              <>
                <br />
                <br />
              </>
            )}
            <HStack paddingTop={"6px"} justifyContent={"center"}>
              <Button
                backgroundColor={"primary"}
                color={"white"}
                type="submit"
                disabled={isSubmitting ? true : false}
                onClick={handleSubmit}
              >
                Send OTP Code
              </Button>
            </HStack>
          </>
        )}
      </FormControl>
    </>
  );
}

export default LogInForm;
