// --------------------------------------------------------------------- //
// NOTES
// --------------------------------------------------------------------- //
// https://upmostly.com/tutorials/calling-a-react-component-on-button-click#:~:text=Building%20Out%20the%20Basic%20Structure&text=%2F*%20Write%20a%20button%20component,whenever%20the%20button%20is%20clicked.
//https://stackoverflow.com/questions/70120549/how-to-call-useeffect-again-on-button-click-in-react
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43

// --------------------------------------------------------------------- //
// External Components
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

//REACT
import { useState, useEffect } from "react";

// ICONS
import { FaSearch, FaBook } from "react-icons/fa";

// COMPONENTS
import DropdownOptions from "../ui/DropdownOptions";
import CountSlider from "../CountSlider";
import SearchResult from "components/SearchResult";
import BookLoader from "components/ui/BookLoader/BookLoader";
import { BookReadingList } from "components/BookReadingList";
import HeadingPanel from "components/ui/HeadingPanel";

// LIBRARY
import FetchBooks from "lib/FetchBooks";
import { useCookies } from "react-cookie";

// CSS DESIGN
import "./BookSuggestionForm.design.css";

// --------------------------------------------------------------------- //
//  Book search form & results panel
// --------------------------------------------------------------------- //

// todo: add language option
export function BookSearchForm() {
  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(["cookies_denied"]);
  // todo: Change this to useReducer(?)
  // sets the loading state of our search result (Blank, loading, error & results)
  const [loadState, setLoadState] = useState("Intial");
  // Sets the collected & organized books from our api request
  const [collectedBooks, setCollectedBooks] = useState([{}]);
  // Sets the search parameters user put into book genre search form
  const [searchParameters, setSearchParameters] = useState({
    subject: "",
    amount: 1,
    language: "eng",
  });

  // useEffect(() => {
  //   console.log("Hey this is the collected books! --> " + collectedBooks);
  // }, [collectedBooks]);

  // Grabs how many books user wants to see
  // todo: Change the amount and paginate results
  const BookAmount = (BookAmount) => {
    setSearchParameters((prev) => ({
      ...prev,
      amount: BookAmount,
    }));
  };

  // Grabs which book subject use wants to query
  // todo: Change it so user can add multiple genres
  const BookSubject = (subject) => {
    setSearchParameters((prev) => ({
      ...prev,
      subject: subject,
    }));
  };

  // Grabs which book language use wants to query
  // todo: Change it so user can add multiple genres
  const BookLanguage = (language) => {
    setSearchParameters((prev) => ({
      ...prev,
      language: language,
    }));
  };

  // HOLDS BOOKS
  let books;

  // Handles grabbing of formatted & organized books fetched from api & sets loading state
  // todo: Add cached/memoized version of this when user selects same seach parameters
  async function sendBooksRequest() {
    // cookies
    removeCookie("cookies_last_searched_genre", { path: "/" });
    setCookie("cookies_last_searched_genre", searchParameters.subject, {
      path: "/",
    });
    try {
      books = await FetchBooks(
        searchParameters.subject,
        searchParameters.amount,
        searchParameters.language
      );
      await setCollectedBooks(books);
      await setLoadState("Loaded");
    } catch (err) {
      console.log(err.message);
      loadState("Error");
    }
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection={"row"}
        alignItems="center"
        justifyContent="center"
        marginTop={0}
        marginBottom={2}
        backgroundColor={"mintcream"}
      >
        <VStack gap={"25px"}>
          <HeadingPanel>Find me a book!</HeadingPanel>

          <Flex flex flexDirection={"row"} textAlign={"center"}>
            <Select
              variant={"outline"}
              // backgroundColor={"darkcyan"}
              backgroundColor={"white"}
              // color={"white"}
              color={"black"}
              border={"3px solid darkcyan"}
              placeholder="Genre?"
              margin={"8px"}
              onChange={(e) => {
                BookSubject(e.target.value);
              }}
            >
              <DropdownOptions type={"subject"} />
            </Select>
            <Select
              variant={"outline"}
              // backgroundColor={"darkcyan"}
              backgroundColor={"white"}
              // color={"white"}
              color={"black"}
              border={"3px solid darkcyan"}
              margin={"8px"}
              placeholder="Language?"
              onChange={(e) => {
                BookLanguage(e.target.value);
              }}
            >
              <DropdownOptions type={"languages"} />
            </Select>
          </Flex>
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

          {/* todo: add a way that user can press enter to press search */}
          <Button
            leftIcon={<FaSearch />}
            colorScheme="teal"
            size="lg"
            onClick={() => {
              setLoadState("Loading");
              sendBooksRequest();
            }}
          >
            Search!
          </Button>
        </VStack>
     
      </Box>

      {/* ------------------------------------------ */}
      {/* Loading search results to either intial state, loading state, loaded state and error state */}
      {/* ------------------------------------------ */}
      {loadState === "Loaded" ? (
        <>
          <SearchResult fetchedBooks={collectedBooks} />
          <BookReadingList />
        </>
      ) : loadState === "Intial" ? (
        <></>
      ) : loadState === "Loading" ? (
        <Box mt={20}>
          <Center>
            <BookLoader />
          </Center>
        </Box>
      ) : (
        <>
          <h1>An error has occured!</h1>
        </>
      )}
    </>
  );
}

export default BookSearchForm;
