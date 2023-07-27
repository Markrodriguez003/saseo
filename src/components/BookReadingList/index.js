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
  Button,
} from "@chakra-ui/react";
// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //
import { SearchData } from "components/pages/BookSuggestion";

export function BookReadingList() {
  const collection = useContext(SearchData);
  return (
    <>
      <Container>
        <Heading  size="lg">Book Reading Share List</Heading>
        {collection.bookCollection ? (
          collection.bookCollection.map((b) => (
            <Card key={`collected-${b.title}`} maxW='xl'>
              <CardHeader>
                <Heading size="md">{b.title}</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text pt="2" fontSize="sm">
                      Author(s): {b.author_name}
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
        <Button colorScheme="teal" alignContent={"center"}>Share!</Button>
      </Container>
    </>
  );
}
