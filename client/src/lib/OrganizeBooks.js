import axios from "axios";

// * Promise function that checks to see if book cover is available
import CoverImageCheck from "./CoverImageCheck";

// * Grabs the large array of fetched book objects, chooses random ones, then sorts them into a new array list according to user's params
export default async function OrganizeBooks(fetchedBooks, searchAmount = 15) {
  console.log(`Inside organized function: `, fetchedBooks);
  if (fetchedBooks !== undefined) {
    if (fetchedBooks.length !== 0) {
      console.log(`Organizing books from open library: `, searchAmount);

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

        // * Checks to see if there is an ISBN and sorts it
        let isbn_b =
          book.isbn !== undefined || null ? book.isbn : ["ISBN: Not found!"];

        // * Book description var
        let description;
        let cover;

        // * Grabs & sets book cover to book object. If all fails sets cover to undefined
        await CoverImageCheck(cover_i, "id")
          .then((c) => {
            console.log(`Grabbing book cover image from: `, cover_i);
            cover = c;
          })
          .catch((e) => {
            // console.log("No book cover can be found! " + e);
            cover = undefined;
          });

        await axios
          .get(`https://openlibrary.org/works/${key.slice(7)}.json`)
          .then((res) => {
            // CHECKS TO SEE IF THERE IS AN AVAILABLE BOOK DESCRIPTION. IF NOT, PROVIDE FALLBACK DEFAULT DESCRIPTION
            // BOOK DESCRIPTION SOMETIMES IS ENTERED AS DESCRIPTION OR DESCRIPTION.VALUE
            console.log(`Grabbing description from: `, key.slice(7));
            if (res.data.description !== undefined) {
              if (
                Object.keys(res.data.description).includes("value") === true
              ) {
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
          isbn_b,
          description,
          publish_year_b,
          rating_sortable,
          subject,
          title,
        });
      }

      // * Clean up by erasing values from number array (just in case)
      randomNumberBank.length = 0;

      // * Passes final array of book objects
      console.log("Final books -> ", finalizedBookArry);
      return finalizedBookArry;
    }
    return undefined;
  }
}
