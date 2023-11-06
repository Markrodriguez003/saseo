import * as genre from "../data/book_subjects.json";
import * as cover_images from "../data/book_subjects_cover_images.json";

export function bookGenreRetrival(genre) {
  // todo: do some code that finds what book genre the user has been trying to search
  // todo: (continued) then return the array of image URLs below to be used
  // CODE HERE

  // ? Proper way of embedding image from Gdrive
  // ? https://drive.google.com/uc?export=view&id=[image_id]

  //   let book_covers_images = [];
  let covers = Object.values(cover_images)[0];

  // for (let x = 0; x < covers_length; x++ ){

  // }

  // console.log("These are the book covers --> " + covers[3]);
  return covers;
}
