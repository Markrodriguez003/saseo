// --------------------------------------------------------------------- //
// NOTES
// --------------------------------------------------------------------- //
// https://upmostly.com/tutorials/calling-a-react-component-on-button-click#:~:text=Building%20Out%20the%20Basic%20Structure&text=%2F*%20Write%20a%20button%20component,whenever%20the%20button%20is%20clicked.
//https://stackoverflow.com/questions/70120549/how-to-call-useeffect-again-on-button-click-in-react
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43

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
import SubjectDropdownOptions from "../SubjectDropdownOptions";
import OrganizeBooks from "lib/OrganizeBooks";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";

import CountSlider from "../CountSlider";
import "./BookSuggestionForm.design.css";
import SearchResult from "components/SearchResult";
import BookLoader from "components/ui/BookLoader/BookLoader";

// --------------------------------------------------------------------- //
// Inserts fetched book data into variable
// --------------------------------------------------------------------- //

export function BookSearchForm() {
  const [collectedBooks, setCollectedBooks] = useState();
  const [searchParameters, setSearchParameters] = useState({
    subject: "",
    amount: 1,
  });

  // GRABS THE BOOK AMOUNT FROM THE FORM (SLIDER)
  const BookAmount = (BookAmount) => {
    setSearchParameters((prev) => ({
      ...prev,
      amount: BookAmount,
    }));
  };

  // GRABS THE BOOK SUBJECT FROM THE FORM (DROPDOWN)
  const BookSubject = (subject) => {
    setSearchParameters((prev) => ({
      ...prev,
      subject: subject,
    }));
  };

  // ! ADD THROTTLE TO THIS API CALL SO USER DOESN'T IMMEDIATELY SPAM CLICK SUBMIT BUTTON / USEMEMO
  async function FetchBooks(searchSubject) {
    let search = `https://openlibrary.org/search.json?subject=${searchSubject}&limit=250&jscmd=data&details=true&published_in=2000-2100&language:eng?details=true`;
    await axios
      .get(search)
      .then((response) => {
        const fetchedBooks = OrganizeBooks(
          response.data.docs,
          searchParameters.amount
        );
        setCollectedBooks(fetchedBooks);
        // console.log("data is here baby --> " + fetchedBooks);
      })
      .catch(function (error) {
        // handle error
        console.log(
          "This application has drawn an error when fetching books --> " + error
        );
      });
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
            <SubjectDropdownOptions />
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
              FetchBooks(searchParameters.subject);
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

// OLD CODE USED OPEN BOOKS LIBRARY API
/* 

 async function FetchBooks(searchSubject) {
    let search = `https://openlibrary.org/search.json?subject=${searchSubject}&limit=250&jscmd=data&details=true&published_in=2000-2100&language:eng?details=true`;
    await axios
      .get(search)
      .then(function (response) {
        // console.log("TESTING TO SEE IF DESCRIPTION IS IN! : " + JSON.stringify(response))
        console.log(response)
        const fetchedBooks = OrganizeBooks(
          response.data.docs,
          searchParameters.amount
        );
        setCollectedBooks(fetchedBooks);
        // console.log("data is here baby --> " + fetchedBooks);
      })
      .catch(function (error) {
        // handle error
        console.log("This application has drawn an error when fetching books --> " + error);
      });
  }


*/
