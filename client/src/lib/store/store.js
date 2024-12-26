import { create } from "zustand";
// ! research more on this
// Zustand hook <-- can only be used in react
// Creates central "Store" that any react component can acceess.
export const useAuthStore = create((set) => ({
  auth: {
    username: "",
    active: false,
    session: false,
  },
  // Zustand "action". This is basically like calling "set[INSERTVARIABLENAME]* useState method
  // to change a value, in this case we are using this "action" method to change/store username;
  setUsername: (name) =>
    set((state) => ({ auth: { ...state.auth, username: name } })),
  setSession: (sesh) =>
    set((state) => ({ auth: { ...state.auth, session: sesh } })),
}));
