import { useState, useContext } from "react";
import { Container } from "@chakra-ui/react";
// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //
import { SearchData } from "components/pages/BookSuggestion";

export function BookReadingList() {
  const collection = useContext(SearchData);
  return (
    <>
      <Container>
        {collection.bookCollection ? (
          collection.bookCollection.map((b) => (
            <h1 style={{ font: "35px", color: "red" }}>{b.title}</h1>
          ))
        ) : (
          <h1>Empty!</h1>
        )}
      </Container>

      {/* {console.log(
          `This is the current book collectioN::::::: ${JSON.stringify(
            bookCollection
          )}`
        )}
        ;{console.dir(bookCollection)}; */}
    </>
  );
}
