// todo: ADD THROTTLE TO THIS API CALL SO USER DOESN'T IMMEDIATELY SPAM CLICK SUBMIT BUTTON / USEMEMO
// ! OPTIMIZE API CALLS https://prismic.io/blog/api-response-times

//  LIBRARIES
import axios from "axios";
import CoverImageCheck from "lib/CoverImageCheck";

// ? NOTES
// ? https://github.com/internetarchive/openlibrary/issues/8144
// ? Search query schema https://github.com/internetarchive/openlibrary/blob/00a05558c6d8e7bb770f4f2684664ad048531dac/conf/solr/conf/managed-schema.xml#L131-L225

// * Grabs search parameters and will call api for large amount of books base on said parameters.
async function ISBNSearchFetch(isbn) {
  let search = `https://openlibrary.org/search.json?q=isbn%3A${isbn}&fields=key,title,author_key,author_name,subject,id_amazon,id_goodreads,id_google,first_publish_year,number_of_pages_median,edition_count,publisher`;
  // let search = `https://openlibrary.org/search.json?q=isbn%3A9780590353427&fields=key,title,author_key,author_name,subject,id_amazon,id_goodreads,publish_year,number_of_pages_median`;
  
  // ! RETRIEVES EVERYTHING
  // let search = `https://openlibrary.org/search.json?q=isbn%3A${isbn}&mode=everything`;
  // let search = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json&details=true`;
  let fetchedBook;

  await axios
    .get(search)
    .then((response) => {
      fetchedBook = response.data;
    })
    .catch(function (error) {
      console.log(
        "This application has drawn an error when fetching the book --> " +
          error
      );
    });

  let ISBNFetchedBookCover;
  ISBNFetchedBookCover = await CoverImageCheck(isbn, "isbn");

  return { fetchedBook, ISBNFetchedBookCover };
}

export default ISBNSearchFetch;
