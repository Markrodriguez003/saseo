import { Box, Image, Stack, Center } from "@chakra-ui/react";
import "./styles.css";
// import magnifierImage from "../";
import abstractBG from "../../../images/backgrounds/icon-347230_1920.png";
import middleBook from "../../../images/hero/hero-middle-book.png";
import endBook from "../../../images/hero/hero-end-book.png";

function WordRollerAnimation() {
  return (
    <>
      <Box position={"relative"}>
        <Image
          src={middleBook}
          alt="Open Book image"
          h={"60vh"}
          w={"100vw"}
          m={0}
          p={0}
        />
        <div className="word-roller-container">
          <h4 class="wordCarousel">
            <span>Explore different genres: </span>
            <div>
              <ul class="flip5">
                <li>Adventure</li>
                <li>Science Fiction</li>
                <li>Biography</li>
                <li>Horror</li>
                <li>Romance</li>
                <li>Non-Fiction</li>
                <li>Fantasy</li>
                <li>Comedy</li>
                <li>Mystery</li>
              </ul>
            </div>
          </h4>
          <hr />
          <p className="body-text">
            Interested in finding a book or two to read? Well, Saseo is here to
            guide you! You can search for many book titles by genre. We have
            almost every book genre to choose from! All you need to do is choose
            a genre and how many books you would like to see suggested! Once you
            get your list you can mark the books you wish to put on your reading
            list and email it to you or to any other avid book reader! If you
            are feeling lucky you can try our Random book suggestion to get
            something completely unexpected! In addition, we provide a book
            search via ISBN.
          </p>
        </div>
        <Image
          src={middleBook}
          alt="Open Book image"
          h={"60vh"}
          w={"100vw"}
          m={0}
          p={0}
        />
      </Box>

      <Box>
        <Image
          src={endBook}
          alt="Open Book image"
          h={"60vh"}
          w={"100vw"}
          m={0}
          p={0}
        />
      </Box>

      <Center
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection={"column"}
      >
        <Image
          textAlign={"center"}
          src={abstractBG}
          alt="Open Book image"
          h={"auto"}
          w={"12vw"}
          m={0}
          p={0}
        />
        <h1>Search any book via ISBN!</h1>
      </Center>
    </>
  );
}

export default WordRollerAnimation;
