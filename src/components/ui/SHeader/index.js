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
import confetti from "canvas-confetti";

// NOTES
// ? https://www.npmjs.com/package/canvas-confetti
// TODO: When user's click on desktop bookmark, confetti (above) sprays out from left side but instead of confetti it's mini books (SVG)
// TODO: (continued) it's mini books (SVG path)

// https://bobbyhadz.com/blog/react-you-attempted-to-import-which-falls-outside-project

export function SHeader() {
  // //TODO: MOVE CONFETTI TO UI AND ACTIVATE IT WHEN USER SENDS EMAIL OF BOOK LIST SUCESSFULLY
  var books = confetti.shapeFromPath({
    path: " M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z",
  });

  return (
    <>
      {/* BOOKMARK BRAND IMAGE */}
      <Hide below="md">
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

      {/* FLEXBOX HEADER */}
      <Flex className="container" align={"center"}>
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
