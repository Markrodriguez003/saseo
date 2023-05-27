import { Divider, Box, Image, Heading, Link, Avatar, AvatarGroup, HStack } from "@chakra-ui/react";
import Bookmark from "../../images/header/ribbon-1202755_1920.png";
import "./SHeader.design.css"

export function SHeader() {
    return (
        <>
            <header className="container">
                <div className="spacer-container">
                </div>
                <div className="brand-container">
                    <h1>SASEO</h1>
                </div>
                <Divider orientation='vertical' size={"xl"} />
                <nav className="nav-container">
                    <button>Suggest Books</button>
                    <button>Random pick</button>
                    <button>ISBN Search</button>
                </nav>

                <div className="logo-container">
                    <img src={Bookmark} className="bookmark" />
                </div>
            </header>




        </>
    );
}

export default SHeader;
