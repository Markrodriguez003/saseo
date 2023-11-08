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
  Show,
  Hide,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";

// LIBRARY
import Xarrow from "react-xarrows";
import { bookGenreRetrival } from "lib/bookGenreRetrieval";

// COMPONENTS
import WordRollerAnimation from "../ui/WordRollerAnimation";
import SideBookStackGraphic from "../ui/SideBookStackGraphic";
import FlipBook from "components/ui/FlipBook";
import HeadingPanel from "components/ui/HeadingPanel";
import TextPanel from "components/ui/TextPanel";
import Fade from "react-reveal/Fade";
import BookCoverAnimation from "components/ui/BookCoverAnimation";
import AdPanels from "components/ui/AdPanels";
import BestsellerBookSection from "components/BestsellerBookSection";

// CSS
import "./FrontPageSection.design.css";

// DATA
import book_subject_cover_images from "../../data/book_subjects_cover_images.json";

// IMAGES
import magnifierIcon from "../../images/backgrounds/icon-347230_1920.png";
import confusedAvatar from "../../images/confusedAvatar.png";

// ICONS
import { FaCog } from "react-icons/fa";

// NOTES

/*// ************************************************************************************************* */
/* INFOGRAPHIC SECTION  */
/*// ************************************************************************************************* */
export function InfographicSection() {
  return (
    <Box marginBottom={"180px"}>
      <Show below="lg">
        <Center ata-aos="flip-left">
          <Image
            src={confusedAvatar}
            w={"220px"}
            h={"auto"}
            borderRadius={"full"}
            marginTop={"45px"}
          />
        </Center>
      </Show>
      <Center marginTop={"45px"}>
        <Heading
          backgroundColor={"secondary"}
          color={"white"}
          fontSize={"5xl"}
          textAlign={"center"}
          padding={"25px"}
          display={"inline"}
          borderRadius={"25px"}
          marginBottom={{
            base: "120px",
            sm: "120px",
            md: "120px",
            lg: "120px",
            xs: "120p",
            "2xs": "145px",
          }}
          marginTop={{
            base: "40px",
            sm: "0px",
            md: "0px",
            lg: "40px",
            xs: "0px",
            "2xs": "0px",
          }}
          id="intro"
        >
          How to use Saseo
        </Heading>
      </Center>
      <br />
      <br />
      <Box
        display={"flex"}
        flexDirection={{
          base: "row",
          sm: "column",
          md: "column",
          lg: "row",
          xs: "column",
          "2xs": "column",
        }}
        padding={"30px"}
        height={"300px"}
        justifyContent={{
          base: "space-around",
          sm: "center",
          md: "center",
          lg: "space-around",
          xs: "center",
          "2xs": "center",
        }}
        gap={"60px"}
      >
        <Box
          alignContent={"center"}
          alignSelf={{
            base: "flex-start",
            sm: "center",
            md: "center",
            lg: "flex-start",
            xs: "center",
            "2xs": "center",
          }}
          w={{
            base: "30%",
            sm: "80%",
            md: "50%",
            lg: "30%",
            xs: "90%",
            "2xs": "90%",
          }}
        >
          <Text
            color={"white"}
            fontSize={{
              base: "xl",
              sm: "xl",
              md: "xl",
              lg: "xl",
              xs: "md",
              "2xs": "md",
            }}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
            id="start"
            textAlign={"center"}
          >
            First, search for the book genre you wish to have suggested to you,
            or find a book via isbn.
          </Text>
        </Box>
        <Box
          alignSelf={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "end",
            xs: "center",
            "2xs": "center",
          }}
          w={{
            base: "30%",
            sm: "80%",
            md: "50%",
            lg: "30%",
            xs: "90%",
            "2xs": "90%",
          }}
          display={"flex"}
          flexDirection={"column"}
          gap={"35px"}
        >
          <Hide below="lg">
            <Image
              ata-aos="flip-left"
              src={confusedAvatar}
              w={"220px"}
              h={"auto"}
              borderRadius={"full"}
              alignSelf={"center"}
            />
          </Hide>
          <Text
            color={"white"}
            fontSize={{
              base: "xl",
              sm: "xl",
              md: "xl",
              lg: "xl",
              xs: "md",
              "2xs": "md",
            }}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
            id="middle"
            textAlign={"center"}
          >
            Your suggested books will be generated. Find the books that interest
            you by saving them in your library.
          </Text>
        </Box>
        <Box
          alignContent={"center"}
          alignSelf={{
            base: "flex-start",
            sm: "center",
            md: "center",
            lg: "flex-start",
            xs: "center",
            "2xs": "center",
          }}
          w={{
            base: "30%",
            sm: "80%",
            md: "50%",
            lg: "30%",
            xs: "90%",
            "2xs": "90%",
          }}
        >
          <Text
            color={"white"}
            fontSize={{
              base: "xl",
              sm: "xl",
              md: "xl",
              lg: "xl",
              xs: "md",
              "2xs": "md",
            }}
            letterSpacing={0.5}
            className="highlight-text"
            padding={"15px"}
            borderRadius={"30px"}
            id="end"
            textAlign={"center"}
          >
            Afterward you can email the book suggestions to yourself or anyone
            else via email!{" "}
          </Text>
        </Box>

        {/* ARROWS */}

        {/* <Xarrow
          start="intro"
          end="start"
          color="darkcyan"
          dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
          animateDrawing={5}
        /> */}
        <Xarrow
          start="start"
          end="middle"
          color="darkcyan"
          dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
          animateDrawing={5}
        />
        <Xarrow
          start="middle"
          end="end"
          color="darkcyan"
          dashness={{ strokeLen: 5, nonStrokeLen: 5, animation: -5 }}
          animateDrawing={3}
        />
      </Box>
    </Box>
  );
}

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
    >
      <HeadingPanel backgroundColor={"primary"}>
        Books you might like!
      </HeadingPanel>

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
            <Box w={"170px"} hbackgroundColor={"pink"} boxShadow="2xl">
              <BookCoverAnimation
                size="sm"
                cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684818185i/75665890.jpg"
              />
            </Box>
            <Box w={"170px"} hbackgroundColor={"pink"}>
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
        <br />
        <WordRollerAnimation />
        <br />
        <br />
        <TextPanel>
          Interested in finding a book or two to read? Well, Saseo is here to
          guide you! You can search for many book titles by genre. We have
          almost every book genre to choose from! All you need to do is choose a
          genre and how many books you would like suggested to you! You can also
          roll the dice and get a random book suggested to you!
        </TextPanel>
        <Text color={"white"} textAlign={"center"} paddingTop={"10px"}>
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
          <Link href="suggest">
            <Button
              backgroundColor={"primary"}
              variant="solid"
              color={"white"}
              fontSize={"xl"}
            >
              Suggestions
            </Button>
          </Link>
          <Link href="random">
            <Button
              backgroundColor={"secondary"}
              variant="solid"
              color={"white"}
              fontSize={"xl"}
            >
              Random
            </Button>
          </Link>
          <Link href="isbn">
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
      <Fade>
        <InfographicSection />
      </Fade>
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
