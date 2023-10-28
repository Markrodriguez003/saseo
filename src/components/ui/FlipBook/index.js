import { Box, Center, Heading, Text, Divider } from "@chakra-ui/react";
import "./styles.css";
import bgHero from "../../../images/backgrounds/imagination-5153623_1920.png";
import bgHeroB from "../../../images/backgrounds/book-5831278_1920.jpg";

function FlipBook() {
  return (
    <>
      <Center>
        <div class="cover">
          <div class="book">
            <label for="page-1" class="book__page book__page--1">
              <img
                src={"https://m.media-amazon.com/images/I/51b09NRSkiL.jpg"}
                style={{
                  width: "350px",
                  height: "auto",
                  backgroundSize: "cover",
                }}
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
                <Box
                  w={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"20px"}
                >
                  <Heading color={"darkcyan"} fontSize={"3xl"}>
                    The Three Body Problem
                  </Heading>
                  <Text color={"darkcyan"} fontSize={"xl"}>
                    by
                  </Text>
                  <Text color={"darkcyan"} fontSize={"2xl"}>
                    Cixin Lui
                  </Text>
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
                  <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"20px"}
                  >
                    <Heading color={"darkcyan"} fontSize={"3xl"}>
                      Hitchiker's Guide to the Galaxy
                    </Heading>
                    <Text color={"darkcyan"} fontSize={"xl"}>
                      by
                    </Text>
                    <Text color={"darkcyan"} fontSize={"2xl"}>
                      Douglas Adams
                    </Text>

                    <Text color={"grey"} fontSize={"sm"}>
                      Seconds before the Earth is demolished to make way for a
                      galactic freeway, Arthur Dent is plucked off the planet by
                      his friend Ford Prefect, a researcher for the revised
                      edition of The Hitchhiker's Guide to the Galaxy who, for
                      the last 15 years, has been posing as an out-of-work
                      actor.
                    </Text>
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
                    src={
                      "https://m.media-amazon.com/images/I/91eIN7QelzL._AC_UY218_.jpg"
                    }
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
