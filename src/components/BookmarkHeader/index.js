

import { Heading } from "@chakra-ui/react"
import Bookmark from "../../images/header/ribbon-1202755_1920.png";
import BookmarkMobile from "../../images/header/ribbon-1202755_1920 - Mobile.png";
import { Children } from "react";
import "./styles.css"

function BookmarkHeader(props) {

    return (

        <div className="bookmark-header-container">
            <img src={BookmarkMobile} alt="bookmark-header" />
            <h1 className="bookmark-text">{props.children}</h1>

        </div>

    );
}

export default BookmarkHeader;
