import {
  Box,
  Image,
  Heading,
  Link,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";

import BookCard from "../BookCard";
import book_examples from "../../data/book_examples.json";

// let books;
function BookCardAssembly(props) {
  // ARRAY OF BOOKS CARDS CREATED FROM JSON FILE ABOVE
  let books = book_examples.books.map((book, id) => BookCard(book));

  return books;
}

export function SearchResult() {
  return (
    <Box
      alignItems="center"
      justifyContent="end"
      paddingBottom={2}
      paddingTop={14}
      marginBottom={6}
      // paddingRight={20}
    >
      <Heading color={"lightgrey"} as={"h5"} size={"md"} float={"right"}>
        3 : Book Results Found!
      </Heading>
      <br/>
      <br/>
      <BookCardAssembly/>
    </Box>
  );
}

export default SearchResult;
