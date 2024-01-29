import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";

// EXTERNAL COMPONENTS
import BookSearchForm from "../../BookSearchForm";
import EmailShareCard from "components/EmailShareCard";

import { Box } from "@chakra-ui/react";
// --------------------------------------------------------------------- //
// Page that shows book suggestion form & book card results
// --------------------------------------------------------------------- //

// SearchData context
export const SearchData = createContext();

export function BookSuggestion() {
  // Grabs data from the front page call to action input (subject, keywords) & the location
  const location = useLocation();
  // grabs the data and places it in a
  // const callToActionFrontPageSearch = location.state;
  const [bookCollection, setBookCollection] = useState([]);
  const [selectBook, setSelectBook] = useState(false);
  return (
    <>
      {/* // todo: Move this context to Book Reading List component  */}
      <SearchData.Provider
        value={{ bookCollection, setBookCollection, selectBook, setSelectBook }}
      >
        {location.state !== null ? (
          <Box marginTop={"25px"} marginBottom={"200px"}>
            <BookSearchForm frontPageSearch={location.state} />
          </Box>
        ) : (
          <Box marginTop={"25px"} marginBottom={"200px"}>
            <BookSearchForm props={location.state} />
          </Box>
        )}
      </SearchData.Provider>
    </>
  );
}
