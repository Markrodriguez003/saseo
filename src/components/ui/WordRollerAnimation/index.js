import { Heading, Flex, Box, Image, Stack, Center } from "@chakra-ui/react";
import { useState } from "react";
import "./WordRollerAnimation.design.styles.css";

function WordRollerAnimation() {
  const [genres, setGenres] = useState([
    "Non-Fiction",
    "Sci-fi",
    "Mystery",
    "Romance",
    "Memoir",
    "Humor",
    "Thriller",
    "Fiction",
    "Philosophy",
    "Horror",
    "Fantasy",
  ]);
  return (
    <>
      <div className="scroller-container">
        <div className="scroller">
          {/* //! change to array.map function */}
          <div>
            <span className="nonFiction">{genres[0]}</span>
            <br />
            <span className="sci-fi">{genres[1]}</span>
            <br />
            <span className="mystery">{genres[2]}</span>
            <br />
            <span className="romance">{genres[3]}</span>
            <br />
            <span className="thriller">{genres[6]}</span>
            <br />
            <span className="fantasyFont">{genres[10]}</span>
            <br />
            <span className="philosophy">{genres[8]}</span>
            <br />
            <span className="horror">{genres[9]}</span>
            <br />
            <span className="fiction">{genres[7]}</span>
            <br />
            <span className="memoir">{genres[4]}</span>
            <br />
            <span className="humor">{genres[5]}</span>

          </div>
        </div>
      </div>
    </>
  );
}

export default WordRollerAnimation;
