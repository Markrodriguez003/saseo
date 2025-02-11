import axios from "axios";

// * Promise function that checks to see if book cover is available
import CoverImageCheck from "./CoverImageCheck";

// * Grabs the large array of fetched book objects, chooses random ones, then sorts them into a new array list according to user's params
export default async function OrganizeBooks(fetchedBooks, searchAmount = 15) {
  // If fetched books is empty, return error
  if (!fetchedBooks) {
    return { response: "error" };
  }

  if (fetchedBooks !== undefined && fetchedBooks.length !== 0) {
    // * Final array that will hold all the organized, stripped  & final book objects
    let finalizedBookArry = [];

    // * Array that will hold all random numbers collected to check to make sure no book repeats
    let randomNumberBank = [];

    // * Variable that will hold random number
    let random;

    // * Loops through massive book object array & chooses random book object, grabs the necessary data, sorts it, then pushes it into final arry
    // todo: Set a condition to make sure that just in case the amount of books fetched are not enough to carry out search amount, fallback
    // todo: Set a condition to find books that do not have any description or image and replace it with another book (obscure books)

    for (var i = 0; i < searchAmount; i++) {
      // * Creates random number within the limits of massive array of books fetched from api
      random = Math.floor(Math.random() * fetchedBooks.length);

      // * Will check if random number intially generated is already inside random Number Bank (to check for dups)
      while (randomNumberBank.includes(random)) {
        random = Math.floor(Math.random() * fetchedBooks.length);

        // * If random number is not included in random number bank, break out of while loop and proceed to next line
        if (!randomNumberBank.includes(random)) {
          break;
        }
      }

      // * Once the conditionals above clear than random number is pushed to random number bank to check again in loop
      randomNumberBank.push(random);

      // * Grabs a random book from massive book object array
      let book = fetchedBooks[random];

      // * Cuts down & separates all the important book data from large book object
      let {
        author_name,
        id_amazon,
        id_goodreads,
        id_librarything,
        id_overdrive,
        id_librevox,
        id_better_world_books,
        key,
        cover_i,
        rating_sortable,
        title,
      } = book;

      // * Book description, cover, subjects tags, &
      let description;
      let cover;
      let subjects;
      let isbn;

      // * Grabs & sets book cover to book object. If all fails sets cover to undefined
      await CoverImageCheck(cover_i, "id")
        .then((c) => {
          cover = c;
        })
        .catch((e) => {
          console.log("No book cover can be found! " + e);
          cover = undefined;
        });

      // FETCHES DESCRIPTION AND SUBJECTS
      await axios
        .get(`https://openlibrary.org/works/${key.slice(7)}.json`)
        .then((res) => {
          // CHECKS TO SEE IF THERE IS AN AVAILABLE BOOK DESCRIPTION. IF NOT, PROVIDE FALLBACK DEFAULT DESCRIPTION
          // BOOK DESCRIPTION SOMETIMES IS ENTERED AS DESCRIPTION OR DESCRIPTION.VALUE
          if (res.data.description !== undefined) {
            if (Object.keys(res.data.description).includes("value") === true) {
              description = res.data.description.value;
            } else {
              description = res.data.description;
            }
          } else {
            description = undefined;
          }

          // CHECKS TO SEE IS THERE ARE SUBJECTS TAGS AND SETS THEM
          if (res.data.subjects) {
            subjects = res.data.subjects;
          } else {
            subjects = undefined;
          }
        })

        .catch((err) => {
          console.log("Error in grabbing book description--> " + err);
        });

      // FETCHES ISBN_13
      await axios
        .get(`https://openlibrary.org/works/${key.slice(7)}/editions.json`)
        .then((res) => {
          // CHECKS TO SEE IF THERE IS A isbn_13 AVAILABLE
          if (res.data.entries[0]?.isbn_13 !== undefined) {
            isbn = res.data.entries[0]?.isbn_13;
          } else {
            if (res.data.entries[0]?.isbn_10 !== undefined) {
              isbn = res.data.entries[0]?.isbn_10;
            } else {
              isbn = undefined;
            }
          }
        })
        .catch((err) => {
          isbn = undefined;
          console.log("Error in grabbing book isbn--> " + err);
        });

      // * Pushes all critical book details as a book object into final fetched books array
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
        // publish_year_b,
        rating_sortable,
        subjects,
        title,
      });
    }
    // * Clean up by erasing values from number array (just in case)
    randomNumberBank.length = 0;

    // * Passes final array of book objects
    return finalizedBookArry;
  }
}
