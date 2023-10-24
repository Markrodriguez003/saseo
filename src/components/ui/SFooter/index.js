import { Divider, Hide, Flex } from "@chakra-ui/react";
import BookmarkMobile from "../../../images/header/ribbon-1202755_1920 - Mobile.png";
import "./SFooter.design.css";
import { Link } from "react-router-dom";

export function SFooter() {
  return (
    <>
      <Flex className="footer-container" align={"center"}>
        <Link to={"/"}>
          <div className="footer-mobile-brand-background">
            <div>
              <img src={BookmarkMobile} alt="bookmark-panel" className="footer-bookmark-image"/>
              <h1>SASEO</h1>
            </div>
          </div>
        </Link>

        <Divider orientation="vertical" size={"xl"} />

        <Hide below="md">
          <nav className="footer-nav-container">
            <Link to={"suggest"}>
              <button>Suggest Books</button>
            </Link>
            <Link to="random">
              <button>Random pick</button>
            </Link>
            <button>ISBN Search</button>
          </nav>
        </Hide>
      </Flex>
    </>
  );
}

export default SFooter;
