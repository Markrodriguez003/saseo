import { useState, createContext } from "react";

// EXTERNAL COMPONENTS
import BookSearchForm from "../../BookSearchForm";
import { BookReadingList } from "components/BookReadingList";

// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //

export const SearchData = createContext();

export function BookSuggestion() {
  const [bookCollection, setBookCollection] = useState([{ title: "hello" }]);

  return (
    <>
      {/* // todo: Move this context to Book Reading List component  */}
      <SearchData.Provider value={{ bookCollection, setBookCollection }}>
        <BookSearchForm />

        {bookCollection ? (
          bookCollection.map((b) => (
            <h1 style={{ font: "35px", color: "red" }}>{b.title}</h1>
          ))
        ) : (
          <h1>Empty!</h1>
        )}
        {/* <BookReadingList /> */}
      </SearchData.Provider>
    </>
  );
}
