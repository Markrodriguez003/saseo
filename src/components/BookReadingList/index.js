import { useState, useContext } from "react";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
  Text,
  Heading,
  Stack,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";

import "./BookReadingList.design.css";

// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //

// todo: https://www.geeksforgeeks.org/how-to-send-an-email-from-javascript/#
// todo: Use link above to send a pre-formatted email of book list suggestions to user and multiple emails!

// todo: https://shivekkhurana.medium.com/how-to-create-pdfs-from-react-components-client-side-solution-7f506d9dfa6d
// todo: Print react components to pdf to include in email
import { SearchData } from "components/pages/BookSuggestion";

export function BookReadingList() {
  const collection = useContext(SearchData);
  return (
    <>
      <Container maxW={"50%"} border={"4px"} borderWidth={"5px"} borderColor={"teal"} borderRadius={"25px"} p={6} mb={12}>
        {/* <Heading size="lg" textAlign={"center"} mb={5} border={"2px"} borderColor={"teal"} borderWidth={4} p={4}>Book Reading Share List</Heading> */}
        <Heading size="xl" color="white" backgroundColor="teal" textAlign={"center"} mb={5} border={"2px"} borderColor={"white"} borderWidth={4} p={4}>Book Reading Share List</Heading>
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
              // w={{ sm: "90%", md: "90%", lg: "75%" }} // m
              w={"100%"} // m
            >
              <CardHeader>
                <Heading size="md">{b.title}</Heading>
              </CardHeader>
              <CardBody>
                <Stack>
                  <Box>
                    <Text fontSize="sm">
                      Author(s): {b.author} <br />
                      ISBN: {b.isbn}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
              <StackDivider />
            </Card>
          ))
        ) : (
          <h1>Empty!</h1>
        )}
        <br />
        <br />
        <Heading color={"teal"} textAlign={"center"} mb={4}>Create share card of all books in your reading list!</Heading>
        <Center flex={"column"} gap={2}>
          <Button colorScheme="yellow" textAlign={"center"} size="lg">
            Share!
          </Button>
          <Button colorScheme="red" textAlign={"center"} size="lg">
            Empty List
          </Button>
        </Center>
      </Container>
    </>
  );
}
