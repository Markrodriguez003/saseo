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
} from "@chakra-ui/react";
import Bookmark from "../../../images/header/ribbon-1202755_1920.png";
import BookmarkMobile from "../../../images/header/ribbon-1202755_1920 - Mobile.png";
import "./SHeader.design.css";
import { ImMenu } from "react-icons/im";

import { Link } from "react-router-dom";

// https://bobbyhadz.com/blog/react-you-attempted-to-import-which-falls-outside-project

export function SHeader() {
  return (
    <>
      {/* BOOKMARK BRAND IMAGE */}
      <Hide below="md">
        <div className="logo-container">
          {/* Add fallback image? */}

          <img src={Bookmark} className="bookmark" alt="bookmark-panel" />
        </div>
      </Hide>

      {/* FLEXBOX HEADER */}
      <Flex className="container" align={"center"}  >
        <Hide below="md">
          <div className="spacer-container"></div>
          <div className="brand-container">
            <Link to="/">
              <h1> SASEO</h1>
            </Link>
          </div>
        </Hide>

        {/* MOBILE BRAND */}
        <Show below="md">
          <Link to={"/"}>
            <div className="mobile-brand-background">
              <div>
                <img src={BookmarkMobile} alt="bookmark-panel" />
                <h1>SASEO</h1>
              </div>
            </div>
          </Link>
        </Show>

        <Divider orientation="vertical" size={"xl"} />

        {/* <Hide breakpoint="(max-width: 835px)"> */}
        <Hide below="md">
          <nav className="nav-container">
            <Link to={"suggest"}>
              <button>Suggest Books</button>
            </Link>
            <Link to="random">
              <button>Random pick</button>
            </Link>
            <button>ISBN Search</button>
          </nav>
        </Hide>
        <Show below="md">
          <Menu>
            <MenuButton
              as={Button}
              bg="transparent"
              alignSelf={"center"}
              ml={"auto"}
              pr={4}
            >
              <ImMenu color="white" size={"1.5em"} class="mobile-mobile-icon" />
            </MenuButton>
            <MenuList>
              <Link to={"suggest"}>
                <MenuItem>Suggest Books</MenuItem>
              </Link>
              <Link to="random">
                <MenuItem>Random Pick</MenuItem>
              </Link>
              <MenuItem>ISBN Search</MenuItem>
            </MenuList>
          </Menu>
        </Show>
      </Flex>
    </>
  );
}

export default SHeader;

/*


   <Menu  alignSelf={"center"} ml={"auto"} pr={4}>
                ASFASF
              <MenuButton
                as={Button}
                rightIcon={
                  <ImMenu
                    color="white"
                    size={"1.5em"}
                    class="mobile-mobile-icon"
                  />
                }
              ></MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>

*/
