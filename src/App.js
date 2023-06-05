import { ChakraProvider } from "@chakra-ui/react";

// SITE COMPONENTS
import SHeader from "./components/SHeader";
import BookSuggestionForm from "./components/BookSuggestionForm";
import BookCard from "./components/BookCard";
import SearchResult from "./components/SearchResult";
import SFooter from "./components/SFooter";
import Fonts from "./Fonts";
import theme from "./theme";
import NotificationToast from "./components/NotificationToast";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <SHeader />
      <BookSuggestionForm />
      <SearchResult />
      <SFooter />
    </ChakraProvider>
  );
}

export default App;
