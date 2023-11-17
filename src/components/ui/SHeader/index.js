import {
  Divider,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Button,
  Show,
  Hide,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  HStack,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  TabIndicator,
  Text,
  Select,
} from "@chakra-ui/react";

// COMPONENTS
import LogInForm from "components/LoginForm";
import RegisterNewAccount from "components/RegisterNewAccount";
// REACT
import { useState } from "react";

// CSS
import "./SHeader.design.css";

// IMAGES
import Bookmark from "../../../images/header/ribbon-1202755_1920.png";
import BookmarkMobile from "../../../images/header/ribbon-1202755_1920 - Mobile.png";
import avatarIcon from "../../../images/avatars/avatar-1.png";

// ICONS
import { ImMenu } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

// LIBRARIES
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

// NOTES
// ? https://www.npmjs.com/package/canvas-confetti
// TODO: When user's click on desktop bookmark, confetti (above) sprays out from left side but instead of confetti it's mini books (SVG)
// TODO: (continued) it's mini books (SVG path)
// https://bobbyhadz.com/blog/react-you-attempted-to-import-which-falls-outside-project

export function SHeader() {
  // Modal Control
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSignIn() {
    console.log("You clicked on signed-in ");
    onOpen();
  }

  // //TODO: MOVE CONFETTI TO UI AND ACTIVATE IT WHEN USER SENDS EMAIL OF BOOK LIST SUCESSFULLY
  // todo : ALTERNATIVELY MOVE SVG TO SEPARATE FILE (OR DO BOTH)
  // ? SVG BOOK VERSION 1
  // var books = confetti.shapeFromPath({
  //   path: " M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z",
  // });

  // ? SVG BOOK VERSION 2
  var books = confetti.shapeFromPath({
    path: "M506.008,62.869c-2.588-1.192-63.877-29.259-126.742-29.259c-54.608,0-108.064,21.169-122.9,27.513 c-14.836-6.344-68.353-27.513-122.961-27.513C70.539,33.61,8.546,61.677,5.959,62.869C2.604,64.417,0,67.772,0,71.463v350.141 c0,3.225,2.135,6.229,4.852,7.966c2.712,1.737,6.377,1.982,9.306,0.628c0.601-0.276,60.566-27.521,119.185-27.521 c58.619,0,118.523,27.245,119.124,27.521c0.048,0.023,0.132,0.029,0.18,0.051c0.522,0.23,1.077,0.408,1.625,0.539 c0.092,0.023,0.191,0.053,0.284,0.073c0.571,0.119,1.154,0.174,1.736,0.186c0.064,0.001,0.126,0.02,0.188,0.02 c0.08,0,0.158-0.014,0.238-0.016c0.26-0.006,0.519-0.028,0.779-0.056c0.157-0.016,0.313-0.03,0.469-0.054 c0.29-0.046,0.576-0.113,0.863-0.186c0.124-0.032,0.248-0.054,0.371-0.091c0.365-0.11,0.723-0.244,1.077-0.399 c0.04-0.018,0.083-0.03,0.125-0.048c0.015-0.007,0.031-0.01,0.046-0.018c0.601-0.276,60.444-27.521,119.063-27.521 c58.619,0,118.462,27.245,119.062,27.521c1.261,0.582,2.611,0.869,3.955,0.869c1.784,0,3.068-0.504,4.616-1.497 c2.717-1.737,3.872-4.741,3.872-7.966V71.463C511.017,67.772,509.362,64.417,506.008,62.869z M246.045,407.415 c-21.292-8.512-67.37-23.664-113.559-23.664s-89.901,15.151-113.559,23.664V77.697c16.561-6.668,65.263-25.16,113.559-25.16 s99.364,18.492,113.559,25.16V407.415z M492.09,407.415c-21.292-8.512-67.37-23.664-113.559-23.664 c-46.189,0-89.901,15.151-113.559,23.664V77.697c16.561-6.668,65.263-25.16,113.559-25.16c19.538,0,40.219,3.028,56.78,7.073 v68.633c0,5.226,4.237,9.463,9.463,9.463c5.226,0,9.463-4.237,9.463-9.463V64.535c18.927,4.952,30.756,10.214,37.853,13.162 V407.415z M213.404,157.631c-1.626-0.812-40.307-19.925-79.939-19.925c-39.632,0-78.312,19.112-79.939,19.925 c-4.676,2.339-6.571,8.022-4.233,12.698c1.659,3.318,5,5.231,8.475,5.231c1.419,0,2.865-0.318,4.223-0.997 c0.356-0.18,36.263-17.93,71.474-17.93c35.076,0,71.122,17.753,71.478,17.93c4.685,2.343,10.35,0.429,12.693-4.242 C219.97,165.649,218.076,159.97,213.404,157.631z M213.404,233.337c-1.626-0.812-40.307-19.925-79.939-19.925c-39.632,0-78.312,19.112-79.939,19.925 c-4.676,2.339-6.571,8.022-4.233,12.698c1.659,3.318,5,5.231,8.475,5.231c1.419,0,2.865-0.318,4.223-0.997 c0.356-0.18,36.263-17.93,71.474-17.93c35.076,0,71.122,17.753,71.478,17.93c4.685,2.346,10.35,0.434,12.693-4.242 C219.97,241.355,218.076,235.676,213.404,233.337z M213.404,309.043c-1.626-0.812-40.307-19.925-79.939-19.925c-39.632,0-78.312,19.112-79.939,19.925 c-4.676,2.339-6.571,8.022-4.233,12.699c1.659,3.317,5,5.23,8.475,5.23c1.419,0,2.865-0.318,4.223-0.997 c0.356-0.18,36.263-17.93,71.474-17.93c35.076,0,71.122,17.753,71.478,17.93c4.685,2.337,10.35,0.429,12.693-4.242 C219.97,317.061,218.076,311.382,213.404,309.043z M459.449,157.631c-1.627-0.812-40.307-19.925-79.939-19.925c-39.632,0-78.312,19.112-79.939,19.925 c-4.676,2.339-6.571,8.022-4.233,12.698c1.659,3.318,5,5.231,8.475,5.231c1.419,0,2.865-0.318,4.223-0.997 c0.356-0.18,36.263-17.93,71.474-17.93c35.076,0,71.122,17.753,71.478,17.93c4.681,2.343,10.355,0.429,12.693-4.242 C466.015,165.649,464.121,159.97,459.449,157.631z M459.449,233.337c-1.626-0.812-40.307-19.925-79.939-19.925c-39.632,0-78.312,19.112-79.939,19.925 c-4.676,2.339-6.571,8.022-4.233,12.698c1.659,3.318,5,5.231,8.475,5.231c1.419,0,2.865-0.318,4.223-0.997 c0.356-0.18,36.263-17.93,71.474-17.93c35.076,0,71.122,17.753,71.478,17.93c4.681,2.346,10.355,0.434,12.693-4.242 C466.015,241.355,464.121,235.676,459.449,233.337z M459.449,309.043c-1.626-0.812-40.307-19.925-79.939-19.925c-39.632,0-78.312,19.112-79.939,19.925 c-4.676,2.339-6.571,8.022-4.233,12.699c1.659,3.317,5,5.23,8.475,5.23c1.419,0,2.865-0.318,4.223-0.997 c0.356-0.18,36.263-17.93,71.474-17.93c35.076,0,71.122,17.753,71.478,17.93c4.681,2.337,10.355,0.429,12.693-4.242 C466.015,317.061,464.121,311.382,459.449,309.043z M505.855,460.058c-3.156-1.183-77.869-28.991-126.345-28.991c-43.355,0-107.655,22.229-123.023,27.775 c-15.367-5.546-79.667-27.775-123.023-27.775c-48.476,0-123.189,27.808-126.345,28.991c-4.893,1.84-7.375,7.293-5.54,12.185 c1.428,3.798,5.032,6.147,8.863,6.147c1.104,0,2.227-0.2,3.322-0.606c0.739-0.281,74.62-27.789,119.7-27.789 c45.034,0,118.961,27.512,119.7,27.789c0.067,0.025,0.134,0.03,0.201,0.053c0.996,0.35,2.047,0.553,3.121,0.553 c0.088,0,0.176-0.022,0.263-0.024c0.169-0.005,0.33-0.031,0.497-0.045c0.414-0.033,0.825-0.083,1.238-0.173 c0.203-0.044,0.398-0.107,0.598-0.164c0.243-0.069,0.486-0.111,0.726-0.2c0.739-0.281,74.62-27.789,119.7-27.789 c45.034,0,118.961,27.512,119.7,27.789c4.898,1.816,10.346-0.646,12.185-5.54C513.23,467.351,510.748,461.898,505.855,460.058z",
  });

  return (
    <>
      {/* //^ LOGIN MODAL */}
      <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(10deg)"
        />

        <ModalContent>
          <Tabs isFitted variant="enclosed">
            {/* //^ TOP TAB PANELS (log in & sign in) */}
            <TabList
              mb="1em"
              backgroundColor={"rgba(0,0,0,0.65)"}
              flexDirection={{
                base: "row",
                "2xs": "column",
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <Tab
                _selected={{ color: "white", bg: "primary" }}
                display={"block"}
                p={0}
                m={0}
              >
                {" "}
                <ModalHeader
                  fontSize={{
                    base: "30px",
                    "2xs": "22px",
                    xs: "24px",
                    sm: "24px",
                    md: "30px",
                    lg: "30px",
                    xl: "30px",
                  }}
                  color={"white"}
                  width={"100%"}
                >
                  <HStack>
                    {" "}
                    <MdAccountCircle
                      fontSize={{
                        base: "45px",
                        "2xs": "40px",
                        xs: "40px",
                        sm: "40px",
                        md: "45px",
                        lg: "45px",
                        xl: "45px",
                      }}
                    />
                    <Text paddingLeft={"10px"}> Log in </Text>
                  </HStack>
                </ModalHeader>{" "}
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "primary" }}
                p={0}
                m={0}
                display={"block"}
              >
                {" "}
                <ModalHeader
                  fontSize={{
                    base: "30px",
                    "2xs": "22px",
                    xs: "24px",
                    sm: "24px",
                    md: "30px",
                    lg: "30px",
                    xl: "30px",
                  }}
                  color={"white"}
                  width={"100%"}
                >
                  <HStack>
                    {" "}
                    <BsBookmarkPlusFill
                      fontSize={{
                        base: "45px",
                        "2xs": "40px",
                        xs: "40px",
                        sm: "40px",
                        md: "45px",
                        lg: "45px",
                        xl: "45px",
                      }}
                    />
                    <Text paddingLeft={"10px"}> Sign up </Text>
                  </HStack>
                </ModalHeader>{" "}
              </Tab>
            </TabList>
            <TabIndicator
              mt="-14.5px"
              height="5px"
              bg="primary"
              borderRadius="1px"
            />
            <TabPanels>
              {/* ****************************************** */}
              {/* //^ Log in Panel */}
              {/* ****************************************** */}
              <TabPanel>
                <ModalBody>
                  <VStack
                    justifyContent={"center"}
                    alignContent={"center"}
                    padding={"10px"}
                  >
                    <LogInForm />
                  </VStack>
                </ModalBody>
              </TabPanel>
              <TabPanel>
                {" "}
                <ModalBody>
                  <VStack
                    justifyContent={"center"}
                    alignContent={"center"}
                    padding={"10px"}
                  >
                    <RegisterNewAccount />
                  </VStack>
                </ModalBody>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Divider />
          <ModalCloseButton color={"white"} fontSize={"15px"} />

          <ModalFooter>
            <Button
              backgroundColor={"primary"}
              color={"white"}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* HEADER */}
      {/* BOOKMARK BRAND IMAGE */}
      <Hide below="xl">
        <div className="logo-container">
          {/* Add fallback image? */}
          <img
            src={Bookmark}
            className="bookmark"
            alt="bookmark-panel"
            onClick={() =>
              confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                shapes: [books],
                scalar: 5,
                flat: true,
              })
            }
          />
        </div>
      </Hide>
      <Flex className="container" align={"center"}>
        <Hide below="xl">
          <div className="spacer-container"></div>
          <div className="brand-container">
            <Link to="/" reloadDocument rel="bookmark">
              <h1> SASEO</h1>
            </Link>
          </div>
        </Hide>

        {/* MOBILE BRAND */}
        <Show below="xl">
          <Link to={"/"} reloadDocument rel="bookmark">
            <div className="mobile-brand-background">
              <div>
                <img src={BookmarkMobile} alt="bookmark-panel" />
                <h1>SASEO</h1>
              </div>
            </div>
          </Link>
        </Show>

        <Divider orientation="vertical" size={"xl"} />

        <Hide below="xl">
          <nav className="nav-container">
            <Link to={"suggest"} reloadDocument rel="search">
              <button>Suggest Books</button>
            </Link>
            <Link to="random" reloadDocument rel="search">
              <button>Random pick</button>
            </Link>

            <button>
              <Menu className="header-dropdown-menu">
                <MenuButton
                  as={Button}
                  h={"100%"}
                  marginTop={"7.5px"}
                  backgroundColor={"transparent"}
                  rightIcon={<IoIosArrowDown />}
                  _hover={{
                    backgroundColor: "transparent !important",

                    border: "0 transparent solid !important",
                  }}
                >
                  Search
                </MenuButton>
                <MenuList
                  h={"100%"}
                  backgroundColor={"primary"}
                  _hover={{
                    backgroundColor: "pink !important",
                    padding: "0 !important",
                    border: "0 transparent solid !important",
                  }}
                >
                  <MenuItem color={"white"}>
                    {" "}
                    <Link to="isbn" reloadDocument rel="search">
                      <button>ISBN Search</button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="author" reloadDocument rel="search">
                      <button>Author Search</button>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </button>
            <Link to="about" rel="search">
              <button>About</button>
            </Link>
            <HStack flexGrow={8} justify={"end"} paddingRight={"12px"}>
              <Menu>
                <MenuButton
                  as={Button}
                  backgroundColor={"transparent"}
                  _hover={{ backgroundColor: "transparent" }}
                >
                  <Image
                    src={avatarIcon}
                    w={"55px"}
                    _hover={{ backgroundColor: "transparent" }}
                  />
                </MenuButton>

                <MenuList color={"white"} backgroundColor={"primary"}>
                  <MenuItem color={"white"} backgroundColor={"primary"}>
                    <Link to={"/account/dashboard"} reloadDocument rel="">
                      Dashboard
                    </Link>
                  </MenuItem>
                  <MenuItem color={"white"} backgroundColor={"primary"}>
                    <Link to={"/account/settings"} reloadDocument rel="">
                      Account information
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              <button onClick={handleSignIn}>Sign-In</button>
            </HStack>
          </nav>
        </Hide>
        <Show below="xl">
          <Menu>
            <MenuButton
              as={Button}
              bg="transparent"
              alignSelf={"center"}
              ml={"auto"}
              pr={4}
            >
              <ImMenu
                color="white"
                size={"1.5em"}
                className="mobile-mobile-icon"
              />
            </MenuButton>
            <MenuList>
              <HStack flexGrow={8} justify={"start"} paddingRight={"12px"}>
                <Menu>
                  <MenuButton
                    as={Button}
                    backgroundColor={"transparent"}
                    _hover={{ backgroundColor: "transparent" }}
                  >
                    <Image src={avatarIcon} w={"40px"} />
                  </MenuButton>

                  <MenuList color={"white"} backgroundColor={"primary"}>
                    <Link to={"/account/dashboard"} reloadDocument rel="">
                      <MenuItem color={"white"} backgroundColor={"primary"}>
                        Dashboard
                      </MenuItem>
                    </Link>
                    <Link to={"/account/settings"} reloadDocument rel="">
                      <MenuItem color={"white"} backgroundColor={"primary"}>
                        Account information
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <button onClick={handleSignIn}>Sign-In</button>
              </HStack>
              <Link to={"suggest"} reloadDocument rel="search">
                <MenuItem>Suggest Books</MenuItem>
              </Link>
              <Link to="random" reloadDocument rel="search">
                <MenuItem>Random Pick</MenuItem>
              </Link>
              <Link to="isbn" reloadDocument rel="search">
                <MenuItem>ISBN Search</MenuItem>
              </Link>
              <Link to="author" reloadDocument rel="search">
                <MenuItem>Author Search</MenuItem>
              </Link>
              <Link to="About" reloadDocument rel="search">
                <MenuItem>About</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Show>
      </Flex>
    </>
  );
}

export default SHeader;
