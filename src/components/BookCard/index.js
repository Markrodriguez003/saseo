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
} from "@chakra-ui/react";

// ICONS
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaGoodreads, FaAudible, FaGoogle, FaAmazon } from "react-icons/fa";
import { useState } from "react";

// IMAGES
import missingB from "../../images/missing-cover.png";

// COMPONENTS

// export function BookCardButtons(props) {
//   const bookBtnDetails = [
//     {
//       name: "GoodReads",
//       label: "See reader reviews for this book!",
//       color: "darkcyan",
//       icon: <FaGoodreads />,
//       variant: "solid",
//       alt: "Goodreads anchor button",
//     },
//     {
//       name: "Amazon",
//       label: "See available products and books for this book on amazon!",
//       color: "gold",
//       icon: <FaAmazon />,
//       variant: "solid",
//       alt: "Amazon anchor button",
//     },

//     {
//       name: "Audible",
//       label: "Search for the audiobook version here!",
//       color: "orange",
//       icon: <FaAudible />,
//       variant: "solid",
//       alt: "Audible anchor button",
//     },
//     {
//       name: "Google",
//       label: "Search for this book on Google Books!",
//       color: "dodgerblue",
//       icon: <FaGoogle />,
//       variant: "solid",
//       alt: "Audible anchor button",
//     },
//   ];

//   const cardBtns = bookBtnDetails.map((button, id) => {
//     let name = button.name.toLowerCase();
//     return (
//       <WrapItem key={{id}}>
//         <Tooltip
//           label={props.props.name !== null ? "Not available" : button.label}
//           color={props.props.name !== null ? "grey" : "black"}
//           placement="top"
//         >
//           <Button
//             variant={button.variant}
//             backgroundColor={button.color}
//             color={"white"}
//             src={name}
//             leftIcon={button.icon}
//           >
//             {button.name}
//           </Button>
//         </Tooltip>
//       </WrapItem>
//     );
//   });

//   return cardBtns;
// }

// Creates Book card filled with book info
function BookCard(props) {
  const [selectBook, setSelectBook] = useState(false);
  const [onHoverColor, setOnHoverColor] = useState("white");

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  let bookdetails = props;

  // button
  function BookCardButtons(bookdetails) {
    const bookBtnDetails = [
      {
        name: "GoodReads",
        label: "See reader reviews for this book!",
        color: "darkcyan",
        icon: <FaGoodreads />,
        variant: "solid",
        alt: "Goodreads anchor button",
      },
      {
        name: "Amazon",
        label: "See available products and books for this book on amazon!",
        color: "gold",
        icon: <FaAmazon />,
        variant: "solid",
        alt: "Amazon anchor button",
      },

      {
        name: "Audible",
        label: "Search for the audiobook version here!",
        color: "orange",
        icon: <FaAudible />,
        variant: "solid",
        alt: "Audible anchor button",
      },
      {
        name: "Google",
        label: "Search for this book on Google Books!",
        color: "dodgerblue",
        icon: <FaGoogle />,
        variant: "solid",
        alt: "Audible anchor button",
      },
    ];

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
              !source 
              ? `Not available on ${bookSourceName}`
              : button.label
            }
            // color={!source ? "black" : "grey"}
            color={"grey"}
            placement="top"
          >
            <Link href={source} isExternal>
              <Button
                variant={button.variant}
                backgroundColor={button.color}
                color={"white"}
                leftIcon={button.icon}
                isDisabled={
                  !source 
                    ? true
                    : false
                }
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

  return (
    <Center key={props.name + "book"}>
      {/* ------------------------- */}
      {/* MODAL */}
      {/* ------------------------- */}
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent justifyContent={"center"}>
          <ModalHeader>{props.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image src={props.cover} boxSize={"450px"} align={"center"} />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* ------------------------- */}
      {/* BOOK CARD */}
      {/* ------------------------- */}
      {/* conditional render here to check to see if there is even a book --> render an empty book card template */}
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        backgroundColor={onHoverColor}
        border={selectBook ? "4px" : "0px"}
        borderColor={selectBook ? "darkcyan" : "none"}
        padding={"8px"}
        variant="outline"
        marginBottom={"25px"}
        w={"90%"} // mobile
        // w={"60%"} // full
        boxShadow="lg"
      >
        <Box position={"absolute"} top="2" right="5">
          <IoIosCheckmarkCircle
            fill={selectBook ? "darkcyan" : "lightgrey"}
            size={"2.8em"}
            onClick={() =>
              selectBook ? setSelectBook(!selectBook) : setSelectBook(true)
            }
          />
        </Box>
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
              selectBook ? setSelectBook(!selectBook) : setSelectBook(true)
            }
          >
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
            {/* ------------------------- */}
            {/* BOOK CARD BUTTONS */}
            {/* ------------------------- */}
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

 