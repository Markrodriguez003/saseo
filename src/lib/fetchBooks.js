// todo: ADD THROTTLE TO THIS API CALL SO USER DOESN'T IMMEDIATELY SPAM CLICK SUBMIT BUTTON / USEMEMO

import axios from "axios";

import OrganizeBooks from "./OrganizeBooks";

// * Grabs search parameters and will call api for large amount of books.
async function FetchBooks(searchSubject, searchAmount, searchLanguage) {
  console.log("This is the search parameters: " + searchLanguage);
  let search = `https://openlibrary.org/search.json?subject=${searchSubject}&limit=250&jscmd=data&details=true&published_in=2000-2100&language%3${searchLanguage}?details=true`;
  let fetchedBooks;

  await axios
    .get(search)
    .then((response) => {
      fetchedBooks = OrganizeBooks(response.data.docs, searchAmount);
    })
    .catch(function (error) {
      console.log(
        "This application has drawn an error when fetching books --> " + error
      );
    });

  return fetchedBooks;
}

export default FetchBooks;
