import { useState, createContext } from "react";

// EXTERNAL COMPONENTS
import AccountDashboard from "../../ui/AccountDashboard";
import AccountInformation from "../../ui/AccountInformation";
 

import { Box } from "@chakra-ui/react";
// --------------------------------------------------------------------- //
// Page that shows user account information (dashboard / general info)
// --------------------------------------------------------------------- //


function Account() {
  const [bookCollection, setBookCollection] = useState([]);

  return (
    <>
        <Box marginTop={"25px"} marginBottom={"200px"}>
          <AccountDashboard />
          <AccountInformation />
        </Box>
    </>
  );
}

export default Account;