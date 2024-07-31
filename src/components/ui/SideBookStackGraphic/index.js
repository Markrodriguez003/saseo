import { useEffect, useState, useRef } from "react";

// LIBRARY

// COMPONENTS
// CSS

// import "./SideBookStackGraphic.design.css";
// IMAGES

// CHAKRA UI COMPONENTS
import { Box, Image, VStack } from "@chakra-ui/react";

// LIBRARY

// COMPONENTS
// import Slide from "react-reveal/Slide";

import sideBook from "../../../images/side-book.png";
import flatBook from "../../../images/flat-book.png";
import plant from "../../../images/plant-5525166_1280.png";

// import Fade from "react-reveal/Fade";
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

        {/* <Box>
          <Box
            position={"absolute"}
            left={"345px"}
            top={"410px"}
            filter={"hue-rotate(90deg)"}
            transform={"rotate(5deg)"}
          >
            <Image
              src={flatBook}
              w={"830px"}
              h={"auto"}
              marginLeft={"auto"}
              marginRight={"auto"}
              filter={"hue-rotate(190deg)"}
            />
          </Box>
        </Box> */}

        {/* <Box
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
        </Box> */}

        {/* ************************* */}
        {/* RIGHTMOST SIDE FLAT BOOK */}
        {/* ************************* */}

        <Box>
          <VStack>
            <Box
              position={"absolute"}
              right={"-545px"}
              top={"410px"}
              filter={"hue-rotate(190deg)"}
              transform={"rotate(5deg)"}
            >
              <Image
                src={flatBook}
                // w={"830px"}
                // h={"auto"}
                // marginLeft={"auto"}
                // marginRight={"auto"}
                filter={"hue-rotate(190deg)"}
              />
            </Box>
            <Box
              position={"absolute"}
              right={"-695px"}
              top={"310px"}
              filter={"hue-rotate(190deg)"}
              transform={"rotate(5deg)"}
            >
              <Image
                src={flatBook}
                // w={"830px"}
                // h={"auto"}
                // marginLeft={"auto"}
                // marginRight={"auto"}
                filter={"hue-rotate(90deg)"}
              />
            </Box>
            <Box
              position={"absolute"}
              right={"-395px"}
              top={"310px"}
              filter={"hue-rotate(-250deg)"}
              transform={"rotate(5deg)"}
            >
              <Image
                src={flatBook}
                w={"830px"}
                // h={"auto"}
                // marginLeft={"auto"}
                // marginRight={"auto"}
                filter={"hue-rotate(10deg)"}
              />
            </Box>
            {/* <Box
              position={"absolute"}
              right={"795px"}
              top={"610px"}
              filter={"hue-rotate(160deg)"}
              // transform={"rotate(-5deg) scaleX(-1)"}
            >
              <Image
                src={plant}
                w={"830px"}
                // h={"auto"}
                // marginLeft={"auto"}
                // marginRight={"auto"}
                filter={"hue-rotate(10deg)"}
              />
            </Box> */}
            <Box
              position={"absolute"}
              left={"-130px"}
              top={"430px"}
              filter={"hue-rotate(160deg)"}
              transform={"rotate(20deg) scaleX(-1) "}
            >
              <Image
                src={flatBook}
                w={"730px"}
                // h={"auto"}
                // marginLeft={"auto"}
                // marginRight={"auto"}
                transform={"rotate(145deg) "}
                filter={"hue-rotate(15deg)"}
              />
            </Box>
            <Box
              position={"absolute"}
              left={"-130px"}
              top={"630px"}
              filter={"hue-rotate(160deg)"}
              transform={"rotate(140deg)  scaleY(-1) "}
            >
              <Image
                src={flatBook}
                w={"530px"}
                // h={"auto"}
                // marginLeft={"auto"}
                // marginRight={"auto"}
                transform={"rotate(85deg) "}
                filter={"hue-rotate(415deg)"}
              />
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default SideBookStackGraphic;
