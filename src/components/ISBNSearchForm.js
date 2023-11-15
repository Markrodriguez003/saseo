import {
  Button,
  FormLabel,
  Input,
  FormControl,
  Box,
  Flex,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  VStack,
  Center,
  useDisclosure,
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

// NOTES
//? https://www.youtube.com/watch?v=7Ophfq0lEAY&ab_channel=NikitaDev

// ICONS
import { FaSearch, FaQuestionCircle } from "react-icons/fa";

// DATA

// IMAGES
import noBookImage from "../images/NoBookFound.png";
import missingBook from "../images/missing-cover.png";

// LIBRARIES
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";
import ISBNSearchFetch from "lib/IBSNSearchFetch";
import BookLoader from "components/ui/BookLoader/BookLoader";
import BookCoverAnimation from "./ui/BookCoverAnimation";
import TextPanel from "./ui/TextPanel";

// ? Test: 0394588169 (Jurrassic Park)
// ? Test: 9780593472118 (A Haunting in Hialeah Gardens) - error loading

function ISBNSearchForm() {
  function BookComponent(book) {
    let {
      title,
      author_name,
      first_publish_year,
      publisher,
      edition_count,
      number_of_pages_median,
    } = book.book.fetchedBook.docs[0];
    let { ISBNFetchedBookCover } = book.book;

    return (
      <>
        {/* MODAL */}
        <Center key={title + "-book-card"}>
          <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
            <ModalOverlay alignContent={"center"} />
            <ModalContent justifyContent={"center"}>
              <ModalHeader fontSize={"1rem"}>{title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody
                alignContent={"center"}
                alignItems={"center"}
                alignSelf={"center"}
                width={"100%"}
                p={2}
              >
                <Box width={"100%"}>
                  <Image
                    src={
                      ISBNFetchedBookCover === undefined
                        ? missingBook
                        : `https://covers.openlibrary.org/b/isbn/${ISBNFetchedBookCover}-L.jpg`
                    }
                    // boxSize={"850px"}
                    w={"100vw"}
                    h={"auto"}
                    align={"center"}
                  />
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Center>

        {Object.entries(book).length !== 0 ? (
          <Card
            minW={{
              base: "md",
              "2xs": "sm",
              xs: "sm",
              sm: "sm",
              md: "md",
              lg: "md",
              xl: "md",
              "2lx": "md",
            }}
            shadow={"2xl"}
            border="3px"
            borderColor="primary"
            marginTop={"30px"}
            onClick={onOpen}
          >
            <CardBody>
              <Center>
                <BookCoverAnimation
                  cover={`https://covers.openlibrary.org/b/isbn/${ISBNFetchedBookCover}-L.jpg`}
                  size={"md"}
                />
              </Center>
              <Stack mt="6" spacing="3" textAlign={"center"}>
                <Heading size="md" textAlign={"center"}>
                  {title}
                </Heading>
                <Text>
                  <strong>Author: </strong> {author_name}
                </Text>

                {publisher !== undefined ? (
                  <Text>
                    <strong>Publishers: </strong>{" "}
                    {publisher.map((publisher_) => `${publisher_}  `)}
                  </Text>
                ) : (
                  <Text>
                    <strong>Publishers: </strong> Unknown
                  </Text>
                )}

                {edition_count !== undefined ? (
                  <Text>
                    {" "}
                    <strong># of Editions: </strong> {edition_count}{" "}
                  </Text>
                ) : (
                  <Text>
                    {" "}
                    <strong># of Editions: </strong> Unknown
                  </Text>
                )}

                {first_publish_year !== undefined ? (
                  <Text>
                    {" "}
                    <strong>Initial Publishing Year: </strong>{" "}
                    {first_publish_year}{" "}
                  </Text>
                ) : (
                  <Text>
                    <strong>Initial Publishing Year: </strong> Unknown
                  </Text>
                )}

                {number_of_pages_median !== undefined ? (
                  <Text>
                    {" "}
                    <strong># of total pages: </strong> {number_of_pages_median}{" "}
                  </Text>
                ) : (
                  <Text>
                    {" "}
                    <strong># of total pages: </strong> Unknown
                  </Text>
                )}
              </Stack>
            </CardBody>
            <Divider borderColor={"primary"} borderBottomWidth={"5px"} />
            <CardFooter>
              <Button
                marginLeft="auto"
                marginRight="auto"
                backgroundColor={"primary"}
                color={"white"}
              >
                Add to My Library
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <></>
        )}
      </>
    );
  }

  const ISBNSchema = Yup.object({
    isbn: Yup.string("Invalid ISBN")
      .matches(/^(\d{10}|\d{13})$/, "Must be only 10 or 13 digits")
      .required("Required"),
  });

  // Handles book cover modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [book, setBook] = useState({});
  const [loadState, setLoadState] = useState("Initial");

  const formik = useFormik({
    initialValues: { isbn: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: ISBNSchema,
    onSubmit: async (values) => {
      setLoadState("Loading");
      try {
        setBook(await ISBNSearchFetch(values.isbn));
        setLoadState("Loaded");
      } catch (err) {
        setLoadState("Error");
        console.log(err.message);
      }
    },
  });

  return (
    <>
      <FormControl onSubmit={formik.handleSubmit} paddingBottom={"5px"}>
        <Flex flexDirection="column" gap={"8px"}>
          <FormLabel
            htmlFor="isbn"
            color={"darkcyan"}
            textAlign={"center"}
            paddingTop={"35px"}
          >
            Search for 10 or 13 digit ISBN
          </FormLabel>
          <Input
            type="isbn"
            name="isbn"
            id="isbn"
            placeholder="Enter ISBN here"
            backgroundColor={"white"}
            color={"darkcyan"}
            w={"255px"}
            marginLeft={"auto"}
            marginRight={"auto"}
            // onChange={formik.handleChange}
            value={formik.values.isbn}
            onChange={formik.handleChange}
          />

          {formik.errors.isbn ? (
            <small
              style={{ color: "red", fontStyle: "italic", textAlign: "center" }}
            >
              <Shake>{formik.errors.isbn}</Shake>
            </small>
          ) : (
            <></>
          )}

          <Box textAlign={"center"} paddingTop={"20px"}>
            <Button
              leftIcon={<FaSearch />}
              backgroundColor={"primary"}
              color={"white"}
              type="submit"
              size={"lg"}
              onClick={formik.handleSubmit}
            >
              Search!
            </Button>
          </Box>
        </Flex>
      </FormControl>
      {loadState === "Loaded" ? (
        <>
          <BookComponent book={book} />
        </>
      ) : loadState === "Initial" ? (
        <></>
      ) : loadState === "Loading" ? (
        <Box mt={20}>
          <Center>
            <BookLoader />
          </Center>
        </Box>
      ) : loadState === "Error" ? (
        <VStack justifyContent={"center"}>
          <Image
            src={noBookImage}
            w={"25vw"}
            borderRadius={"full"}
            marginTop={"40px"}
          />

          <TextPanel>
            Saseo cannot locate the book ISBN you entered. While the book cannot
            be found, it does not necessarily mean that the book does not exist!
            The ISBN entered could be for a brand new book that has yet been
            entered into Open Library's API database. In addition, the book
            itself could be self-published or from an old era in which ISBN
            coding format was not used.{" "}
          </TextPanel>
        </VStack>
      ) : (
        <>
          <h1>An error has occured!</h1>
        </>
      )}
    </>
  );
}

export default ISBNSearchForm;
