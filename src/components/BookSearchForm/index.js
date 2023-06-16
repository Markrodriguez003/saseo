// --------------------------------------------------------------------- //
// NOTES
// --------------------------------------------------------------------- //

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43

// --------------------------------------------------------------------- //
// TEST DATA
// --------------------------------------------------------------------- //
import book_subjects from "../../data/book_subjects.json";

// --------------------------------------------------------------------- //
// EXTERNAL COMPONENTS
// --------------------------------------------------------------------- //
import {
  Box,
  Flex,
  Heading,
  Button,
  Select,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaSearch, FaBook } from "react-icons/fa";

import FetchBooks from "lib/FetchBooks";

import { useState } from "react";

import CountSlider from "../CountSlider";
import "./BookSuggestionForm.design.css";

// ? Has to be async? & Move to separate file?
// --------------------------------------------------------------------- //
// Book subject select component
// --------------------------------------------------------------------- //
function BookSubjectsOptions(options) {
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
      <option
        key={Object.keys(book)}
        className="select_placeholder"
        value={Object.values(book)}
        style={{ color: "black", backgroundColor: "white" }}
      >
        {Object.keys(book)}{" "}
      </option>
    );
  });

  // --------------------------------------------------------------------- //
  // Inserts array of option components into select component
  // --------------------------------------------------------------------- //
  return subjects;
}

// --------------------------------------------------------------------- //
// Book suggestion form
// --------------------------------------------------------------------- //

export function BookSearchForm() {
  const [searchParameters, setSearchParameters] = useState({
    subject: "",
    amount: 1,
  });

  const BookAmount = (BookAmount) => {
    setSearchParameters((prev) => ({
      ...prev,
      amount: BookAmount,
    }));
  };

  const BookSubject = (subject) => {
    setSearchParameters((prev) => ({
      ...prev,
      subject: subject,
    }));
  };

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      alignItems="center"
      justifyContent="center"
      marginTop={0}
      marginBottom={8}
      backgroundColor={"mintcream"}
      // backgroundColor={"#A2E4B8"}
    >
      <VStack gap={"25px"}>
        <HStack>
          <FaBook size={"45px"} color="darkcyan" />

          <Heading
            as="h1"
            size={"2xl"}
            color={"darkcyan"}
            textShadow="1px 1px darkgreen"
          >
            Find me a book!
          </Heading>
        </HStack>
        <Select
          variant={"outline"}
          // backgroundColor={"darkcyan"}
          backgroundColor={"white"}
          // color={"white"}
          color={"black"}
          border={"3px solid darkcyan"}
          placeholder="Choose a book genre"
          onChange={(e) => {
            BookSubject(e.target.value);
          }}
        >
          <BookSubjectsOptions />
        </Select>
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
          <CountSlider BookAmount={BookAmount} />
        </Flex>
        <Button
          leftIcon={<FaSearch />}
          colorScheme="teal"
          size="lg"
          onClick={() => {
            FetchBooks(searchParameters.subject, searchParameters.amount);
          }}
        >
          Search!
        </Button>
      </VStack>
    </Box>
  );
}

export default BookSearchForm;
