import {
  Link,
  Center,
  Heading,
  Image,
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

// COMPONENTS
import HeadingPanel from "../../ui/HeadingPanel";

// LIBRARY
import { getUser } from "../../../lib/APIConnector";
import { useAuthStore } from "../../../lib/store/store";
import axios from "axios";

// ICONS
import { IoLibrarySharp } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi";
import { useState, useEffect } from "react";

// IMAGES

function AccountDashboard() {
  // Cookies / Context Store
  //! move to useEffect since it is not updating
  // const setUsername = useAuthStore((state) => state.setUsername);
  const usernameStore = useAuthStore((state) => state.auth.username);
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    console.log(`Updated user! --> ${JSON.stringify(profileData)}`);
  }, [profileData]);
  //Useffect that calls for user's information
  useEffect(() => {
    async function pullUserData() {
      try {
        if (!usernameStore) {
          return console.log("Username is not included!");
        }
        // setProfileData(await getUser(usernameStore));
        let profileDataTemp = await getUser(usernameStore);
        setProfileData(await profileDataTemp);
      } catch (error) {
        console.log(`Dashboard error::: ${error}`);
      }
    }

    pullUserData();

    return () => {};
  }, []);
  return (
    <>
      {profileData ? (
        <Center marginBottom={"150px"}>
          <VStack>
            <HeadingPanel letterSpacing={"1.2px"}>
              Account Dashboard
            </HeadingPanel>
            <br />
            <Flex
              gap={"12px"}
              wrap={true}
              flexDirection={{
                base: "row",
                "2xs": "column",
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
            >
              {/* // ******************************************************************************** */}
              {/* //* MY LIBRARY */}
              {/* // ******************************************************************************** */}
              <Card
                textAlign={"center"}
                backgroundColor={"violet"}
                color={"white"}
                w={"400px"}
              >
                <CardHeader>
                  <VStack>
                    <IoLibrarySharp color="white" fontSize={"60px"} />
                    <Heading size="lg"> My Library</Heading>
                  </VStack>
                </CardHeader>
                <CardBody>
                  <Text>
                    <strong>Books read: </strong> {profileData.booksRead}
                  </Text>
                  <Text>
                    <strong>Books to be read: </strong>
                    {profileData.booksRead}
                  </Text>
                </CardBody>
                <CardFooter marginLeft={"auto"} marginRight={"auto"}>
                  <Button backgroundColor={"primary"}>View here</Button>
                </CardFooter>
              </Card>
              {/* // ******************************************************************************** */}
              {/* //* SITE INFORMATION */}
              {/* // ******************************************************************************** */}
              <Card
                textAlign={"center"}
                backgroundColor={"accent-2"}
                color={"white"}
                w={"400px"}
              >
                <CardHeader>
                  <VStack>
                    <HiInformationCircle color="white" fontSize={"60px"} />
                    <Heading size="lg"> Site Information</Heading>
                  </VStack>
                </CardHeader>
                <CardBody>
                  <Text>
                    <strong>Favorite Genre Searched </strong>{" "}
                    {profileData.favoriteBookGenre}
                  </Text>
                  <Text>
                    <strong>Amount of Books Suggested: </strong>
                    {profileData.amountOfBooksSuggested}
                  </Text>
                  <Text>
                    <strong>Booklists emailed: </strong>
                    {profileData.booksSuggestionEmailed}
                  </Text>
                  <Text>
                    <strong>Amount of Books Randomly Fetched: </strong>
                    {profileData.amountOfRandomBooks}
                  </Text>
                </CardBody>
                <CardFooter marginLeft={"auto"} marginRight={"auto"}>
                  <Button backgroundColor={"primary"}>View here</Button>
                </CardFooter>
              </Card>
            </Flex>
          </VStack>
        </Center>
      ) : (
        <></>
      )}
    </>
  );
}

export default AccountDashboard;
