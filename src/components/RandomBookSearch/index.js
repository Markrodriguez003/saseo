import { Box, Button, VStack, Center } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch, FaBook } from "react-icons/fa";

import SearchResult from "components/SearchResult";
import OrganizeBooks from "lib/OrganizeBooks";
import FetchBooks from "lib/fetchBooks";
import HeadingPanel from "components/ui/HeadingPanel";
import RandomBookSubject from "lib/RandomBookSubject";
import RandomBookCoverAnimation from "components/ui/RandomBookCoverAnimation";

// todo: add language option
export function RandomBookSearch() {
  // todo: Change this to useReducer(?)
  // sets the loading state of our search result (Blank, loading, error & results)
  const [loadState, setLoadState] = useState("Intial");
  // Sets the collected & organized books from our api request
  const [collectedBooks, setCollectedBooks] = useState(undefined);

  // Handles grabbing of formatted & organized books fetched from api & sets loading state
  async function sendBooksRequest() {
    let randomBook = RandomBookSubject();
    console.log(`Random book subject chosen: `, { subject: randomBook[0] });
    try {
      const books = await FetchBooks({ subject: randomBook[0] });
      console.log(`Fetched books: `, books);
      const finalizedBook = await OrganizeBooks(books, 1);
      console.log(`Organized book: `, finalizedBook);
      setCollectedBooks(finalizedBook);
      setLoadState("Loaded");
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
            isLoading={loadState === "Loading" ? true : false}
            loadingText="Finding"
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
