import axios from "axios";

// * GRABS THE LARGE OPENLIBRARY API ARRAY OF BOOK OBJECTS, CHOOSES RANDOM BOOKS, THEN SORTS DATA INTO NEW OBJECTS DEPENDING ON HOW MANY BOOK SUGGESTIONS USERS WANTS
// * THEN RETURNS NEW ARRAY OF OBJECTS
function OrganizeBooks(fetchedBooks, searchAmount = 20) {
  let finalizedBookArry = [];

  // Loops through massive book object and cuts it down to servicable book object
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

    // console.log(
    //   "This is the pulled book --> " +
    //   fetchedBooks[random].title +
    //   " ==> author --> " +
    //   fetchedBooks[random].author_name
    // );

    let pd = fetchedBooks[random].publish_year.sort(function (a, b) {
      return a - b;
    });
    // let description;
    // // console.log("This is the book key work --> " + fetchedBooks[random].key);
    // // console.log(`This is the book query url  -->  https://openlibrary.org/${fetchedBooks[random].key}.json`);
    // axios
    //   .get(`https://openlibrary.org/${fetchedBooks[random].key}`)
    //   .then((res) => {
    //     // description = res.data.description;
    //     console.log(`BOOK DESCRIPTION: ${res}` )
    //     // return response.description;
    //   })
    //   .catch((err) => {
    //     console.log("Error in grabbing book decription--> " + err);
    //     // console.log("Error decription--> " + err.response.data);
    //   }); 

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
      // description: description,
      publish_year,
      rating_sortable,
      subject,
      title,
    });
  }

  return finalizedBookArry;
}

// function FetchBooks(searchSubject, searchAmount) {

//   let fetchedBooks;
//   let search = `https://openlibrary.org/search.json?subject=${searchSubject}&limit=200&details=false&published_in=2000-2100&language:eng`;
//   axios
//     .get(search)
//     .then(function (response) {
//       // handle success
//       console.log(response);

//       fetchedBooks = pullBooks(response.data.docs, searchAmount);

//       console.log(fetchedBooks);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log("This is the error when fetching books --> " + error);
//     })
//     .finally(function () {
//       // always executed
//     });
//   // fetchedBooks
//   return fetchedBooks;
// }

export default OrganizeBooks;

// ------------------------------------
// NOTES
// -----------------------------------

// formatting notes

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
