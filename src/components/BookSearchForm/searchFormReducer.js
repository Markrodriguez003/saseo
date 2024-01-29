import { useState, useReducer } from "react";
import OrganizeBooks from "lib/OrganizeBooks";

export function searchReducer(state, action) {
  switch (action.type) {
    case "_AMOUNT":
      return { ...state, amount: action.payload };
    case "_SUBJECT":
      return { ...state, subject: action.payload };
    case "_LANGUAGE":
      return { ...state, language: action.payload };
    case "_SUBMIT_SEARCH":
      return {
        ...state,
        load_state: "Loading",
        toggle_form_window: 1,
      };
    case "_FRONT_PAGE_SEARCH":
      return {
        ...state,
        load_state: "Loaded",
        toggle_form_window: 1,
        search_submit: action.payload,
      };
    case "_SUCCESSFUL_SEARCH":
      // let books_ = handleFormSubmit(
      //   action.payload.books,
      //   action.payload.amount
      // );
      return {
        ...state,
        load_state: "Loaded",
        toggle_form_window: 0,
        // organized_books: books_,
      };
    case "_FAILED_SEARCH":
      return { ...state, load_state: "Error", search_submit: action.payload };
    case "_TOGGLE_SEARCH_FORM":
      return {
        ...state,
        toggle_form_window: state.toggle_form_window === 0 ? 1 : 0,
      };

    default:
      return state;
  }
}

export let initialState = {
  subject: "",
  amount: 1,
  language: "eng",
  toggle_form_window: 0,
  load_state: "Initial",
  organized_books: {},
};



// async function handleFormSubmit(payload, amount) {
//   return await OrganizeBooks(payload, amount);
// }
