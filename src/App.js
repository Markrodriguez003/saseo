import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

// SITE COMPONENTS
import SHeader from "./components/SHeader";
import BookSuggestionForm from "./components/BookSuggestionForm";
import BookCard from "./components/BookCard";
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <SHeader />
      <BookSuggestionForm />
      <BookCard />
      <br/>
      <BookCard />
      <br/>
      <BookCard />
      <br/>
    </ChakraProvider>
  );
}

export default App;
