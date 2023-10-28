import { useEffect, useState, useRef } from "react";

// LIBRARY
import aos from "aos";

// COMPONENTS
// CSS
import "aos/dist/aos.css";
// import "./SideBookStackGraphic.design.css";
// IMAGES

// CHAKRA UI COMPONENTS
import { Box, Image } from "@chakra-ui/react";

// LIBRARY

// COMPONENTS

import sideBook from "../../../images/side-book.png";
import flatBook from "../../../images/flat-book.png";

function SideBookStackGraphic() {
  // Initialize aos library
  useEffect(() => {
    aos.init({
      delay: 12,
      duration: 600,
      offset: 200,
      // anchorPlacement: "center-bottom"
    });

  }, []);

  return (
    <>
      {/* ********************* */}
      {/* INTRODUCTION SECTION */}
      {/* ********************* */}
      <Box
        position={"relative"}
        display={{ base: "inline", lg: "inline", md: "none", sm: "none" }}
      >
        {/* SIDE BOOK */}
        <Box
          data-aos={"slide-right"}
          left={"50px"}
          // w={{ base: "20vw", lg: "20vw", md: "42vw", sm: "17vw" }}
        >
          <Box
            position={"absolute"}
            left={"-20px"}
            top={"150px"}
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
            top={"230px"}
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
            top={"295px"}
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
        {/* RIGHTMOST SIDE FLAT BOOK */}

        <Box data-aos={"slide-left"}>
          <Box
            position={"absolute"}
            right={"-95px"}
            top={"315px"}
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
      </Box>
    </>
  );
}

export default SideBookStackGraphic;
