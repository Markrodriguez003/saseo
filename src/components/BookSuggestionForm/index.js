import { Box, Image, Flex, Heading, Button, Select, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import book_subjects from "../../data/book_subjects.json";

// EXTERNAL COMPONENTS
import CountSlider from "../CountSlider";

function BookGenreSelect() {
  //   const subjectsJSON = JSON.stringify(Object.keys(book_subjects.b_subjects[5])).replace(/[[\]]/g, '').replace(/[""]/g, '');

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  const subjects = book_subjects.b_subjects.map((book) => {
    // return(Object.keys(book));
    return <option value={Object.values(book)}>{Object.keys(book)} </option>;
  });

  console.log("This is it? --> " + subjects);

  return (
    <Select variant={"outline"} placeholder="Choose a book genre">
      {subjects}
    </Select>
  );
}

export function BookSuggestionForm() {
  return (
    <Box
      display="flex"
      flexDirection={"row"}
      alignItems="center"
      justifyContent="center"
      marginTop={8}
      marginBottom={8}
      w={"100%"}
      padding={"lg"}
    >
      <VStack gap={"25px"} >
        <Heading as="h1" size={"2xl"} color={"darkcyan"} textShadow='1px 1px darkgreen'>Find me a book!</Heading>
        <BookGenreSelect />
        <Flex w="100%" flex flexDirection={"column"} textAlign={"center"} gap={"12px"}>
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
