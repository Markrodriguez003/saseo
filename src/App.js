 
import { ChakraProvider } from "@chakra-ui/react";

// SITE COMPONENTS
import SHeader from "./components/SHeader";
import BookSuggestionForm from "./components/BookSuggestionForm";
import BookCard from "./components/BookCard";
import SearchResult from "./components/SearchResult";
import Fonts from './Fonts'
import theme from './theme'
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
       <Fonts />
      <SHeader />
      {/* <BookSuggestionForm /> */}
      {/* <SearchResult/> */}
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
