import { Box, Flex, Heading, Button, Select, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import book_subjects from "../../data/book_subjects.json";

// EXTERNAL COMPONENTS
import CountSlider from "../CountSlider";

// --------------------------------------------------------------------- //
// NOTES
// --------------------------------------------------------------------- //
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// ? Has to be async? & Move to separate file?
// --------------------------------------------------------------------- //
// Book subject select component
// --------------------------------------------------------------------- //
function BookGenreSelect(options) {
  // --------------------------------------------------------------------- //
  // Sorts the JSON data of book subjects (will be used with API call)
  // --------------------------------------------------------------------- //

  const sorted_subjects = book_subjects.b_subjects.sort((a, b) =>
    Object.keys(a) > Object.keys(b)
      ? 1
      : Object.keys(a) < Object.keys(b)
      ? -1
      : 0
  );

  // --------------------------------------------------------------------- //
  // Inserts sorted book subjects into individual select option components
  // --------------------------------------------------------------------- //

  const subjects = sorted_subjects.map((book) => {
    return (
      <option key={Object.keys(book)} value={Object.values(book)}>
        {Object.keys(book)}{" "}
      </option>
    );
  });

  // --------------------------------------------------------------------- //
  // Inserts array of option components into select component
  // --------------------------------------------------------------------- //
  return (
    <Select variant={"outline"} placeholder="Choose a book genre">
      {subjects}
    </Select>
  );
}

// --------------------------------------------------------------------- //
// Book suggestion form
// --------------------------------------------------------------------- //

export function BookSuggestionForm() {
  return (
    <Box
      display="flex"
      flexDirection={"row"}
      alignItems="center"
      justifyContent="center"
      marginTop={14}
      marginBottom={8}
      w={"100%"}
      padding={"lg"}
    >
      <VStack gap={"25px"}>
        <Heading
          as="h1"
          size={"2xl"}
          color={"darkcyan"}
          textShadow="1px 1px darkgreen"
        >
          Find me a book!
        </Heading>
        <BookGenreSelect />
        <Flex
          w="100%"
          flex
          flexDirection={"column"}
          textAlign={"center"}
          gap={"12px"}
        >
          <Heading as="h3" size="xs" color={"grey"}>
            How many book suggestions?
          </Heading>
          <CountSlider />
        </Flex>
        <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg">
          Search!
        </Button>
      </VStack>
    </Box>
  );
}

export default BookSuggestionForm;
