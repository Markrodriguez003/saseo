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
  Center,
} from "@chakra-ui/react";
import { FaSearch, FaBook } from "react-icons/fa";

import OrganizeBooks from "lib/OrganizeBooks";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";

import CountSlider from "../CountSlider";
import "./BookSuggestionForm.design.css";
import SearchResult from "components/SearchResult";
import BookLoader from "components/ui/BookLoader/BookLoader";

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

// --------------------------------------------------------------------- //
// Inserts fetched book data into variable
// --------------------------------------------------------------------- //

export function BookSearchForm() {


  
  const [collectedBooks, setCollectedBooks] = useState();
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

 

  //https://stackoverflow.com/questions/70120549/how-to-call-useeffect-again-on-button-click-in-react
  async function FetchBooks(searchSubject, searchAmount) {
 
    let search = `https://openlibrary.org/search.json?subject=${searchSubject}&limit=200&details=false&published_in=2000-2100&language:eng`;
    await axios
     .get(search)
      .then(function (response) {
 
        // console.log(response);
       const fetchedBooks = OrganizeBooks(response.data.docs, searchParameters.amount);
        setCollectedBooks(fetchedBooks);
        console.log("data is here baby --> " + fetchedBooks);

      }) 
      .catch(function (error) {
        // handle error
        console.log("This is the error when fetching books --> " + error);
      })
    
  }



  return (
    <>
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

      {/* ------------------------------------------ */}
      {/* Loading screen or search results */}
      {/* ------------------------------------------ */}
      {collectedBooks ? (
        <SearchResult fetchedBooks={collectedBooks} />
      ) : (
        <Box mt={20}>
          <Center>
            <BookLoader />
          </Center>
        </Box>
      )}
    </>
  );
}

export default BookSearchForm;
