// CHAKRA UI
import {
  Box,
  Text,
  Link,
  Heading,
  Image,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

// REACT
import { Suspense, useEffect, useState, useContext } from "react";

// COMPONENTS
import HeadingPanel from "components/ui/HeadingPanel";
import BookCoverAnimation from "components/ui/BookCoverAnimation";

// LIBRARIES
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import FetchNYBestSellers from "lib/FetchNYBestSellers";

// CSS
import "./BestsellerBookSection.design.css";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

// TEST
import test_data from "../../data/NY_bestseller_example.json";

// ICONS
import { FaChevronCircleDown } from "react-icons/fa";

// IMAGES
import NYTimesBanner from "../../images/banners/NYTimesBestseller-Banner.svg";
import emptySearchImg from "../../images/NoBookFound.png";
import swipeIcon from "../../images/icons/swipeIcon.png";

function BestsellerBookSection(props) {
  const [md] = useMediaQuery("(max-width: 905px)");
  const bestsellerBooks = test_data.results.books;
  // Makes the call to retrieve best seller books json data
  useEffect(() => {
    // console.log(`Loading New York Best Seller Books!`);
    // FetchNYBestSellers();
  });

  return (
    <>
      <br />
      <VStack
        justifyContent={"center"}
        alignContent={"center"}
        position={"relative"}
        zIndex={1}
      >
        <Image
          alt="NY-Times-Bestseller-Banner"
          src={NYTimesBanner}
          w={{ base: "45%", md: "50%", sm: "70%", xs: "85%", "2xs": "85%" }}
        />
        <Heading fontFamily={"times new roman"}>Bestsellers</Heading>
        {/* <br />
        <FaChevronCircleDown className="floating" color="darkcyan" size={"35px"} /> */}
        <br />
        {/* ********************************************************************* */}
        {/* CAROUSEL */}
        {/* ********************************************************************* */}
        <Box backgroundColor={"transparent"} w={"100%"}>
          {md ? (
            <>
              <Image
                src={swipeIcon}
                w={"25px"}
                marginLeft={"auto"}
                marginRight={"auto"}
                className="swiper-gesture-animation"
              />
              <Text
                fontSize={"xs"}
                color={"grey"}
                textAlign={"center"}
                marginTop={"5px"}
              >
                Scroll to see ranked books
              </Text>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {bestsellerBooks.map((book, index) => (
                  <SwiperSlide
                    key={`NYT-Bestseller-${book.title}-${index} `}
                    style={{ padding: "60px" }}
                  >
                    <VStack>
                      <Link
                        href={book.amazon_product_url}
                        target="_blank"
                        isExternal
                        rel="Noopener noreferrer nofollow"
                      >
                        <Image src={book.book_image} w={"290px"} />
                        <Text color={"black"}>{book.title}</Text>
                        <Text color={"grey"} fontSize={"16px"}>
                          {book.author}
                        </Text>
                      </Link>
                    </VStack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
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
              {bestsellerBooks.map((book, index) => (
                <SwiperSlide
                  key={`NYT-Bestseller-${book.title}-${index} `}
                  style={{ padding: "60px" }}
                >
                  <VStack>
                    <Link
                      href={book.amazon_product_url}
                      target="_blank"
                      isExternal
                      rel="Noopener noreferrer nofollow"
                    >
                      <BookCoverAnimation
                        reverseFlip={false}
                        size={"lg"}
                        cover={book.book_image}
                      />
                      <Text color={"black"}>{book.title}</Text>
                      <Text color={"grey"} fontSize={"16px"}>
                        {book.author}
                      </Text>
                    </Link>
                  </VStack>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* 
 

*/}

          {/* <Heading
            fontFamily={"times new roman"}
            size={"2xl"}
            position={"absolute"}
            bottom={"205px"}
            left={"645px"}
            zIndex={2}
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {" "}
            FICTION{" "}
          </Heading> */}
        </Box>
      </VStack>
    </>
  );
}

export default BestsellerBookSection;
