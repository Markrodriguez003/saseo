// CHAKRA UI COMPONENTS
import {
  Box,
  Image,
  Text,
  Heading,
  Center,
  Stack,
  Button,
  Link,
  HStack,
  VStack,
} from "@chakra-ui/react";

// LIBRARY
import { bookGenreRetrival } from "lib/bookGenreRetrieval";
import { useEffect, useState } from "react";
// COMPONENTS
import WordRollerAnimation from "../ui/WordRollerAnimation";
import SideBookStackGraphic from "../ui/SideBookStackGraphic";
import HeadingPanel from "components/ui/HeadingPanel";
import TextPanel from "components/ui/TextPanel";
import BookCoverAnimation from "components/ui/BookCoverAnimation";
import AdPanels from "components/ui/AdPanels";
import BestsellerBookSection from "components/BestsellerBookSection";

// CSS
import "./FrontPageSection.design.css";

// DATA
import book_subject_cover_images from "../../data/book_subjects_cover_images.json";

// IMAGES
import magnifierIcon from "../../images/backgrounds/icon-347230_1920.png";

/*// ************************************************************************************************* */
/* MONTHLY BOOK SUGGESTION PANEL  */
/*// ************************************************************************************************* */
export function BookGenreSuggestionSection(usersLastSearchedGenre) {
  // console.log(`Inside book suggestion panel! --> ${book_subject_cover_images["science_fiction"][0]}`)
  // console.log(`Inside book suggestion panel! --> ${JSON.stringify(book_subject_cover_images["science_fiction"][0])}`)

  let covers = bookGenreRetrival();
  let usersLastSearched = "science_fiction";

  const suggestedSideBooks = book_subject_cover_images[usersLastSearched].map(
    (book, index) => {
      if (index > 1) {
        <Link
          key={`suggested-book-cover${index}`}
          href={book.link}
          alt={"Book cover"}
          target="_blank"
          rel="nofollow"
        >
          <Box w={"150px"} backgroundColor={"rgba(0,0,0,0.2)"} boxShadow="2xl">
            <BookCoverAnimation
              reverseFlip={true}
              size="sm"
              cover={book.cover}
            />
          </Box>
        </Link>;
      }
    }
  );

  // GRABBING SUGGESTED BOOK DATA (BY PREVIOUS COOKIES) FROM SERVER
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <Box
      textAlign={"center"}
      backgroundColor={"accent-1"}
      boxShadow="lg"
      p={"5px"}
      w={{
        base: "90%",
        lg: "98%",
        md: "98%",
        sm: "98%",
        xs: "98%",
        "2xs": "95%",
      }}
      marginLeft={"auto"}
      marginRight={"auto"}
      borderRadius={"30px"}
      paddingBottom={"50px"}
    >
      <HeadingPanel backgroundColor={"primary"}>
        Books you might like!
      </HeadingPanel>
      <Heading>{message}</Heading>

      <HStack justifyContent={"center"} wrap={"WRAP"} gap={"10px"}>
        {/* INSERT BUILT COMPONENT HERE! */}

        {/* MAIN BOOK  */}
        <Box w={"360px"}>
          <BookCoverAnimation
            size="lg"
            cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
          />
        </Box>

        {/* "CONTAINER" OF OTHER BOOKS */}
        <VStack
          gap={"10px"}
          wrap={"wrap"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          {/* FIRST ROW OF BOOKS (3) */}
          <HStack
            gap={"5px"}
            wrap={"wrap"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Box w={"170px"} backgroundColor={"pink"} boxShadow="2xl">
              <BookCoverAnimation
                reverseFlip={true}
                size="sm"
                cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676734077i/122757672.jpg"
              />
            </Box>
            <Box w={"170px"} boxShadow="2xl">
              <BookCoverAnimation
                size="sm"
                cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684818185i/75665890.jpg"
              />
            </Box>
            <Box w={"170px"}>
              <BookCoverAnimation
                reverseFlip={true}
                size="sm"
                cover="https://m.media-amazon.com/images/I/81Qt+L2IvCL._AC_UY218_.jpg"
              />
            </Box>
          </HStack>

          {/* SECOND ROW OF BOOKS (3) */}
          <HStack
            gap={"15px"}
            wrap={"wrap"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Box w={"170px"} backgroundColor={"pink"}>
              <BookCoverAnimation
                reverseFlip={true}
                size="sm"
                cover="https://m.media-amazon.com/images/I/81rITw6eLTL._AC_UY218_.jpg"
              />
            </Box>
            <Box w={"170px"} backgroundColor={"pink"}>
              <BookCoverAnimation
                reverseFlip={true}
                size="sm"
                cover="https://m.media-amazon.com/images/I/81rZH5mC2xL._AC_UY218_.jpg"
              />
            </Box>
            <Box w={"170px"} backgroundColor={"pink"}>
              <BookCoverAnimation
                reverseFlip={true}
                size="sm"
                cover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683827919l/101673225.jpg"
              />
            </Box>
          </HStack>
        </VStack>
      </HStack>
      <HStack
        gap={"15px"}
        wrap={"wrap"}
        paddingTop={"15px"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Box w={"170px"} backgroundColor={"pink"}>
          <BookCoverAnimation
            reverseFlip={true}
            size="sm"
            cover="https://m.media-amazon.com/images/I/81rITw6eLTL._AC_UY218_.jpg"
          />
        </Box>
        <Box w={"170px"} backgroundColor={"pink"}>
          <BookCoverAnimation
            reverseFlip={true}
            size="sm"
            cover="https://m.media-amazon.com/images/I/81rZH5mC2xL._AC_UY218_.jpg"
          />
        </Box>
        <Box w={"170px"} backgroundColor={"pink"}>
          <BookCoverAnimation
            reverseFlip={true}
            size="sm"
            cover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683827919l/101673225.jpg"
          />
        </Box>
        <Box w={"170px"} backgroundColor={"pink"}>
          <BookCoverAnimation
            reverseFlip={true}
            size="sm"
            cover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683827919l/101673225.jpg"
          />
        </Box>
        <Box w={"170px"} backgroundColor={"pink"}>
          <BookCoverAnimation
            reverseFlip={true}
            size="sm"
            cover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1683827919l/101673225.jpg"
          />
        </Box>
      </HStack>
    </Box>
  );
}
/*// ************************************************************************************************* */
/* "EXPLORE GENRES" INTRODUCTION SECTION */
/*// ************************************************************************************************* */

export function ExploreSection() {
  return (
    <>
      <Box
        position={"relative"}
        backgroundColor={"tertiary"}
        id="genre"
        paddingBottom={"40px"}
        paddingTop={"20px"}
        overflow={"hidden"}
        zIndex={2}
        h={"100%"}
        shadow={"2xl"}
      >
        <br />
        {/* SIDE BOOK */}
        <SideBookStackGraphic />
        <Image
          src={magnifierIcon}
          w={"100px"}
          h={"auto"}
          borderRadius={"8px"}
          textAlign={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={"2px"}
        />
        <Center padding={5}>
          <Heading
            color={"text"}
            textAlign={"center"}
            fontSize={"6xl"}
            letterSpacing={1}
          >
            {" "}
            Explore different genres
          </Heading>
        </Center>
        <br />
        <WordRollerAnimation />
        <br />
        <TextPanel>
          Interested in finding a book or two to read? Well, Saseo is here to
          guide you! You can search for many book titles by genre. We have
          almost every book genre to choose from! All you need to do is choose a
          genre and how many books you would like suggested to you! You can also
          roll the dice and get a random book suggested to you!
        </TextPanel>
        <VStack w={"100%"} marginTop={"50px"}>
          <Text color={"page"} textAlign={"center"} paddingTop={"10px"}>
            Grab your book suggestions here:{" "}
          </Text>
          <Stack
            direction={{
              base: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
              "2xs": "column",
            }}
            spacing={4}
            align="center"
            justify={{
              base: "center",
              lg: "center",
              md: "center",
              sm: "center",
            }}
            paddingBottom={"45px"}
            paddingTop={"15px"}
          >
            <Link href="suggest" rel="search">
              <Button
                backgroundColor={"primary"}
                variant="solid"
                color={"white"}
                fontSize={"xl"}
              >
                Suggestions
              </Button>
            </Link>
            <Link href="random" rel="search">
              <Button
                backgroundColor={"secondary"}
                variant="solid"
                color={"white"}
                fontSize={"xl"}
              >
                Random
              </Button>
            </Link>
            <Link href="isbn" rel="search">
              <Button
                backgroundColor={"white"}
                color={"primary"}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                ISBN
              </Button>
            </Link>
          </Stack>
          <Link href="isbn" rel="search">
            <Button
              backgroundColor={"white"}
              color={"primary"}
              fontWeight={"bold"}
              fontSize={"xl"}
            >
              Sign Up!
            </Button>
          </Link>
        </VStack>
      </Box>
    </>
  );
}

/*// ************************************************************************************************* */
/* FRONT PAGE ENTRY POINT */
/*// ************************************************************************************************* */
function FrontPageSection() {
  return (
    <>
      <ExploreSection />
      <br />
      <br />
      <AdPanels />
      <BookGenreSuggestionSection />
      <br />
      <br />
      <BestsellerBookSection />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default FrontPageSection;
