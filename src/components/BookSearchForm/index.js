import {
  Box,
  Flex,
  Heading,
  Button,
  Select,
  VStack,
  Center,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Switch,
} from "@chakra-ui/react";

//REACT
import { useState, useEffect, useMemo, useReducer, useRef } from "react";

// ICONS
import { FaSearch } from "react-icons/fa";

// COMPONENTS
import DropdownOptions from "../ui/DropdownOptions";
import CountSlider from "../CountSlider";
import SearchResult from "components/SearchResult";
import BookLoader from "components/ui/BookLoader/BookLoader";
import { BookReadingList } from "components/BookReadingList";
import HeadingPanel from "components/ui/HeadingPanel";

// LIBRARY
import { ACTION_TYPES } from "./searchActionTypes";
import FetchBooks from "lib/FetchBooks";
import { useCookies } from "react-cookie";
import { initialState, searchReducer } from "./searchFormReducer";

// CSS DESIGN
import "./BookSuggestionForm.design.css";
import OrganizeBooks from "lib/OrganizeBooks";

// --------------------------------------------------------------------- //
//  Book search form & results panel
// --------------------------------------------------------------------- //
export function BookSearchForm(props) {
  // todo: Change this to useReducer(?)
  // todo: cookies, search parameters, form expand/collapse, useMemo fn, misc. fn calls

  // * useReducer that controls all search form actions
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(["cookies_denied"]);

  // Sets the search parameters user put into book genre search form
  const [searchParameters, setSearchParameters] = useState({
    subject: "",
    amount: 1,
    language: "eng",
  });

  const [finalBooks, setFinalBooks] = useState();

  // Holds the ref of users search parameters so not to re-render paget
  const unSubmittedParameters = useRef({
    subject: "",
    amount: 1,
    language: "eng",
  });

  // Grabs how many books user wants to see
  // todo: Change the amount and paginate results
  const BookAmount = (BookAmount) => {
    unSubmittedParameters.current = {
      ...unSubmittedParameters.current,
      amount: BookAmount,
    };
  };

  // Grabs which book subject use wants to query
  // todo: Change it so user can add multiple genres
  const BookSubject = (subject) => {
    unSubmittedParameters.current = {
      ...unSubmittedParameters.current,
      subject: subject,
    };
  };

  // * FETCHES DATA FROM API & CACHES PREVIOUS VALUE IF SEARCH PARAMETERS ARE THE SAME
  // const booksToBeOrganized = useMemo(async () => {
  //   console.log(`These are the search parameters: `, searchParameters);
  //   if (searchParameters.subject.length < 1) {
  //     console.log("This search response is empty");
  //   } else {
  //     console.log("Search parameters have something");
  //     // let books = await FetchBooks(searchParameters);
  //     // return books;
  //   }

  //   // return searchParameters.subject !== "" || searchParameters !== undefined
  //   //   ? books
  //   //   : "";
  // }, [searchParameters]);

  useEffect(() => {
    // * HANDLES USER SUBMIT
    async function handleSubmit() {
      // * SETS / RESETS COOKIES
      removeCookie("cookies_last_searched_genre", { path: "/" });
      setCookie("cookies_last_searched_genre", searchParameters.subject, {
        path: "/",
      });

      dispatch({ type: ACTION_TYPES._SUBMIT_SEARCH });

      try {
        setSearchParameters(unSubmittedParameters.current);
        console.log("Search parameters: ", searchParameters);
        const fetchedBooks = await FetchBooks(searchParameters);
        const organizedBooks = await OrganizeBooks(
          fetchedBooks,
          searchParameters.amount
        );
        setFinalBooks(organizedBooks);
        dispatch({ type: ACTION_TYPES._SUCCESSFUL_SEARCH });
      } catch {
        console.log(`An error has occurred!`);
        dispatch({ type: ACTION_TYPES._FAILED_SEARCH });
      }
    }

    handleSubmit();
  }, [searchParameters]);

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
        <VStack gap={"20px"}>
          <HeadingPanel>Find me a book!</HeadingPanel>

          <Accordion
            defaultIndex={0}
            index={state.toggle_form_window}
            w={"100%"}
            allowToggle
          >
            <AccordionItem
              w={{
                base: "xl",
                "2xl": "xl",
                xl: "xl",
                lg: "xl",
                md: "xl",
                sm: "md",
                xs: "xs",
                "2xs": "260px",
              }}
            >
              <h2>
                <AccordionButton
                  onClick={() => {
                    dispatch({ type: ACTION_TYPES._TOGGLE_SEARCH_FORM });
                  }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Book Suggestion Form
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <br />
              <AccordionPanel pb={4}>
                <VStack gap={"20px"}>
                  <Heading
                    as="h3"
                    size="xs"
                    color={"grey"}
                    textAlign={"center"}
                  >
                    What book genre would you like?
                  </Heading>
                  <Flex flex flexDirection={"row"} textAlign={"center"}>
                    <Select
                      variant={"outline"}
                      backgroundColor={"white"}
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

                  <Heading
                    as="h3"
                    size="xs"
                    color={"grey"}
                    textAlign={"center"}
                  >
                    Enable strange books? <br /> (No isbn, cover and/or author)
                  </Heading>
                  <Switch id="strange-books" />
                  {/* // todo: add a way that user can press enter to press search */}
                  <Button
                    loadingText="Submitting"
                    leftIcon={<FaSearch />}
                    colorScheme="teal"
                    size="lg"
                    onClick={() => {
                      setSearchParameters(unSubmittedParameters.current);
                    }}
                  >
                    Search!
                  </Button>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Box>

      {/* ------------------------------------------ */}
      {/* Loading search results to either initial state, loading state, loaded state and error state */}
      {/* ------------------------------------------ */}
      {state.load_state === "Loaded" && finalBooks !== undefined ? (
        <>
          <SearchResult fetchedBooks={finalBooks} />
          <BookReadingList />
        </>
      ) : state.load_state === "Initial" ? (
        <></>
      ) : state.load_state === "Front-Page" ? (
        <>
          <h1>Loading docs from front page selection</h1>
        </>
      ) : state.load_state === "Loading" ? (
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

// todo: Add language selection for book searh
/*


 <Select
              variant={"outline"}
              backgroundColor={"white"}
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

              // Grabs which book language use wants to query
  // todo: Change it so user can add multiple genres
  // const BookLanguage = (language) => {
  //   setSearchParameters((prev) => ({
  //     ...prev,
  //     language: language,
  //   }));
  // };
*/
