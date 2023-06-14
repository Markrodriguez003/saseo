import axios from "axios";
import { useEffect } from "react";
import { Center } from "@chakra-ui/react";
import BookLoader from "../components/ui/BookLoader/BookLoader";

const searchAmount = 20;

let searchSubject =
  //   "https://openlibrary.org/search.json?subject=fantasy&limit=200&details=true&published_in=2000-2100&language:eng";
  "https://openlibrary.org/search.json?subject=fantasy&limit=200&details=false&published_in=2000-2100&language:eng";

function pullBooks(fetchedBooks) {
  let finalizedBookArry = [];
  for (var i = 0; i < searchAmount; i++) {
    finalizedBookArry.push(
      fetchedBooks[Math.floor(Math.random() * fetchedBooks.length)]
    );
  }

  return finalizedBookArry;
}

function FetchBook(props) {
  useEffect(() => {
    axios
      .get(searchSubject)
      .then(function (response) {
        // handle success
        console.log(response);

        let x = pullBooks(response.data.docs);
        console.log(`This is the pulled array: ${x}`);
        console.log(`This is the pulled array book: ${x[2].title}`);

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
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      {/* <BookLoader /> */}
      <Center>{/* <img src={x} /> */}</Center>
    </div>
  );
}

export default FetchBook;
