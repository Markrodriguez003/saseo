import { Box, Center, Heading } from "@chakra-ui/react";
import "./styles.css";
import bgHero from "../../images/backgrounds/imagination-5153623_1920.png";
import bgHeroB from "../../images/backgrounds/book-5831278_1920.jpg";

function FlipBook() {
  return (
    <>
      <Center>
        <div class="cover">
          <div class="book">
            <label for="page-1" class="book__page book__page--1">
              <img
                src={bgHero}
                style={{ width: "350px", height: "auto" }}
                alt="backg"
              />
            </label>

            <label for="page-2" class="book__page book__page--4">
              <div class="page__content">
                <br />
                <br />
                <br />
                <br />
                <br />
                <Box w={"100%"}>
                  <Heading color={"darkcyan"}>
                    Get lost in the cosmos of any book.
                  </Heading>
                </Box>
              </div>
            </label>

            <input type="radio" name="page" id="page-1" />

            <input type="radio" name="page" id="page-2" />
            <label class="book__page book__page--2">
              <div class="book__page-front">
                <div class="page__content">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Box>
                    <Heading color={"darkcyan"}>
                      Looking for a book has never been easier.
                    </Heading>
                  </Box>

                  <div class="page__content-copyright">
                    <p>SASEO Publishing</p>
                    <p>Miami - MMXII</p>
                  </div>
                </div>
              </div>
              <div class="book__page-back">
                <div class="page__content">
                  <img
                    src={bgHeroB}
                    alt="Bgimage"
                    style={{ width: "450px", height: "475PX" }}
                  />

                  <div class="page__number">2</div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </Center>
    </>
  );
}

export default FlipBook;
