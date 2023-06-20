import axios from "axios";
import { useContext } from "react";
import { Center } from "@chakra-ui/react";
import BookLoader from "../components/ui/BookLoader/BookLoader";
import SearchResult from "components/SearchResult";
import { SearchData } from "components/pages/BookSuggestion";
// NOTES
// https://upmostly.com/tutorials/calling-a-react-component-on-button-click#:~:text=Building%20Out%20the%20Basic%20Structure&text=%2F*%20Write%20a%20button%20component,whenever%20the%20button%20is%20clicked.



// * GRABS THE LARGE OPENLIBRARY API ARRAY OF BOOK OBJECTS, CHOOSES RANDOM BOOKS, THEN SORTS DATA INTO NEW OBJECTS DEPENDING ON HOW MANY BOOK SUGGESTIONS USERS WANTS
// * THEN RETURNS NEW ARRAY OF OBJECTS
function pullBooks(fetchedBooks, searchAmount = 20) {
  
  const test = useContext(SearchData);
  console.log("This is the test --> " + test.test);

  let finalizedBookArry = [];
  // LOOPS
  for (var i = 0; i < searchAmount; i++) {
    let random = Math.floor(Math.random() * fetchedBooks.length);
    let {
      author_name,
      id_amazon,
      id_goodreads,
      id_librarything,
      id_overdrive,
      id_librevox,
      id_better_world_books,
      key,
      isbn,
      rating_sortable,
      subject,
      title,
    } = fetchedBooks[random];

    console.log(
      "This is the pulled book --> " +
      fetchedBooks[random].title +
      " ==> author --> " +
      fetchedBooks[random].author_name
    );
    let pd = fetchedBooks[random].publish_year.sort(function (a, b) {
      return a - b;
    });

    let publish_year = pd[0];
    finalizedBookArry.push({
      author_name,
      id_amazon,
      id_goodreads,
      id_librarything,
      id_overdrive,
      id_librevox,
      id_better_world_books,
      key,
      isbn,
      publish_year,
      rating_sortable,
      subject,
      title,
    });
  }

  return finalizedBookArry;
}

function FetchBooks(searchSubject, searchAmount) {
  let fetchedBooks;
  let search = `https://openlibrary.org/search.json?subject=${searchSubject}&limit=200&details=false&published_in=2000-2100&language:eng`;
  axios
    .get(search)
    .then(function (response) {
      // handle success
      // console.log(response);

      fetchedBooks = pullBooks(response.data.docs, searchAmount);
      // console.log("Book objects below:");
      // x.forEach((b) => console.log(b));
      // console.log(`This is the pulled array book: ${x[2].title}`);

      // DESCRIPTION
      // let description =
      //   "https://openlibrary.org/" + response.data.docs[191].key + ".json";

      // BOOK RATINGS
      // let rating =
      //   "https://openlibrary.org" +
      //   response.data.docs[191].key +
      //   "/ratings.json";

      // BOOK COVER
      // let cover =
      //   "https://covers.openlibrary.org/b/isbn/" +
      //   response.data.docs[191].isbn[0] +
      //   "-L.jpg";

      //   TESTING
      // console.log(cover);
      // console.log(rating);
      // console.log(description);

      // LIBRARY THING + LIBRARYTHING_ID
      // https://www.librarything.com/work/ <----4220>

      // GOODREADS URL + GOODREADS_ID // RE-ARRANGE TO LARGEST NUMBER FOR ENGLISH VERSION?
      // https://www.goodreads.com/book/show/<----738228>
      // alt version -> https://www.goodreads.com/search?utf8=%E2%9C%93&q=THE+DARK+TOWER&search_type=books
      // alt version -> https://www.goodreads.com/search?utf8=%E2%9C%93&q=THE+mist&search_type=books

      // AMAZON URL + AMAZON_ID
      // https://www.amazon.com/dp/<----B006RLQ456>

      // AUDIBLE
      // https://www.audible.com/search?keywords=the+mist&ref-override=a_hp_t1_header_search&k=the+mist&crid=2KPCXRBLTF6AN&sprefix=the+mist%2Cna-audible-us%2C76&i=na-audible-us&url=search-alias%3Dna-audible-us&ref=nb_sb_noss_1

      // OVERDRIVE URL + OVERDRIVE_ID
      // https://www.overdrive.com/media/<----E7168E5B-47F0-41A1-8D8E-83F05C44985B>

      // BETTER WORLD BOOK
      // https://www.betterworldbooks.com/search/results?q=THE%20MAGIC%20FINGER <--- title = book title with spaces between words replaced with %20 and capitalized
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  // fetchedBooks
  return fetchedBooks;

}

export default FetchBooks;
