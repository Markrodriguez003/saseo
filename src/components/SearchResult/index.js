import { Box, Text, Divider, Center, Heading, Image } from "@chakra-ui/react";
import { Suspense, useState, useContext } from "react";

// COMPONENTS
import BookCard from "../BookCard";
import EmailShareCard from "../EmailShareCard";
import { fetchedBooksResults } from "lib/OrganizeBooks";
import { SearchData } from "components/pages/BookSuggestion";
// ASSETS - IMAGES
import emptySearchImg from "../../images/NoBookFound.png";

function BookCardAssembly(props) {
  // ARRAY OF BOOKS CARDS CREATED FROM JSON FILE ABOVE

  let books;

  // console.log("Book result -> " + book_examples.books.length);

  props.foundBooks
    ? (books = props.foundBooks.map((book, id) => (
        <Suspense>{BookCard(book)}</Suspense>
      )))
    : (books = (
        <Center
          flexDirection={"column"}
          textAlign={"center"}
          alignItems="center"
          key={"No-books-found"}
        >
          <Image src={emptySearchImg} boxSize="350px" borderRadius="full" />
          <Heading color={"grey"} paddingTop={6}>
            Unfortunately, No books found. :(
          </Heading>
          {console.log(
            "This is the books inside assembly--> " + props.foundBooks
          )}
        </Center>
      ));

  return books;
}

export function SearchResult(props) {
  // const test = useContext(SearchData);
  // console.log("OI! THIS IS INSIDE SEARCH RESULT ---> " + JSON.stringify(test.bookData));
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="end"
        paddingBottom={2}
        paddingTop={4}
        marginBottom={20}
      >
        <Divider />
        <Divider marginBottom={8} />
        <Heading
          color={"lightgrey"}
          as={"h6"}
          size={"sm"}
          float={"right"}
          paddingRight={10}
        >
          {props.fetchedBooks.length} Book Results Found!
        </Heading>
        <br />
        <br />
        <BookCardAssembly foundBooks={props.fetchedBooks} />

        {/*  //! This is firing everytime I change the form parameters. Leak? */}
        {/* {console.log("This is the books inside search result--> " + JSON.stringify(props.fetchedBooks))} */}
      </Box>
    </>
  );
}

export default SearchResult;
