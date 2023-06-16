import { Box, Text, Divider, Center, Heading, Image } from "@chakra-ui/react";
import { Suspense, useState, useContext } from "react";

// COMPONENTS
import BookCard from "../BookCard";
import book_examples from "../../data/book_examples.json";
import EmailShareCard from "../EmailShareCard";
import { fetchedBooksResults } from "lib/FetchBooks";

// ASSETS - IMAGES
import emptySearchImg from "../../images/NoBookFound.png";

// let books;
function BookCardAssembly(props) {
  // ARRAY OF BOOKS CARDS CREATED FROM JSON FILE ABOVE

  let books;

  // console.log("Book result -> " + book_examples.books.length);
  props.foundBooks
    ? (books = props.foundBooks.books.map((book, id) => (
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
        </Center>
      ));

  return books;
}

export function SearchResult({fetchedBooks}) {
  console.log("OI! THIS IS INSIDE SEARCH RESULT ---> " + fetchedBooks);
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="end"
        paddingBottom={2}
        paddingTop={4}
        marginBottom={20}

        // paddingRight={20}
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
          {fetchedBooks.length} Book Results Found!
        </Heading>
        <br />
        <br />
        <BookCardAssembly foundBooks={fetchedBooks} />
        {/* <EmailShareCard/> */}
      </Box>
    </>
  );
}

export default SearchResult;
