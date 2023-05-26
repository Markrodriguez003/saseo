import {
  Box,
  Image,
  Heading,
  Button,
  CardBody,
  CardFooter,
  Text,
  Tooltip,
  Stack,
  Center,
  Card,
  Wrap,
  WrapItem,
  Link,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  useToast,
  cookieStorageManager,
} from "@chakra-ui/react";

// ICONS
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaGoodreads, FaAudible, FaGoogle, FaAmazon } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./BookCard.design.css";
// IMAGES
import missingB from "../../images/missing-cover.png";

// COMPONENTS

// Creates Book card filled with book info
function BookCard(props) {
  const [selectBook, setSelectBook] = useState(false);
  const [onHoverColor, setOnHoverColor] = useState("white");
  const [collectedBooks, setCollectedBooks] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let bookdetails = props;

  /* ------------------------- */
  // USEEFFECT WHEN SUGGESTED BOOK IS CLICKED ON
  /* ------------------------- */
  useEffect(() => {
    if (selectBook) {
      console.log("You added book!");
      // addBook();
    } else {
      console.log("You took out a book!");
      // minusBook();
    }

    return () => console.log("unmounting...");
  }, [selectBook]);

  /* ------------------------- */
  // CARD BUTTONS DETAILS
  /* ------------------------- */
  function BookCardButtons(bookdetails) {
    const bookBtnDetails = [
      {
        name: "GoodReads",
        label: "See reader reviews for this book!",
        background: "darkcyan",
        color: "white",
        icon: <FaGoodreads />,
        variant: "solid",
        alt: "Goodreads anchor button",
      },
      {
        name: "Amazon",
        label: "See available products and books for this book on amazon!",
        background: "gold",
        color: "black",
        icon: <FaAmazon />,
        variant: "solid",
        alt: "Amazon anchor button",
      },

      {
        name: "Audible",
        label: "Search for the audiobook version here!",
        background: "orange",
        color: "black",
        icon: <FaAudible />,
        variant: "solid",
        alt: "Audible anchor button",
      },
      {
        name: "Google",
        label: "Search for this book on Google Books!",
        background: "dodgerblue",
        color: "white",
        icon: <FaGoogle />,
        variant: "solid",
        alt: "Audible anchor button",
      },
    ];

    /* ------------------------- */
    // BOOK CARD BUTTON + ANCHOR LINKS
    /* ------------------------- */
    const cardBtns = bookBtnDetails.map((button, id) => {
      // Converting Button name to href link name from book object
      let bookSourceName = button.name.toLowerCase(); // works
      let source = bookdetails.props[bookSourceName];
      // console.log("The book name  --> " + bookSourceName + " and is of " + typeof(bookSourceName));
      // console.log("The book name + link  --> " + source);
      return (
        <WrapItem key={id + button.name}>
          <Tooltip
            label={
              !source ? `Not available on ${bookSourceName}` : button.label
            }
            color={"white"}
            placement="top"
          >
            <Link href={source} isExternal>
              <Button
                variant={button.variant}
                backgroundColor={button.background}
                color={button.color}
                leftIcon={button.icon}
                isDisabled={!source ? true : false}
              >
                {button.name}
              </Button>
            </Link>
          </Tooltip>
        </WrapItem>
      );
    });

    return cardBtns;
  }

  // ALLOWS THE USE OF CHAKRA TOAST
  let toast = useToast();

  /* ------------------------- */
  // INSERTS NEW BOOKS INTO SHARE ARRAY
  /* ------------------------- */
  function addBook(addedBook) {
    setSelectBook(true);
    console.log("User added this book -> " + JSON.stringify(addedBook.name));
    console.log("Old array: " + JSON.stringify(collectedBooks));
    setCollectedBooks([...collectedBooks, addedBook]);
    console.log("Updated array: " + JSON.stringify(collectedBooks));

    return toast({
      title: "Book added to basket!.",
      description: "Your book list is waiting for you to share!",
      status: "success",
      duration: 2800,
      isClosable: true,
    });
  }

  /* ------------------------- */
  // DELETES BOOKS FROM SHARE ARRAY
  /* ------------------------- */
  function minusBook(poppedBook) {
    setSelectBook(false);
    console.log(
      "User took out this book -> " + JSON.stringify(poppedBook.name)
    );

    return toast({
      // REFACTOR
      title: "Book taken out of basket!.",
      description: "That book wasn't interesting anyways!",
      status: "error",
      duration: 2800,
      isClosable: true,
    });
  }

  return (
    <Center key={props.name + "book"}>
      {/* ------------------------- */}
      {/* MODAL */}
      {/* ------------------------- */}
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay alignContent={"center"} />
        <ModalContent justifyContent={"center"}>
          <ModalHeader>{props.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            alignContent={"center"}
            alignItems={"center"}
            alignSelf={"center"}
            width={"100%"}
          >
            <Box width={"100%"}>
              <Image src={props.cover} boxSize={"650px"} align={"center"} />
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
        variant="outline"
        marginBottom={"25px"}
        w={"90%"} // mobile
        // w={"60%"} // full
        boxShadow="xl"
        cursor={"pointer"}
      >
        <Image
          objectFit="contain"
          fit={"contain"}
          maxW={{ base: "500px", sm: "200px" }}
          src={props.cover}
          alt={props.name + " book cover"}
          fallbackSrc={missingB}
          onClick={onOpen}
        />

        <Stack>
          <CardBody
            letterSpacing={"1px"}
            onMouseEnter={(e) => {
              setOnHoverColor("rgba(0,0,0,0.01)");
            }}
            onMouseLeave={(e) => {
              setOnHoverColor("white");
            }}
            onClick={() =>
              !selectBook ? addBook(bookdetails) : minusBook(bookdetails)
            }
          >
            <Box position={"absolute"} top="2" right="5">
              <IoIosCheckmarkCircle
                fill={selectBook ? "darkcyan" : "lightgrey"}
                size={"2.8em"}
              />
            </Box>
            <Heading size="md">{props.name}</Heading>
            <Heading size="xs" color={"grey"}>
              {props.author}
            </Heading>
            <Text fontSize="xs" as="i" color={"grey"}>
              {props.subject}
            </Text>
            <Text py="2">{props.blurb}</Text>
          </CardBody>
          <CardFooter>
            <Wrap gap="4px" justify={"center"}>
              <BookCardButtons props={props} />
            </Wrap>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
}

export default BookCard;
