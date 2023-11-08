// CHAKRA UI
import {
  Box,
  Text,
  Divider,
  Center,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";

// REACT
import { Suspense, useState, useContext } from "react";

// IMAGES
import NYTimesBanner from "../../images/banners/NYTimesBestseller-Banner.svg";

// COMPONENTS
import HeadingPanel from "components/ui/HeadingPanel";
import BookCoverAnimation from "components/ui/BookCoverAnimation";

// LIBRARIES
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import "./BestsellerBookSection.design.css";

// import required modules
import { EffectCreative, Navigation } from "swiper/modules";

// COMPONENTS

// ASSETS - IMAGES
import emptySearchImg from "../../images/NoBookFound.png";

function BestsellerBookSection(props) {
  return (
    <>
      <VStack
        justifyContent={"center"}
        alignContent={"center"}
        position={"relative"}
        zIndex={1}
      >
        <Image
          alt="NY-Times-Bestseller-Banner"
          src={NYTimesBanner}
          w={"650px"}
        />
        <Heading fontFamily={"times new roman"}>Bestsellers</Heading>
        <br />
        <Box>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <VStack>
                <BookCoverAnimation
                  reverseFlip={true}
                  size="lg"
                  cover="https://m.media-amazon.com/images/I/81rITw6eLTL._AC_UY218_.jpg"
                />
                <Text color={"black"}>The Three Body Problem - Cixin Liu</Text>
              </VStack>
            </SwiperSlide>
            <SwiperSlide>
              <VStack>
                <BookCoverAnimation
                  reverseFlip={true}
                  size="lg"
                  cover="https://m.media-amazon.com/images/I/81rZH5mC2xL._AC_UY218_.jpg"
                />
                <Text color={"black"}>Hail Mary - Andy Weir</Text>
              </VStack>
            </SwiperSlide>
            <SwiperSlide>
              <VStack>
                <BookCoverAnimation
                  reverseFlip={true}
                  size="lg"
                  cover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683827919l/101673225.jpg"
                />
                <Text color={"black"}>
                  The Land of Milk and Honey - C Pam Zhang
                </Text>
              </VStack>
            </SwiperSlide>
            <SwiperSlide>
              <VStack gap={"10px"}>
                <BookCoverAnimation
                  reverseFlip={true}
                  size="lg"
                  cover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683827919l/101673225.jpg"
                />
                <Text color={"black"}>
                  The Land of Milk and Honey - C Pam Zhang
                </Text>
              </VStack>
            </SwiperSlide>
            <SwiperSlide>
              <VStack>
                <BookCoverAnimation
                  reverseFlip={true}
                  size="lg"
                  cover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683827919l/101673225.jpg"
                />
                <Text color={"black"}>
                  The Land of Milk and Honey - C Pam Zhang
                </Text>
              </VStack>
            </SwiperSlide>
          </Swiper>
          <Heading
            fontFamily={"times new roman"}
            size={"2xl"}
            position={"absolute"}
            bottom={"205px"}
            left={"645px"}
            zIndex={2}
            style={{ writingMode: "vertical-rl", transform:"rotate(180deg)" }}
          >
            {" "}
            FICTION{" "}
          </Heading>
        </Box>
      </VStack>
    </>
  );
}

export default BestsellerBookSection;
