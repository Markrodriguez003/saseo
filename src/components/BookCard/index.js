import {
  Box,
  Image,
  Heading,
  Button,
  Select,
  Divider,
  CardBody,
  CardFooter,
  Text,
  ButtonGroup,
  Stack,
  Tooltip,
  HStack,
  Center,
  Card,
} from "@chakra-ui/react";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from "react";

export function BookCard() {
  const [selectBook, setSelectBook] = useState(false);
  const [onHoverColor, setOnHoverColor] = useState("white");
  return (
    <Center>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        backgroundColor={onHoverColor}
        variant="outline"
        w={"90%"} // mobile
        // w={"60%"} // full
        onMouseEnter={(e)=>{
          
          console.log("Hovering over card");
          setOnHoverColor("rgba(0,0,0,0.01)");
        }}
        onMouseLeave={(e)=>{
          
          console.log("Hovering over card");
          setOnHoverColor("white");
        }}
        
        
        boxShadow="lg"
        onClick={() => selectBook ? setSelectBook(!selectBook) : setSelectBook(true)}
      >
        <Box position={"absolute"} top="2" right="5">
          <IoIosCheckmarkCircle

            fill={selectBook ? "darkcyan" : "lightgrey"}
            size={"2.2em"} />
        </Box>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          // src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          src="https://m.media-amazon.com/images/P/0544003411.01._SCLZZZZZZZ_SX500_.jpg"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">The Lord Of The Rings</Heading>
            <Heading size="xs" color={"grey"}>
              Christopher Tolkien
            </Heading>
            <Text fontSize="xs"as='i' color={"grey"}>
              Fantasy / Adventure
            </Text>

            <Text py="2">
              The epic fantasy novel about a group of races that need to work
              together to rid of the world of the one true ring from the forces
              of evil.
            </Text>
          </CardBody>

          <CardFooter>
            <HStack gap="4px" justify={"center"}>
              <Tooltip label="See user reviews for this book!" placement="top">
                <Button variant="solid" color={"darkcyan"}>
                  GoodReads
                </Button>
              </Tooltip>
              <Text> | </Text>
              <Tooltip label="See if book is available on Amazon!" placement="top">
                <Button variant="solid" backgroundColor={"gold"}>
                  Amazon
                </Button>
              </Tooltip>
              <Tooltip label="See if there is an audiobook!" placement="top">
                <Button variant="solid" backgroundColor="orange">
                  Audible
                </Button>
              </Tooltip>
              <Tooltip label="Google this book!" placement="top">
                <Button variant="solid" colorScheme="blue">
                  Google
                </Button>
              </Tooltip>
            </HStack>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
}

export default BookCard;
