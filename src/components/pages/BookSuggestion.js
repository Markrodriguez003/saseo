import { useState, createContext } from "react";

// EXTERNAL COMPONENTS
import BookSearchForm from "components/BookSearchForm";

// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //

export const SearchData = createContext();

function BookSuggestion() {
  const [bookData, setBookData] = useState({
    test: "testttttt!",
    showearch: false,
    books: [],
  });

  return (
    <>
      <SearchData.Provider value={{ bookData, setBookData }}>
        <BookSearchForm />
      </SearchData.Provider>
    </>
  );
}

export default BookSuggestion;
