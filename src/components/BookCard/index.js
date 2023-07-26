// ? ------------------------------------
// ? NOTES
// ? -----------------------------------

// // BOOK RATINGS
// // let rating =
// //   "https://openlibrary.org" +
// //   response.data.docs[191].key +
// //   "/ratings.json";

import {
  Box,
  Image,
  Heading,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Center,
  Card,
  Wrap,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  useToast,
  Divider,
  Collapse,
  Button,
} from "@chakra-ui/react";

// ICONS
import { RiBookmark3Fill } from "react-icons/ri";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";

import { useState, useEffect, useReducer, useContext } from "react";
import "./BookCard.design.css";

// IMAGES
import missingBook from "../../images/missing-cover.png";

// Context globals
import { SearchData } from "components/pages/BookSuggestion";

// LIBRARY
// import { bookCardReducer, BOOK_STATE_ACTIONS } from "lib/BookCardReducer";

// COMPONENTS
import BookCardButtons from "components/BookCard/BookCardButtons";

// useContext data of bookCollection
// Creates Book card filled with book info
function BookCard(props) {
  const collection = useContext(SearchData);
  let bookdetails = props;

  // const [bookState, dispatch] = useReducer(
  //   bookCardReducer,
  //   BOOK_STATE_ACTIONS[0]
  // );

  // * Sets book state as selected or not / add book or subtract book
  const [selectBook, setSelectBook] = useState(false);

  // * Hover color state when user hovers over card
  const [onHoverColor, setOnHoverColor] = useState("white");

  // * The entire book collection user wants to be emailed in a card
  // const [collectedBooks, setCollectedBooks] = useState([]);

  // Handles book cover modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  //* Sets State of collapsible text tray in card description div
  const [show, setShow] = useState(false);

  // * Handles collapsible text tray state in card description div
  const handleToggle = () => setShow(!show);

  // ALLOWS THE USE OF CHAKRA TOAST
  let toast = useToast();

  /* ------------------------- */
  // INSERTS NEW BOOKS INTO SHARE ARRAY
  /* ------------------------- */

  function addBook(addedBook) {
    console.log("User added this book -> " + JSON.stringify(addedBook.name));
    // console.log("Old array: " + JSON.stringify(collectedBooks));
    // setCollectedBooks([...collectedBooks, addedBook]);
    collection.setBookCollection((prev) => [...prev, bookdetails]);
    // console.log("Updated array: " + JSON.stringify(collectedBooks));
    //
    return toast({
      title: "Book added to your wishlist!.",
      description: "Your book list is waiting for you to share!",
      status: "success",
      duration: 2400,
      isClosable: true,
    });
  }

  /* ------------------------- */
  // DELETES BOOKS FROM SHARE ARRAY
  /* ------------------------- */
  function minusBook(poppedBook) {
    console.log(
      "User took out this book -> " + JSON.stringify(poppedBook.name)
    );

    return toast({
      // REFACTOR
      title: "Book taken out of your wishlist!.",
      description: "That book wasn't interesting anyways!",
      status: "error",
      duration: 2400,
      isClosable: true,
    });
  }

  // * Preventative fallback if book cover fails to load at all.
  const addImageFallback = (e) => {
    e.currentTarget.src = "../../images/missing-cover.png";
    console.log(`This book does not have an image loaded!`);
  };

  return (
    <Center key={props.name + "book"}>
      {/* ------------------------- */}
      {/* MODAL */}
      {/* ------------------------- */}
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay alignContent={"center"} />
        <ModalContent justifyContent={"center"}>
          <ModalHeader fontSize={"1rem"}>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            alignContent={"center"}
            alignItems={"center"}
            alignSelf={"center"}
            width={"100%"}
            p={2}
          >
            <Box width={"100%"}>
              {/* error handle this! Fallback not working and sometimes errors out */}

              <Image
                src={
                  props.cover === undefined
                    ? missingBook
                    : `https://covers.openlibrary.org/b/id/${props.cover}-L.jpg`
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

      {/* conditional render here to check to see if there is even a book --> render an empty book card template */}
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        backgroundColor={onHoverColor}
        border={"4px"}
        borderColor={selectBook ? "darkcyan" : "transparent"}
        className="show fadeIn"
        padding={"8px"}
        margin={1}
        variant="outline"
        marginBottom={"25px"}
        w={{ sm: "90%", md: "90%", lg: "75%" }} // mobile
        // w={"60%"} // full
        boxShadow="xl"
        cursor={"pointer"}
      >
        <Stack
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          align={"center"}
        >
          <Image
            objectFit="contain"
            fit={"contain"}
            // maxW={{ lg: "325px", sm: "325px" }}
            alignContent={"center"}
            src={
              props.cover === undefined
                ? missingBook
                : `https://covers.openlibrary.org/b/id/${props.cover}-L.jpg`
            }
            alt={props.title + " book cover"}
            fallbackSrc={missingBook}
            onError={(e) => addImageFallback}
            onClick={onOpen}
          />

          <Stack>
            <CardBody
              letterSpacing={"0.5px"}
              onMouseEnter={(e) => {
                setOnHoverColor("rgba(228, 233, 237)");
              }}
              onMouseLeave={(e) => {
                setOnHoverColor("white");
              }}
            >
              <Box
                position={"absolute"}
                className="bookmark-slide"
                top={selectBook ? "-4px" : "-28px"}
                right="5"
                overflow={"hidden"}
                zIndex={2}
              >
                <RiBookmark3Fill
                  className="bookmark-icon"
                  fill={selectBook ? "darkcyan" : "lightgrey"}
                  size={"3em"}
                />
              </Box>
              <Divider zIndex={1} size={"lg"} />
              <Heading size="lg">{props.title}</Heading>
              <Heading size="xs" color={"grey"}>
                {props.author_name}
              </Heading>
              <Text fontSize="xs" as="i" color={"grey"}>
                {props.subject.slice(0, 3)}
              </Text>
              <br />
              <Text fontSize="xs" as="i" color={"grey"}>
                {`ISBN: ${props.isbn[0]}`}
              </Text>

              <Collapse
                startingHeight={90}
                in={show}
                border="1px"
                borderColor="gray.200"
              >
                <Text p={4}>{props.description}</Text>
              </Collapse>
              <Button
                leftIcon={show ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
                size="sm"
                onClick={handleToggle}
                mt="1rem"
              >
                Show {show ? "Less" : "More"}
              </Button>
            </CardBody>
            <CardFooter alignSelf={"center"}>
              <Wrap
                gap="4px"
                justify={"center"}
                onClick={(e) => e.stopPropagation()}
              >
                {/* // todo: Fix array index 0 issue  */}
                {/* <BookCardButtons props={props} /> */}
              </Wrap>
            </CardFooter>
            <Button
              colorScheme={selectBook ? "red" : "teal"}
              variant="solid"
              leftIcon={selectBook ? <FaMinusCircle /> : <FaPlusCircle />}
              padding={2}
              onClick={() => {
                setSelectBook(!selectBook);
                selectBook ? minusBook(bookdetails) : addBook(bookdetails);
              }}
            >
              {selectBook ? "Take out Book" : "Add Book"}
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Center>
  );
}

export default BookCard;
