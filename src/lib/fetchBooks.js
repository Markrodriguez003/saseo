// todo: ADD THROTTLE TO THIS API CALL SO USER DOESN'T IMMEDIATELY SPAM CLICK SUBMIT BUTTON / USEMEMO

import axios from "axios";

// * GRABS THE LARGE OPENLIBRARY API ARRAY OF BOOK OBJECTS, CHOOSES RANDOM BOOKS, THEN SORTS DATA INTO NEW OBJECTS DEPENDING
// * ON HOW MANY BOOK SUGGESTIONS USERS WANTS THEN RETURNS NEW ARRAY OF OBJECTS
async function OrganizeBooks(fetchedBooks, searchAmount = 20) {
  let finalizedBookArry = [];

  // * LOOPS THROUGH MASSIVE BOOK OBJECT FROM GIANT FETCHED BOOK ARRAY, RANDOMLY CHOOSES ONE AND CUTS IT DOWN TO SERVICEABLE BOOK OBJECT
  for (var i = 0; i < searchAmount; i++) {
    let random = Math.floor(Math.random() * fetchedBooks.length);
    let book = fetchedBooks[random];
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

    // * SORTS BOOK PUBLISHING YEAR TO THE LATEST YEAR
    let publish_year_b = book.publish_year.sort(function (a, b) {
      return a - b;
    });

    // * GRABS DESCRIPTION FROM OBJECT
    let description;

    await axios
      .get(
        // `https://openlibrary.org/api/books?bibkeys=OLID:${key.slice(7)}&jscmd=details&format=json`
        `https://openlibrary.org/works/${key.slice(7)}.json`
      )
      .then((res) => {
        // CHECKS TO SEE IF THERE IS AN AVAILABLE BOOK DESCRIPTION. IF NOT, WE PROVIDE FALLBACK DEFAULT DESCRIPTION
        // BOOK DESCRIPTION SOMETIMES IS ENTERED AS DESCRIPTION OR DESCRIPTION.VALUE
        // console.log("Hey this is the final portion --> " + res);
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
      isbn,
      cover_i,
      description,
      publish_year_b,
      rating_sortable,
      subject,
      title,
    });
  }

  return finalizedBookArry;
}

async function FetchBooks(searchSubject, searchAmount) {
  let search = `https://openlibrary.org/search.json?subject=${searchSubject}&limit=250&jscmd=data&details=true&published_in=2000-2100&language:eng?details=true`;
  let fetchedBooks;
  await axios
    .get(search)
    .then((response) => {
      // console.log("This is the response --> " + response);
      fetchedBooks = OrganizeBooks(response.data.docs, searchAmount);
    })
    .catch(function (error) {
      // handle error
      console.log(
        "This application has drawn an error when fetching books --> " + error
      );
    });

  return fetchedBooks;
}

export default FetchBooks;
