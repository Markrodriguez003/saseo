import { ChakraProvider } from "@chakra-ui/react";
// SITE COMPONENTS
import SHeader from "./components/ui/SHeader";
import Login from "./components//pages/Login";
import PasswordReset from "./components/pages/PasswordReset";
import FrontPage from "./components/pages/FrontPage";
import About from "./components/pages/About";
import AccountDashboard from "./components/pages/AccountDashboard";
import AccountInformation from "./components/pages/AccountInformation";
import AuthorSearch from "./components/pages/AuthorSearch";
import ErrorPage from "./components/pages/ErrorPage";
import { BookSuggestion } from "./components/pages/BookSuggestion";
import SFooter from "./components/ui/SFooter";
import ISBNSearch from "./components/pages/ISBNSearch";
import CookiesDisclaimer from "./components/ui/CookiesDisclaimer";
import CookiesInformation from "./components/pages/CookiesInformation";
import { Routes, Route } from "react-router-dom";

// Auth middlweware
import AuthorizeUser from "./lib/middleware/AuthorizeUser";
// NOTES
// ? https://biblioreads.eu.org/
// PAGES
import RandomBookSuggestion from "./components/pages/RandomBookSuggestion";
import SiteTheme from "./components/ui/siteTheme";
import Registration from "./components/pages/Registration";

function App() {
  return (
    <ChakraProvider theme={SiteTheme}>
      {/* <Fonts /> */}

      <SHeader />

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<FrontPage />} />
        <Route path="/errorpage" element={<ErrorPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/passwordReset"
          element={
            <AuthorizeUser>
              <PasswordReset />
            </AuthorizeUser>
          }
        />
        <Route path="/account/dashboard" element={<AccountDashboard />} />
        {/* <Route
          path="/account/dashboard"
          element={
            <AuthorizeUser>
              <AccountDashboard />
            </AuthorizeUser>
          }
        /> */}
        <Route path="/account/settings" element={<AccountInformation />} />
        <Route path="suggest" element={<BookSuggestion />} />
        <Route path="random" element={<RandomBookSuggestion />} />
        <Route path="about" element={<About />} />
        <Route path="isbn" element={<ISBNSearch />} />
        <Route path="author" element={<AuthorSearch />} />
        <Route path="cookies" element={<CookiesInformation />} />
      </Routes>
      {/* {cookies["cookies_accept"] === false ? <CookiesDisclaimer /> : <></>} */}
      {/* <CookiesDisclaimer /> */}
      {/* {console.log(JSON.stringify(cookies))} */}
      <SFooter />
    </ChakraProvider>
  );
}

export default App;
