// todo: ADD THROTTLE TO THIS API CALL SO USER DOESN'T IMMEDIATELY SPAM CLICK SUBMIT BUTTON / USEMEMO
// ! OPTIMIZE API CALLS https://prismic.io/blog/api-response-times
import axios from "axios";
import OrganizeBooks from "./OrganizeBooks";

// * Grabs search parameters and will call api for large amount of books base on said parameters.
async function FetchBooks(searchParameters) {
  console.log(
    "This is the search parameters inside fetch: " + searchParameters.subject
  );
  // let search = `https://openlibrary.org/search.json?subject=${searchSubject}&limit=250&jscmd=data&details=true&published_in=2100-2100&language%3${searchLanguage}?details=true`;
  let search = `https://openlibrary.org/search.json?subject=${searchParameters.subject}&limit=150&jscmd=data&details=true&language%3${searchParameters.language}?details=true`;

  let fetchedBooks;
  if (searchParameters !== "") {
    await axios
      .get(search)
      .then((response) => {
        console.log(`Books sucessfully fetched!`);
        fetchedBooks = response.data.docs;
      })
      .catch((error) => {
        console.log(
          "This application has drawn an error when fetching books --> " + error
        );
      });

    // console.log(`These are the fetchedbooks: `, fetchedBooks);
    return fetchedBooks;
  }
}

export default FetchBooks;
