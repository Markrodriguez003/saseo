import { useState, createContext } from "react";

// EXTERNAL COMPONENTS
import BookSearchForm from "../../BookSearchForm";
import { BookReadingList } from "components/BookReadingList";

// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //

export const SearchData = createContext();

export function BookSuggestion() {
  const [bookCollection, setBookCollection] = useState([{}]);

  return (
    <>
      {/* // todo: Move this context to Book Reading List component  */}
      <SearchData.Provider value={{ bookCollection, setBookCollection }}>
        <BookSearchForm />
      </SearchData.Provider>
    </>
  );
}