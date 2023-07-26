
// * List of reducer actions 
export const BOOK_STATE_ACTIONS = ["INTIAL_STATE", "ADD_BOOK", "SUBTRACT_BOOK"];

// * Intial reducer state
export const INTIAL_STATE = {
  selectBook: false, // Sets true or false is book has been selected
  book: [], // book info
  toast: {}, // toast info
};


// * Will trigger if user clicks on book to add or subtract to their email list
export const bookCardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        selectBook: true,
        book: state.payload,
        toast: {
          title: "Book added to your wishlist!.",
          description: "Your book list is waiting for you to share!",
          status: "success",
          duration: 2400,
          isClosable: true,
        },
      };
    case "MINUS_BOOK":
      return {
        selectBook: false,
        book: state.payload,
        toast: {
          title: "Book taken out of your wishlist!.",
          description: "That book wasn't interesting anyways!",
          status: "error",
          duration: 2400,
          isClosable: true,
        },
      };
    default: {
      console.log("UseReducer ran into an issue!");
    }
  }
};
