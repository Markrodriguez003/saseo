import { ChakraProvider } from "@chakra-ui/react";

// SITE COMPONENTS
import SHeader from "./components/ui/SHeader";
import FrontPage from "./components/pages/FontPage";
import BookSuggestion from "./components/pages/BookSuggestion";
import BookSearchForm from "./components/BookSearchForm";
import BookCard from "./components/BookCard";
import SearchResult from "./components/SearchResult";
import SFooter from "./components/ui/SFooter";
import Fonts from "./Fonts";
import theme from "./theme";
import NotificationToast from "./components/NotificationToast";
import { Routes, Route } from "react-router-dom";
// PAGES
import RandomBookSuggestion from "./components/pages/RandomBookSuggestion";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <SHeader />
      {/* <FrontPage /> */}
      {/* <BookSuggestion /> */}
      {/* <RandomBookSuggestion /> */}

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="suggest" element={<BookSuggestion />} />
        <Route path="random" element={<RandomBookSuggestion />} />
      </Routes>
      <SFooter />
    </ChakraProvider>
  );
}

export default App;
