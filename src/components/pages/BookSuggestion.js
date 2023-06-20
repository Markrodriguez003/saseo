import { useState, createContext } from "react";

// EXTERNAL COMPONENTS
import BookSearchForm from "components/BookSearchForm";
import FetchBooks from "lib/FetchBooks";
import SearchResult from "components/SearchResult";

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
      <SearchData.Provider value={{bookData, setBookData}}>
        <BookSearchForm />
        {/* <SearchResult showSearch={bookData.showSearch} fetchedBooks = {bookData.books}/> */}
        <SearchResult showSearch={bookData.showSearch} />
      </SearchData.Provider>
    </>
  );
}

export default BookSuggestion;
