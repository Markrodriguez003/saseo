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
} from "@chakra-ui/react";

// ICONS

import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaGoodreads, FaAudible, FaGoogle, FaAmazon } from "react-icons/fa";
import { useState } from "react";

import missingB from "../../images/missing-cover.png";

function BookButtonGrouper(props) {
  let btnGroup = props.map((book) => {
    <WrapItem>
      <Tooltip
        label={
          props.amazon !== null
            ? "Book not available on amazon!"
            : "See book available on Amazon!"
        }
        color={props.amazon !== null ? "grey" : "black"}
        placement="top"
      >
        <Button
          variant="solid"
          backgroundColor={"gold"}
          src={props.amazon}
          isDisabled={props.amazon !== null ? true : false}
        >
          Amazon
        </Button>
      </Tooltip>
    </WrapItem>;
  });

  return btnGroup;
}

// Creates Book card filled with book info
export function BookCard(props) {
  const [selectBook, setSelectBook] = useState(false);
  const [onHoverColor, setOnHoverColor] = useState("white");
  return (
    <Center>
      {/* conditional render here to check to see if there is even a book --> render an empty book card template */}
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        backgroundColor={onHoverColor}
        border={selectBook ? "4px" : "0px"}
        borderColor={selectBook ? "darkcyan" : "none"}
        padding={"8px"}
        variant="outline"
        w={"90%"} // mobile
        // w={"60%"} // full
        onMouseEnter={(e) => {
          console.log("Hovering over card");
          setOnHoverColor("rgba(0,0,0,0.01)");
        }}
        onMouseLeave={(e) => {
          console.log("Hovering over card");
          setOnHoverColor("white");
        }}
        boxShadow="lg"
        onClick={() =>
          selectBook ? setSelectBook(!selectBook) : setSelectBook(true)
        }
      >
        <Box position={"absolute"} top="2" right="5">
          <IoIosCheckmarkCircle
            fill={selectBook ? "darkcyan" : "lightgrey"}
            size={"2.2em"}
          />
        </Box>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={props.cover}
          alt={props.name + " book cover"}
          fallbackSrc={missingB}
        />

        <Stack>
          <CardBody>
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
            {/* Book Buttions */}
            <Wrap gap="4px" justify={"center"} wrap={true}>
              <WrapItem>
                <Tooltip
                  label={
                    props.goodreads !== null
                      ? "Book not available on goodreads!"
                      : "See user reviews for this book!"
                  }
                  color={props.goodreads !== null ? "grey" : "black"}
                  placement="top"
                >
                  <Button
                    variant="solid"
                    backgroundColor={"darkCyan"}
                    color={"white"}
                    src={props.goodreads}
                    // isDisabled={props.goodreads !== null ? true : false}
                    leftIcon={<FaGoodreads />}
                  >
                    GoodReads
                  </Button>
                </Tooltip>
              </WrapItem>
              <WrapItem>
                <Tooltip
                  label={
                    props.amazon !== null
                      ? "Book not available on amazon!"
                      : "See book available on Amazon!"
                  }
                  color={props.amazon !== null ? "grey" : "black"}
                  placement="top"
                >
                  <Button
                    variant="solid"
                    backgroundColor={"gold"}
                    src={props.amazon}
                    isDisabled={props.amazon !== null ? true : false}
                    leftIcon={<FaAmazon />}
                  >
                    Amazon
                  </Button>
                </Tooltip>
              </WrapItem>
              <WrapItem>
                <Link href="https://chakra-ui.com" isExternal>
                  <Tooltip
                    label={
                      props.audible !== null
                        ? "Book not available on Audible!"
                        : "See book available on Audible!"
                    }
                    color={props.audible !== null ? "grey" : "black"}
                    placement="top"
                  >
                    <Button
                      variant="link"
                      backgroundColor={"orange"}
                      src={props.audible}
                      // isDisabled={props.audible !== null ? true : false}
                      leftIcon={<FaAudible />}
                    >
                      Audible
                    </Button>
                  </Tooltip>
                </Link>
              </WrapItem>
              <WrapItem>
                <Tooltip
                  label={
                    props.google !== null
                      ? "Book not available on google somehow!"
                      : "See more information about this book on google!"
                  }
                  color={props.google !== null ? "grey" : "black"}
                  placement="top"
                >
                  <Button
                    variant="solid"
                    color={"white"}
                    backgroundColor={"dodgerblue"}
                    src={props.google}
                    isDisabled={props.google !== null ? true : false}
                    leftIcon={<FaGoogle />}
                  >
                    Google
                  </Button>
                </Tooltip>
              </WrapItem>
            </Wrap>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
}

export default BookCard;

// Component render conditional

// {props.goodreads ? (
//   <WrapItem>
//   <Tooltip
//     label="See user reviews for this book!"
//     placement="top"
//   >
//     <Button
//       variant="solid"
//       color={"darkcyan"}
//       src={props.goodreads}
//     >
//       GoodReads
//     </Button>
//   </Tooltip>
// </WrapItem>
// ) : <></>}
