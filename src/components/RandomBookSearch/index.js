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
import { useState } from "react";
import { FaSearch, FaBook } from "react-icons/fa";
import DropdownOptions from "../ui/DropdownOptions";
import SearchResult from "components/SearchResult";
import BookLoader from "components/ui/BookLoader/BookLoader";
import FetchBooks from "lib/FetchBooks";
import HeadingPanel from "components/ui/HeadingPanel";
import RandomBookSubject from "lib/RandomBookSubject";
import RandomBookCoverAnimation from "components/ui/RandomBookCoverAnimation";

import { useEffect } from "react";

// todo: add language option
export function RandomBookSearch() {
  // todo: Change this to useReducer(?)
  // sets the loading state of our search result (Blank, loading, error & results)
  const [loadState, setLoadState] = useState("Intial");
  // Sets the collected & organized books from our api request
  const [collectedBooks, setCollectedBooks] = useState(undefined);
  // Sets the search parameters user put into book genre search form
  const [searchParameters, setSearchParameters] = useState({
    subject: "",
    amount: 1,
    language: "eng",
  });

  useEffect(() => {
    if (loadState !== "Intial") {
      console.log(
        `Parameters: ${searchParameters.amount}, ${searchParameters.subject}, ${searchParameters.language}`
      );
      sendBooksRequest();
    }
  }, [searchParameters.subject]);

  // Grabs which book language use wants to query
  // todo: Change it so user can add multiple genres
  const BookLanguage = (language) => {
    setSearchParameters((prev) => ({
      ...prev,
      language: language,
    }));
  };

  const BookSubject = (e) => {
    setSearchParameters((prev) => ({
      ...prev,
      subject: RandomBookSubject(),
    }));
  };

  // Handles grabbing of formatted & organized books fetched from api & sets loading state
  async function sendBooksRequest() {
    try {
      const books = await FetchBooks(
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
        marginBottom={8}
        backgroundColor={"mintcream"}
      >
        <VStack gap={"25px"}>
          <HeadingPanel>Suggest a Random Book!</HeadingPanel>

          {/* //todo: add a way that user can press enter to press search */}
          {/* //todo: add button animation (top and down movement) */}
          <Button
            leftIcon={<FaSearch />}
            colorScheme="teal"
            size="lg"
            onClick={() => {
              setLoadState("Loading");
              setSearchParameters((prev) => ({
                ...prev,
                subject: RandomBookSubject(),
              }));
              BookSubject();
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
        <SearchResult fetchedBooks={collectedBooks} />
      ) : loadState === "Intial" ? (
        <></>
      ) : loadState === "Loading" ? (
        <Box mt={20}>
          <Center>
            <RandomBookCoverAnimation />
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

export default RandomBookSearch;
