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

// ICONS
import { IoLibrarySharp } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi";

// IMAGES

function AccountDashboard() {
  return (
    <>
      <Center>
        <VStack>
          <HeadingPanel letterSpacing={"1.2px"}>Account Dashboard</HeadingPanel>
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
                  <strong>Books read: </strong>8
                </Text>
                <Text>
                  <strong>Books to be read: </strong>
                  15
                </Text>
                <Text>
                  <strong>Top book genre read: </strong>
                  15
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
                  <strong>Favorite Genre Searched </strong> Fantasy
                </Text>
                <Text>
                  <strong>Amount of Books Suggested: </strong>
                  86
                </Text>
                <Text>
                  <strong>Booklists emailed: </strong>
                  86
                </Text>
                <Text>
                  <strong>Amount of Books Randomly Fetched: </strong>
                  86
                </Text>
              </CardBody>
              <CardFooter marginLeft={"auto"} marginRight={"auto"}>
                <Button backgroundColor={"primary"}>View here</Button>
              </CardFooter>
            </Card>
          </Flex>
        </VStack>
      </Center>
    </>
  );
}

export default AccountDashboard;
