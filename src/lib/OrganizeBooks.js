import axios from "axios";

import CoverImageCheck from "./CoverImageCheck";

// * Grabs the large array of fetched book objects, chooses random ones, then sorts them into a new array list according to user's params
export default async function OrganizeBooks(fetchedBooks, searchAmount = 20) {
  // * Final array that will hold all the organized, stripped  & final book objects
  let finalizedBookArry = [];

  // * Loops through massive book object array & chooses random book object, grabs the necessary data, sorts it, then pushes it into final arry
  // todo: Set a condition to make sure that just in case the amount of books fetched are not enough to carry out search amount, fallback
  // todo: Set a condition to find duplicate books and eliminate them by choosing new book in its place
  // todo: Set a condition to find books that do not have any description or image and replace it with another book (obscure books)
  for (var i = 0; i < searchAmount; i++) {
    // * Creates random number within the limits of massive array of books fetched from api
    let random = Math.floor(Math.random() * fetchedBooks.length);

    // * Grabs a random book from massive book object array
    let book = fetchedBooks[random];

    // * Cuts down & separates all the important book data
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
      cover_i,
      rating_sortable,
      subject,
      title,
    } = book;

    // * Sorts book publishing year to the latest year (it's sometimes random)
    let publish_year_b = book.publish_year.sort(function (a, b) {
      return a - b;
    });

    // * Book description var
    let description;
    let cover;

    await CoverImageCheck(cover_i, title)
      .then((c) => {
        cover = c;
      })
      .catch((e) => {
        console.log("An error has occured! " + e);
      });

    await axios
      .get(`https://openlibrary.org/works/${key.slice(7)}.json`)
      .then((res) => {
        // CHECKS TO SEE IF THERE IS AN AVAILABLE BOOK DESCRIPTION. IF NOT, WE PROVIDE FALLBACK DEFAULT DESCRIPTION
        // BOOK DESCRIPTION SOMETIMES IS ENTERED AS DESCRIPTION OR DESCRIPTION.VALUE
        if (res.data.description !== undefined) {
          if (Object.keys(res.data.description).includes("value") === true) {
            description = res.data.description.value;
          } else {
            description = res.data.description;
          }
        } else {
          description = "Book Description Not Found!";
        }
      })
      .catch((err) => {
        console.log("Error in grabbing book decription--> " + err);
      });

    // RETURNS FINALIZED BOOKS ARRAY
    finalizedBookArry.push({
      author_name,
      id_amazon,
      id_goodreads,
      id_librarything,
      id_overdrive,
      id_librevox,
      id_better_world_books,
      key,
      cover,
      isbn,
      description,
      publish_year_b,
      rating_sortable,
      subject,
      title,
    });
  }

  return finalizedBookArry;
}

// ------------------------------------
// NOTES
// -----------------------------------

// formatting isbn (sorting and fallback checking)
// let isbn_b;

// if (fetchedBooks[random].isbn !== undefined) {
//   console.log(`This is the book title --> ${fetchedBooks[random].title}`);
//   console.log(`This is the cover key --> ${fetchedBooks[random].key}`);
//   console.log(
//     `This is the cover URL --> https://covers.openlibrary.org/b/olid/${fetchedBooks[random].key}-L.jpg`
//   );
// isbn_b = fetchedBooks[random].isbn.sort(function (a, b) {
//   return a - b;
// });
// isbn_b = fetchedBooks[random].isbn.sort().reverse();
// isbn_b = fetchedBooks[random].isbn;
// isbn_b = fetchedBooks[random].isbn.sort((a, b) => {
//   return b.length - a.length;
// });
// console.log(
//   `Book Title --> ${fetchedBooks[random].title} ---> Book cover--> ${isbn_b}`
// );

// ! works
// const img = new Image();
// img.src = `https://covers.openlibrary.org/b/isbn/${isbn[0]}-L.jpg`;
// img.onload = function () {
//   // console.log(this.width + 'x' + this.height);
//   isbn_b = parseInt(this.width) == 1 ? isbn : undefined;
//   console.log(
//     `Book Title has cover! --> ${fetchedBooks[random].title} ---> Book cover--> ${isbn_b}`
//   );
// if (this.width < 5) {
//   isbn_b = undefined;
//   console.log(
//     `Book Title --> ${fetchedBooks[random].title} ---> Book cover--> ${isbn_b}`
//   );
// } else {
//   isbn_b = isbn;
//   console.log(
//     `Book Title --> ${fetchedBooks[random].title} ---> Book cover--> ${isbn_b}`
//   );
// }
// } else {
//   isbn_b = undefined;
//   console.log(
//     `Book Title has NO cover! --> ${fetchedBooks[random].title} ---> Book cover--> ${isbn_b}`
//   );
// }

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

// OLD
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
