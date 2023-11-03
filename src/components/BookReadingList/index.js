import { useState, useContext } from "react";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  Text,
  Heading,
  Stack,
  HStack,
  Box,
  Center,
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
  Link,
  Tooltip,
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

// ICONS
import { FaQuestionCircle } from "react-icons/fa";

import "./BookReadingList.design.css";

// LIBRARY
import { Field, Form, Formik } from "formik";
import Xarrow from "react-xarrows";
import TextPanel from "components/ui/TextPanel";
import sendEmail from "lib/sendEmail";

// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //

import { SearchData } from "components/pages/BookSuggestion";

export function BookReadingList() {
  const toast = useToast();
  const collection = useContext(SearchData);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      {/* ******************* */}
      {/* READING CARD MODAL */}
      {/* ******************* */}
      {/* //todo: move to separate component(?) */}
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
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

      <Container
        maxW={{
          base: "60%",
          "2xs": "90%",
          xs: "90%",
          sm: "90%",
          md: "65%",
          lg: "55%",
        }}
        border={"4px"}
        borderWidth={"5px"}
        borderColor={"teal"}
        borderRadius={"25px"}
        p={6}
        mb={12}
      >
        <Heading
          size="xl"
          color="white"
          backgroundColor="teal"
          textAlign={"center"}
          mb={5}
          border={"2px"}
          borderColor={"white"}
          borderWidth={4}
          p={4}
        >
          Reading List
          <Button paddingTop={"18px"} onClick={onOpen}>
            <FaQuestionCircle size={"20px"} color="darkcyan" />
          </Button>
        </Heading>
        <Flex
          flexDirection={"column"}
          justify={"center"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          {collection.bookCollection ? (
            collection.bookCollection.map((b) => (
              <Card
                key={`collected-${b.title}`}
                maxW="xl"
                className="reading-card"
                boxShadow="xl"
                padding={"8px"}
                margin={1}
                variant="outline"
                marginBottom={"25px"}
                alignSelf={"center"}
                textAlign={"center"}
                w={"100%"} // m
              >
                <CardHeader>
                  <Heading size="md">{b.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Stack>
                    <Text fontSize="sm">
                      Author(s): {b.author} <br />
                    </Text>
                    <Text>ISBN: {b.isbn}</Text>
                  </Stack>
                </CardBody>
              </Card>
            ))
          ) : (
            <h1>Empty!</h1>
          )}
        </Flex>
        <br />
        <br />
        <Heading color={"teal"} textAlign={"center"} mb={4}>
          Create share card of all books in your reading list!
        </Heading>

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
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>First name</FormLabel>
                      <Input {...field} placeholder="name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Tooltip
                  label={"Email your sugggested book list!"}
                  color={"white"}
                  placement="top"
                >
                  <Button
                    colorScheme="yellow"
                    textAlign={"center"}
                    size="lg"
                    m={"4px"}
                    // todo: Add capcha and throttling on submit button
                    // todo: https://www.emailjs.com/docs/user-guide/adding-captcha-verification/
                    onClick={(event) => {
                      setTimeout(() => {
                        toast({
                          title: "Thank you!",
                          description: "We've signed you up to our newsletter!",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        });

                        // actions.setSubmitting(false);
                        event.preventDefault();
                        sendEmail(collection.bookCollection);
                      }, 1000);
                    }}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   sendEmail(collection.bookCollection);
                    // }}
                  >
                    Share!
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
                    size="lg"
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
    </>
  );
}
