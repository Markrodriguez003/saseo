// todo: ADD THROTTLE TO THIS API CALL SO USER DOESN'T IMMEDIATELY SPAM CLICK SUBMIT BUTTON / USEMEMO
// ! OPTIMIZE API CALLS https://prismic.io/blog/api-response-times

//  LIBRARIES
import axios from "axios";

// ? NOTES
// ? https://openlibrary.org/dev/docs/api/authors

// * Function that grabs and returns author OL key
async function OLAuthorKeySearch(search) {
  let data;
  await axios
    .get(search)
    .then((response) => {
      data = response;
    })
    .catch(function (error) {
      console.log(
        "This application has drawn an error when fetching author data --> " +
          error
      );
      return undefined;
    });

  // todo: see if I can replace this with just the response instead of variable (still works)
  return data;
}

// * Function that grabs and returns author OL key
async function finalAuthorSearch(final_search) {
  let data;
  await axios
    .get(final_search)
    .then((response) => {
      // * Final author payload
      data = response;
    })
    .catch(function (error) {
      console.log(
        "This application has drawn an error when fetching the final author data --> " +
          error
      );
      return undefined;
    });

  return data;
}

// * Organizes all the data and returns it in one object. (Data is first api call, basic author data. Books is the second api call and is only book info)
async function organizeAuthorData(author, books) {
  // * Holds all organized author data
  let author_data;

  // * Grabs and organizes all pertinent data (author and book data) into one object
  if (author.data.docs.length !== 0 || author.data?.docs === undefined) {
    author_data = {
      name: author.data.docs[0]?.name,
      birthday: author.data.docs[0]?.birth_date,
      open_library_key: author.data.docs[0]?.key,
      top_subjects: author.data.docs[0]?.top_subjects,
      top_work: author.data.docs[0]?.top_work,
      work_count: author.data.docs[0]?.work_count,
    };
  } else {
    author_data = undefined;
  }

  // * Holds all book(s) data that was written by author
  let book_data;
  console.log(`books: `, books.data.entries);
  // TODO: GRAB ONLY THE ENGLISH TITLES, THERE ARE MULTI-LANGUAGE TITLES IN HERE
  if (books.data.entries.length !== 0 || books.data?.entries !== undefined) {
    book_data = books.data?.entries.map(({ title, covers: cover }) => {
      return { title, cover };
    });
  } else {
    return undefined;
  }

  let final_payload = { author_data, book_data };

  return final_payload;
}

// * Grabs search parameters and will call api for large amount of books base on said parameters.
async function authorSearchFetch(author) {
  // * Grabs the passed author name and formats it to add %20 to spaces and periods (.)
  let formatted_author_name = author.replace(" ", "%20").replace(".", "%20");

  // TODO: Have a check to see if user typed in last name (like meyer). There are alot of authors
  // TODO: *with that same name so it would be a good idea to present list and have user
  // TODO: *choose which author they want more info on.

  // * Initial API search to grab the OL Id of the author. DOes not provide all the data
  let initial_search = `https://openlibrary.org/search/authors.json?q=${formatted_author_name}`;

  // * Grabs the OL key of the intial search to be used for secondary search
  let author_data = await OLAuthorKeySearch(initial_search);

  // * Once the OL id of the author is found, this is called to get complete data
  let final_search = `https://openlibrary.org/authors/${author_data?.data?.docs[0]?.key}/works.json?limit=20`;

  // * Grabs the OL key of the intial search to be used for secondary search
  let author_book_data = await finalAuthorSearch(final_search);

  let final_author_payload = await organizeAuthorData(
    author_data,
    author_book_data
  );

  console.log("FINAL PAYLOAD", final_author_payload);

  // * Calls final api call to grab total author data and returns it
  return final_author_payload;
}

export default authorSearchFetch;
