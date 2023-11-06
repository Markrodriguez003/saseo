import { ChakraProvider } from "@chakra-ui/react";

// SITE COMPONENTS
import SHeader from "./components/ui/SHeader";
import FrontPage from "./components/pages/FrontPage";
import About from "./components/pages/About";
import { BookSuggestion } from "./components/pages/BookSuggestion";
import SFooter from "./components/ui/SFooter";
import ISBNSearch from "./components/pages/ISBNSearch";
import CookiesDisclaimer from "./components/ui/CookiesDisclaimer";
import CookiesInformation from "./components/pages/CookiesInformation";
import { Routes, Route } from "react-router-dom";

import { CookiesProvider, Cookies, useCookies } from "react-cookie";
// PAGES
import RandomBookSuggestion from "./components/pages/RandomBookSuggestion";

// test data
// import test_books from "./data/book_examples.json";

import SiteTheme from "./components/ui/siteTheme";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
 
  return (
    <ChakraProvider theme={SiteTheme}>
      {/* <Fonts /> */}
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <SHeader />

        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="suggest" element={<BookSuggestion />} />
          <Route path="random" element={<RandomBookSuggestion />} />
          <Route path="about" element={<About />} />
          <Route path="isbn" element={<ISBNSearch />} />
          <Route path="cookies" element={<CookiesInformation />} />
        </Routes>
        {cookies["cookies_accept"] === false ? (
          <CookiesDisclaimer />
        ) : (
          <>
            <h1>jdgjd</h1>
          </>
        )}
        {/* <CookiesDisclaimer /> */}
        {/* {console.log(cookies["cookies_accept"])} */}
        <SFooter />
      </CookiesProvider>
    </ChakraProvider>
  );
}

export default App;
