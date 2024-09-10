import { useState, useContext } from "react";
import {
  Box,
  Container,
  Card,
  CardBody,
  CardHeader,
  Text,
  Heading,
  Stack,
  Center,
  HStack,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Divider,
  Tooltip,
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

// COMPONENTS
import HeadingPanel from "components/ui/HeadingPanel";

// ICONS
import { FaQuestionCircle, FaWindowClose } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";

// CSS
import "./BookReadingList.design.css";

// IMAGES / TEXTURES
// import cardStockTexture from "../../images/textures/texture2.png";
// import cardStockTexture from "../../images/textures/texture-card-stock.png";
import cardStockTexture from "../../images/textures/texture13.jpg";

// LIBRARY
import { Field, Form, Formik } from "formik";
import TextPanel from "components/ui/TextPanel";
import sendEmail from "lib/sendEmail";
import Xarrow from "react-xarrows"

// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //

import { SearchData } from "components/pages/BookSuggestion";

export function BookReadingList() {
  const toast = useToast();
  const context = useContext(SearchData);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function validateName(value) {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Invalid Email!";
    }
    return error;
  }

  /* ------------------------- */
  // DELETES BOOKS FROM SHARE ARRAY
  /* ------------------------- */
  async function minusBook(title) {
    let updatedBookCollection = context.bookCollection.filter(
      (b) => b.title !== title
    );
    await context.setBookCollection(updatedBookCollection);

    return toast({
      // REFACTOR
      title: "Book taken out of your wishlist!.",
      description: "That book wasn't interesting anyways!",
      status: "error",
      duration: 2400,
      isClosable: true,
      position: "bottom-right",
    });
  }

  return (
    <>
      {/* *************************************************************************************** */}
      {/* READING CARD MODAL */}
      {/* *************************************************************************************** */}
      {/* //todo: move to separate component(?) */}
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(10deg)"
        />
        <ModalContent backgroundColor={"background"}>
          <ModalHeader color={"primary"} textAlign={"center"} fontSize={"2xl"}>
            Suggested Book Search
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={"1px"}>
            <TextPanel id="first-panel">
              Select your which genre, suggestion amount & publishing era you
              would want books suggested to you. This may take some time as we
              are polling multiple titles.
            </TextPanel>
            <TextPanel id="second-panel">
              Once you receive the suggested book, choose which books you are
              interested in to put in your reading list. You will be provided
              the book title, author(s) and ISBN. In addition you will have
              various shopping and informational links provided for each book.
              You can add and take out books from this list by simple clicking
              on the respective book.
            </TextPanel>
            <TextPanel id="third-panel">
              Once you have compiled your reading list you will have the option
              of emailing this list to anyone. Please include a valid email.
            </TextPanel>
            <Xarrow
              start="first-panel" //can be react ref
              end="second-panel" //or an id
              color="darkcyan"
              dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
              animateDrawing={5}
            />
            <Xarrow
              start="second-panel" //can be react ref
              end="third-panel" //or an id
              color="darkcyan"
              dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
              animateDrawing={5}
            />
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button
              color={"text"}
              backgroundColor={"primary"}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Center
        boxShadow={"dark-lg"}
        p={0}
        // display={"inline-block"}
        marginLeft={"auto"}
        marginRight={"auto"}
        w={{
          base: "60%",
          "2xs": "90%",
          xs: "90%",
          sm: "90%",
          md: "65%",
          lg: "55%",
        }}
      >
        <Container
          maxW={{
            base: "1000%",
            "2xs": "100%",
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
          }}
          textAlign={"center"}
          className="book-card-special-border"
          p={8}
          m={0}
          // mb={12}
        >
          <HeadingPanel>
            Reading List
            <Button backgroundColor="transparent" onClick={onOpen}>
              <FaQuestionCircle size={"20px"} color="white" />
            </Button>
          </HeadingPanel>
          <Flex
            flexDirection={"column"}
            justify={"center"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            {context.bookCollection.length !== 0 ? (
              context.bookCollection.map((b) => (
                <Card
                  position={"relative"}
                  key={`collected-${b.title}`}
                  maxW="xl"
                  className="reading-card"
                  boxShadow="xl"
                  padding={"8px"}
                  margin={1}
                  variant="outline"
                  marginBottom={"25px"}
                  alignSelf={"center"}
                  textAlign={"left"}
                  backgroundColor={"white"}
                  backgroundImage={cardStockTexture}
                  backgroundPosition={"top"}
                  backgroundBlendMode={"hard-light"}
                  backgroundSize={"cover"}
                  w={"100%"} // m
                >
                  {/* CLOSE BUTTON */}
                  {/* <Box
                    position={"absolute"}
                    color="rgba(0,0,0,0.3)"
                    fontSize="20px"
                    top={"20px"}
                    right={"20px"}
                    cursor={"pointer"}
                    onClick={(event) => {
                      minusBook(b.title);
                      context.setSelectBook(!context.selectBook);
                    }}
                  >
                    <FaWindowClose />
                  </Box> */}
                  <CardHeader>
                    <Heading size="md" fontFamily={"typewriter"}>
                      {b.title}
                    </Heading>
                  </CardHeader>
                  <Divider
                    borderColor={"rgba(255,1,1,0.8)"}
                    borderBottomWidth={"4px"}
                    w={"100%"}
                    m={0}
                    p={0}
                  />
                  <CardBody>
                    <Stack>
                      <Text fontFamily={"typewriter"}>
                        <strong style={{ paddingRight: "8px" }}>
                          AUTHOR(s):{" "}
                        </strong>
                        {b.author} <br />
                      </Text>
                      <Divider
                        borderColor={"rgba(70,130,180,0.8)"}
                        borderBottomWidth={"2.5px"}
                        w={"100%"}
                        m={0}
                        p={0}
                      />

                      <Text fontFamily={"typewriter"}>
                        <strong style={{ paddingRight: "8px" }}>
                          SUBJECT:
                        </strong>{" "}
                        {b.subject}
                      </Text>
                      <Divider
                        borderColor={"rgba(70,130,180,0.8)"}
                        borderBottomWidth={"2.5px"}
                        w={"100%"}
                        m={0}
                        p={0}
                      />

                      <Text fontFamily={"typewriter"}>
                        <strong style={{ paddingRight: "8px" }}>ISBN:</strong>{" "}
                        {b.isbn}
                      </Text>
                      <Divider
                        borderColor={"rgba(70,130,180,0.8)"}
                        borderBottomWidth={"2.5px"}
                        w={"100%"}
                        marginBottom={"5px"}
                        p={0}
                      />
                    </Stack>
                    <HStack
                      justifyContent={"flex-end"}
                      marginTop={"15px"}
                      paddingTop={"18px"}
                    >
                      <VscBook
                        color="rgba(0,0,0,0.3)"
                        size={"22px"}
                        style={{ verticalAlign: "bottom" }}
                      />

                      <Text
                        fontFamily={"brand-font"}
                        color="rgba(0,0,0,0.3)"
                        fontWeight={"bold"}
                        textAlign={"right"}
                        marginTop={"10px"}
                      >
                        SASEO
                      </Text>
                      <Text
                        fontFamily={"times new roman"}
                        color="rgba(0,0,0,0.3)"
                        fontWeight={"bold"}
                        textAlign={"right"}
                        marginTop={"10px"}
                        fontSize={"10px"}
                      >
                        - BOOK CARD
                      </Text>
                    </HStack>
                  </CardBody>
                </Card>
              ))
            ) : (
              <h1>Empty!</h1>
            )}
          </Flex>
          <br />
          <br />
          <Divider />
          <br />
          <Heading
            color={"primary"}
            textAlign={"center"}
            mb={4}
            fontSize={"2xl"}
          >
            Create share card of all books in your reading list!
          </Heading>

          {/* EMAIL */}
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
              <Center>
                <Form>
                  <Field name="email" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel>Email</FormLabel>
                        <Input {...field} placeholder="email" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <br />
                  <Tooltip
                    label={"Email your sugggested book list!"}
                    color={"white"}
                    placement="top"
                  >
                    <Button
                      colorScheme="yellow"
                      textAlign={"center"}
                      size="md"
                      m={"4px"}
                      // todo: Add capcha and throttling on submit button
                      // todo: https://www.emailjs.com/docs/user-guide/adding-captcha-verification/
                      onClick={(event) => {
                        setTimeout(() => {
                          toast({
                            title: "Thank you!",
                            description:
                              "We've signed you up to our newsletter!",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                          });

                          // actions.setSubmitting(false);
                          event.preventDefault();
                          sendEmail(context.bookCollection);
                        }, 1000);
                      }}
                    >
                      Share!
                    </Button>
                  </Tooltip>
                  <Tooltip
                    label={"Add book to your account library!"}
                    color={"white"}
                    placement="top"
                  >
                    <Button
                      color={"white"}
                      backgroundColor={"primary"}
                      textAlign={"center"}
                      size="md"
                      m={"4px"}
                      // todo: Add capcha and throttling on submit button
                      // todo: https://www.emailjs.com/docs/user-guide/adding-captcha-verification/
                      onClick={(event) => {
                        setTimeout(() => {
                          toast({
                            title: "Book saved!",
                            description:
                              "We've assigned this book to your person library!",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                          });

                          // actions.setSubmitting(false);
                          event.preventDefault();
                          // sendEmail(collection.bookCollection);
                        }, 1000);
                      }}
                    >
                      Save to Library!
                    </Button>
                  </Tooltip>
                  <Tooltip
                    label={"Clear your entire sugggested book list!"}
                    color={"white"}
                    placement="top"
                  >
                    <Button
                      colorScheme="red"
                      textAlign={"center"}
                      size="md"
                      m={"4px"}
                    >
                      Empty List
                    </Button>
                  </Tooltip>
                </Form>
              </Center>
            )}
          </Formik>
        </Container>
      </Center>
    </>
  );
}
