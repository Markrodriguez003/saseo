// ? Notes : https://stackoverflow.com/questions/2342132/waiting-for-image-to-load-in-javascript

// **********************************************************************************
// * Checks book cover image to make sure it is not 1x1px
// *********************************************************************************
async function CoverImageCheck(cover, title) {
  // * Creates new & cleaned isbn var to insert into final book object

  const img = new Image();
  // todo: Do a check to see if an IBSN code is available for the book.
  img.src = `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;

  let cover_b = await new Promise((resolve, reject) => {
    img.onload = function () {
      if (this.width < 35) {
        console.log(
          `Book Title has a shitty extra tiny cover! --> ${title} --> ${this.width}'x' ${this.height} -->${cover}`
        );

        reject(undefined);
      } else {
        console.log(
          `Book Title has a good cover image-->  ${title} --> ${this.width}'x' ${this.height} -->${cover}`
        );

        resolve(cover);
      }
    };
  });
  return cover_b;
}

export default CoverImageCheck;

// ? NOTES
/* 

 // * Creates an Image var to grab image from api request & test it to see if it is 1x1px (not useful)
  //   const img = new Image();

  // new Promise((resolve, reject) => {
  //   const img = new Image();

  //   if (isbn[0]) {
  //     img.src = `https://covers.openlibrary.org/b/isbn/${isbn[0]}-L.jpg`;

  //     img.onload = () => {
  //       resolve(img);
  //       isbn_b = parseInt(this.width) === 1 ? isbn_b : undefined;
  //       console.log(
  //         `Book Title has cover! --> ${book.title} ---> Book cover--> ${isbn[0]} ` +
  //           this.width +
  //           "x" +
  //           this.height +
  //           "px"
  //       );
  //     };
  //     img.onerror = reject;
  //   } else {
  //     console.log("Nope");
  //   }
  // });

  //   img.onload = await function () {
  //     isbn_b = parseInt(this.width) === 1 ? isbn_b : undefined;
  //     console.log(
  //       `Book Title has cover! --> ${book.title} ---> Book cover--> ${isbn[0]} ` +
  //         this.width +
  //         "x" +
  //         this.height +
  //         "px"
  //     );
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
  //   };


*/
