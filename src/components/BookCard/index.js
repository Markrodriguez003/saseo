import {
  Box,
  Image,
  Heading,
  CardBody,
  CardFooter,
  Text,
  Center,
  Card,
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
  Flex,
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

// Context globals  data of bookCollection
import { SearchData } from "components/pages/BookSuggestion";

// LIBRARY
// import { bookCardReducer, BOOK_STATE_ACTIONS } from "lib/BookCardReducer";

// COMPONENTS
import BookCardButtons from "components/BookCard/BookCardButtons";
import BookCoverAnimation from "components/ui/BookCoverAnimation";

// * Creates Book card filled with book info
function BookCard(book) {
  // Extract only function and state
  const context = useContext(SearchData);

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

  // todo: Research instead of async/await should I use useEffect?
  async function addBook() {
    await context.setBookCollection((prev) => [
      ...prev,
      {
        title: book.title,
        author: book.author_name,
        isbn: book.isbn[0] !== undefined ? book.isbn[0] : book.isbn,
      },
    ]);

    return toast({
      title: "Book added to your wishlist!.",
      description: "Your book list is waiting for you to share!",
      status: "success",
      duration: 2400,
      isClosable: true,
      position: "bottom-right",
    });
  }

  /* ------------------------- */
  // DELETES BOOKS FROM SHARE ARRAY
  /* ------------------------- */
  async function minusBook(e) {
    // console.log(`Collected books: ${JSON.stringify(context.bookCollection)}`);
    // let index = context.bookCollection.findIndex((b) => b.title === book.title)
    // console.log(`Book that needs to be deleted: ${index}`);
    console.log(
      `This is the current collection before delete: ${JSON.stringify(
        context.bookCollection
      )}`
    );

    let updatedBookCollection = context.bookCollection.filter(
      (b) => b.title !== book.title
    );
    await context.setBookCollection(updatedBookCollection);
    console.log(
      `This is the current collection after delete: ${JSON.stringify(
        updatedBookCollection
      )}`
    );

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

  // * Preventative fallback if book cover fails to load at all.
  const addImageFallback = (e) => {
    e.currentTarget.src = "../../images/missing-cover.png";
    console.log(`This book does not have an image loaded!`);
  };

  return (
    <Center key={book.name + "-book-card"}>
      {/* //TODO MOVE THIS MODAL TO COMPONENT AND ADD CONTENT VIA DATA ARRAY FOR EVERY SITUATION */}
      {/* ------------------------- */}
      {/* MODAL */}
      {/* ------------------------- */}
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay alignContent={"center"} />
        <ModalContent justifyContent={"center"}>
          <ModalHeader fontSize={"1rem"}>{book.title}</ModalHeader>
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
                  book.cover === undefined
                    ? missingBook
                    : `https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`
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

      {/* // todo: conditional render here to check to see if there is even a book --> render an empty book card template */}
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
        h={"850px"}
        boxShadow="lg"
        cursor={"pointer"}
      >
        {/* *************** */}
        {/* CARD BOOK IMAGE */}
        {/* *************** */}
        <Box
          w={{ lg: "325px", sm: "325px" }}
          backgroundColor={"background"}
          onClick={onOpen}
        >
          <BookCoverAnimation
            cover={book.cover}
            author_name={book.author_name}
            title={book.title}
            // src={
            //   book.cover === undefined
            //     ? missingBook
            //     : `https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`
            // }
            // onClick={onOpen}
          />

          {/* <Image
            objectFit="cover"
            fit={"cover"}
            alignContent={"center"}
            src={
              book.cover === undefined
                ? missingBook
                : `https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`
            }
            alt={book.title + " book cover"}
            fallbackSrc={missingBook}
            onError={(e) => addImageFallback}
            onClick={onOpen}
          /> */}
        </Box>

        {/* *************** */}
        {/* CARD BOOK INFO BODY */}
        {/* *************** */}
        <Flex
          w={"100%"}
          flexDirection={"column"}
          justifyContent={"center"}
          justify={"center"}
          align={"center"}
          alignContent={"center"}
        >
          <CardBody
            letterSpacing={"0.5px"}
            onMouseEnter={(e) => {
              setOnHoverColor("rgba(228, 233, 237)");
            }}
            onMouseLeave={(e) => {
              setOnHoverColor("white");
            }}
            w={"725px"}
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

            {/* *********** */}
            {/* CARD BODY  */}
            {/* *********** */}
            <Divider zIndex={1} size={"lg"} />
            {/* // todo: Capitalize each word of title. Sometimes it doesn't come out cleanly. */}
            <Heading size="lg">{book.title}</Heading>
            <Heading size="xs" color={"grey"}>
              {book.author_name}
            </Heading>
            <Text fontSize="xs" as="i" color={"grey"}>
              {book.subject.slice(0, 3)}
            </Text>
            <br />
            <Text fontSize="xs" as="i" color={"grey"}>
              {`ISBN: ${book.isbn[0]}`}
            </Text>

            <Collapse startingHeight={90} in={show}>
              {/* // todo: Format any and all paragraphs to fit. Some description text overlaps/overflows */}
              <Text p={4}>{book.description}</Text>
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
          {/* *********** */}
          {/* CARD FOOTER */}
          {/* *********** */}
          <CardFooter alignSelf={"center"} backgroundColor={"lavender"}>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignContent={"center"}
              align={"center"}
              justify={"center"}
              backgroundColor={"limegreen"}
            >
              <Flex flexDirection={"row"} wrap={"wrap"}>
                <BookCardButtons props={book} />
              </Flex>
              <Button
                colorScheme={selectBook ? "red" : "teal"}
                variant="solid"
                w={"90%"}
                p={"60px"}
                leftIcon={selectBook ? <FaMinusCircle /> : <FaPlusCircle />}
                padding={2}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setSelectBook(!selectBook);
                  selectBook ? minusBook() : addBook();
                }}
              >
                {selectBook ? "Take out Book" : "Add Book"}
              </Button>
            </Flex>
          </CardFooter>
        </Flex>
      </Card>
    </Center>
  );
}

export default BookCard;
