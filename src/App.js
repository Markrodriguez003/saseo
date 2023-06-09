import { ChakraProvider } from "@chakra-ui/react";

// SITE COMPONENTS
import SHeader from "./components/ui/SHeader";
import FrontPage from "./components/FontPage";
import BookSuggestionForm from "./components/BookSuggestionForm";
import BookCard from "./components/BookCard";
import SearchResult from "./components/SearchResult";
import SFooter from "./components/ui/SFooter";
import Fonts from "./Fonts";
import theme from "./theme";
import NotificationToast from "./components/NotificationToast";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <SHeader />
      <FrontPage />
      <br />
      <br />
 
      {/* <BookSuggestionForm /> */}
      {/* <SearchResult /> */}
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <SFooter /> */}
    </ChakraProvider>
  );
}

export default App;
