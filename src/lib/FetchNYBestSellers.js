import axios from "axios";


async function FetchNYBestSellers() {
  let retrieve = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYTIMES_KEY}`;
  let fetchedBestsellers;

  // await axios
  //   .get(retrieve)
  //   .then((response) => {
  //     fetchedBestsellers = response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(
  //       "This application has drawn an error when fetching books --> " + error
  //     );
  //   });

  console.log("Fetching bestsellers!");


  return fetchedBestsellers;
}

export default FetchNYBestSellers;
