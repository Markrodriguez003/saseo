import { useState, createContext } from "react";

// EXTERNAL COMPONENTS
import BookSearchForm from "components/BookSearchForm";
import FetchBooks from "lib/FetchBooks";
import SearchResult from "components/SearchResult";

// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //
function BookSuggestion() {
  return (
    <>
      <BookSearchForm />
      <SearchResult />
    </>
  );
}

export default BookSuggestion;
