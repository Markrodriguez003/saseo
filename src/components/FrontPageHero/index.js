// ? NOTES
// https://codepen.io/lmoroz/pen/jLMLRE
// https://codepen.io/mikedevelops/pen/vOavQB
// https://dev.to/esedev/how-to-pass-and-access-data-from-one-route-to-another-with-uselocation-usenavigate-usehistory-hooks-1g5m#:~:text=Fortunately%2C%20React%20Router%20provides%20several,from%20the%20current%20location%20object.

// CHAKRA COMPONENTS
import {
  Box,
  Flex,
  Heading,
  Stack,
  Container,
  Button,
  Image,
  Center,
  Hide,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// EXTERNAL COMPONENTS
import ISBNSearch from "../pages/ISBNSearch";
import { color } from "framer-motion";
import Shake from "react-reveal/Shake";

// IMAGES
import bgHero from "images/backgrounds/Hero-Book.png";
import "./styles.css";
import splashBook from "images/hero/hero-half-book.png";

// ICONS
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiSearch, BiBookReader } from "react-icons/bi";
// import { AiOutlineBook } from "react-icons/ai";

function FrontPageHero() {
  // * Detects the size of the user's browser window. Used to change styling for certain components
  const [size] = useMediaQuery("(max-width: 600px)");
  // * Initializes userNavigation to be used to route user to another page with a payload (user's search data)
  const navigate = useNavigate();

  // * Initializes userNavigation to be used to route user to another page with a payload (user's search data)
  const [placeholderText, setPlaceholderText] = useState("Search");

  const [errorText, setErrorText] = useState(false);

  // * Call to action values from input (option & subject)
  const [callToActionInputValues, setCallToActionInputValues] = useState({
    option: "Search",
    subject: "",
  });

  // useEffect(() => {
  //   const onKeyDown = (e) => {
  //     if (e.key === "Enter") {
  //       console.log("You pressed Enter");
  //     }
  //   };

  //   window.addEventListener("keydown", onKeyDown);
  //   return () => window.removeEventListener("keydown", onKeyDown);
  // }, []);

  function StopAnchorPropagration(event) {
    event.stopPropagation();
    // event.preventDefault();
  }

  const [keyPress, setKeyPress] = useState();
  // Handles the submit of call to action if user presses enter
  const handleEnterPress = (event) => {
    console.log(`Key pressed: `, event.key);
    // look for the `Enter` keyCode
    // setKeyPress(event.key);
    // if (event.key === "Enter" || event.which === "Enter") {
    //   console.log("User pressed enter!!!!!!!!");

    //   // handleCallToActionSubmit();
    // }
    // console.log("User Pressed: ", keyPress);
  };

  // Handles the submit of call to action search input
  function handleCallToActionSubmit(e) {
    if (callToActionInputValues.subject.length > 2) {
      setErrorText(false);
      switch (callToActionInputValues.option.toLowerCase()) {
        case "search":
          navigate("/suggest", { state: callToActionInputValues });
          break;
        case "isbn":
          navigate("/isbn", { state: callToActionInputValues });
          break;
        default:
          console.log(
            `User clicked on call to action submit button --> ISBN`,
            callToActionInputValues
          );
      }
    } else {
      setErrorText(true);
    }
  }

  function CallToActionSelect() {
    return (
      <Select
        className="front-page-select"
        selected
        defaultValue={placeholderText}
        onChange={(e) => {
          setPlaceholderText(e.target.value);
          setCallToActionInputValues((prev) => ({
            ...prev,
            option: e.target.value,
          }));
        }}
      >
        <option value="Search">Search</option>
        <option value="ISBN">ISBN</option>
        <option value="Author">Author</option>
      </Select>
    );
  }

  return (
    <>
      <Container maxW={"100%"} p={0} m={0} paddingTop={"45px"}>
        <Center position={"relative"} className="header-box">
          <Stack>
            {/* TOP HEADER TEXT */}
            <Heading
              color={"darkcyan"}
              textAlign={"center"}
              size={"2xl"}
              p={"5px"}
            >
              <span style={{ color: "#4d2f00" }}>Find your </span> Perfect Book.
            </Heading>

            {/* CALL TO ACTION SELECT */}

            {size ? (
              <VStack tabIndex={0}>
                <CallToActionSelect />

                <Input
                  placeholder="Type your options"
                  onChange={(e) =>
                    setCallToActionInputValues((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                />

                <Button
                  tabIndex={0}
                  type="submit"
                  _hover={{ backgroundColor: "transparent" }}
                  onClick={(e) => handleCallToActionSubmit(e)}
                  onKeyDown={(e) => handleEnterPress(e)}
                >
                  Search!
                </Button>
              </VStack>
            ) : (
              <Box tabIndex={0}>
                <InputGroup size="md" padding={"20px"}>
                  <InputLeftAddon children={<CallToActionSelect />} />
                  <Input
                    placeholder={(e) => e.target.value}
                    onChange={(e) =>
                      setCallToActionInputValues((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                  />

                  <InputRightAddon
                    _hover={{ cursor: "pointer" }}
                    children={
                      <Button
                        type="submit"
                        tabIndex={0}
                        _hover={{ backgroundColor: "transparent" }}
                      >
                        Search!
                      </Button>
                    }
                    onClick={(e) => handleCallToActionSubmit(e)}
                    onKeyDown={(e) => handleEnterPress(e)}
                  />
                </InputGroup>
                {errorText ? (
                  <Shake>
                    <Center>
                      <small style={{ color: "red" }}>
                        Search cannot be empty!
                      </small>
                    </Center>
                  </Shake>
                ) : (
                  <></>
                )}
              </Box>
            )}

            {/* BOTTOM HALF OF HEADER TEXT */}
            <Flex
              direction={{
                base: "column-reverse",
                lg: "row",
                md: "column-reverse",
                sm: "column-reverse",
              }}
              justify={"center"}
              align={"center"}
              mb={12}
              position={"relative"}
            >
              <Box w={{ base: "60%", lg: "45%", md: "60%", sm: "60%" }}>
                <Heading
                  color={"darkcyan"}
                  mb={4}
                  textAlign={{
                    base: "center",
                    lg: "left",
                    md: "center",
                    sm: "center",
                  }}
                >
                  <Hide above="992.1px">
                    <span
                      style={{
                        paddingBottom: "10px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      ↑
                    </span>
                    <br />
                  </Hide>
                  Looking for this has never been easier{" "}
                  <Hide below="992.1px">
                    {" "}
                    <span>→</span>
                  </Hide>
                </Heading>
                <Stack
                  direction="row"
                  spacing={4}
                  align="center"
                  justify={{
                    base: "flex-start",
                    lg: "flex-start",
                    md: "center",
                    sm: "center",
                  }}
                >
                  <a href="#genre" onClick={StopAnchorPropagration}>
                    <Button colorScheme="teal" variant="solid">
                      More Info!
                    </Button>
                  </a>
                  <Button colorScheme="teal" variant="outline">
                    <Link to="about">About</Link>
                  </Button>
                </Stack>
              </Box>

              <Image src={bgHero} maxW={"10rem"} mb={8} mt={6} />
            </Flex>
          </Stack>
        </Center>

        {/* BOTTOM OPEN BOOK (TOP PORTION) IMAGE */}
        <Box className="openBookImg">
          <Image
            src={splashBook}
            alt="Open Book image"
            h={"60vh"}
            w={"100vw"}
            m={0}
            p={0}
          />
        </Box>
      </Container>
    </>
  );
}

export default FrontPageHero;

// UNUSED CODE
