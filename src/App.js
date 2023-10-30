import { ChakraProvider } from "@chakra-ui/react";

// SITE COMPONENTS
import SHeader from "./components/ui/SHeader";
import FrontPage from "./components/pages/FrontPage";
import About from "./components/pages/About";
import { BookSuggestion } from "./components/pages/BookSuggestion";
import SFooter from "./components/ui/SFooter";
import Fonts from "./Fonts";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
// PAGES
import RandomBookSuggestion from "./components/pages/RandomBookSuggestion";

// test data
// import test_books from "./data/book_examples.json";

import SiteTheme from "./components/ui/siteTheme";

function App() {
  return (
    <ChakraProvider theme={SiteTheme}>
      {/* <Fonts /> */}
      <SHeader />

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="suggest" element={<BookSuggestion />} />
        <Route path="random" element={<RandomBookSuggestion />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* <SFooter /> */}
    </ChakraProvider>
  );
}

export default App;
