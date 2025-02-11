// todo: ADD THROTTLE TO THIS API CALL SO USER DOESN'T IMMEDIATELY SPAM CLICK SUBMIT BUTTON / USEMEMO
// ! OPTIMIZE API CALLS https://prismic.io/blog/api-response-times
import axios from "axios";

// * Grabs search parameters and will call api for large amount of books base on said parameters.
async function FetchBooks(searchParameters) {
  let search = `https://openlibrary.org/search.json?subject=${searchParameters.subject}&limit=150&jscmd=data&details=true&language%3${searchParameters.language}?details=true`;

  let fetchedBooks;
  if (searchParameters !== "") {
    await axios
      .get(search, {
        headers: { "User-Agent": "saseo/1.0 (modulatorstudios@gmail..com)" },
      })
      .then((response) => {
        fetchedBooks = response.data.docs;
      })
      .catch((error) => {
        console.log(
          "This application has drawn an error when fetching books --> " + error
        );
      });

    return fetchedBooks;
  }
}

export default FetchBooks;
