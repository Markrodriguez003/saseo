import { useEffect, useState, useRef } from "react";

// LIBRARY

// COMPONENTS
// CSS

// import "./SideBookStackGraphic.design.css";
// IMAGES

// CHAKRA UI COMPONENTS
import { Box, Image } from "@chakra-ui/react";

// LIBRARY

// COMPONENTS
import Slide from "react-reveal/Slide";

import sideBook from "../../../images/side-book.png";
import flatBook from "../../../images/flat-book.png";
import Fade from "react-reveal/Fade";
function SideBookStackGraphic() {
  return (
    <>
      {/* ********************* */}
      {/* INTRODUCTION SECTION */}
      {/* ********************* */}
      <Box
        position={"relative"}
        display={{
          base: "inline",
          lg: "inline",
          md: "none",
          sm: "none",
          xs: "none",
          "2xs": "none",
        }}
        zIndex={-1}
      >
        {/* SIDE BOOK */}
        <Slide left>
          <Box
            left={"50px"}
            // w={{ base: "20vw", lg: "20vw", md: "42vw", sm: "17vw" }}
          >
            <Box
              position={"absolute"}
              left={"-20px"}
              top={"185px"}
              transform={"scaleX(-1)"}
            >
              <Image
                src={sideBook}
                w={"320px"}
                h={"auto"}
                marginLeft={"auto"}
                marginRight={"auto"}
              />
            </Box>
            <Box
              position={"absolute"}
              left={"-20px"}
              top={"265px"}
              transform={"scaleX(-1)"}
            >
              <Image
                src={sideBook}
                w={"275px"}
                h={"auto"}
                marginLeft={"auto"}
                marginRight={"auto"}
                filter={"hue-rotate(290deg)"}
              />
            </Box>
            <Box
              position={"absolute"}
              left={"-25px"}
              top={"330px"}
              transform={"scaleX(-1)"}
            >
              <Image
                src={sideBook}
                w={"240px"}
                h={"auto"}
                marginLeft={"auto"}
                marginRight={"auto"}
                filter={"hue-rotate(190deg)"}
                overflow={"-moz-hidden-unscrollable"}
              />
            </Box>
          </Box>
        </Slide>
        {/* ************************* */}
        {/* RIGHTMOST SIDE FLAT BOOK */}
        {/* ************************* */}
        <Slide right>
          <Box>
            <Box
              position={"absolute"}
              right={"-95px"}
              top={"350px"}
              filter={"hue-rotate(190deg)"}
              transform={"rotate(5deg)"}
            >
              <Image
                src={flatBook}
                w={"430px"}
                h={"auto"}
                marginLeft={"auto"}
                marginRight={"auto"}
                filter={"hue-rotate(190deg)"}
              />
            </Box>
          </Box>
        </Slide>
      </Box>
    </>
  );
}

export default SideBookStackGraphic;
