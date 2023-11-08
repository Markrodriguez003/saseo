import "./style.css";
import { Box } from "@chakra-ui/react";
import { transform } from "framer-motion";
import { useState } from "react";

function BookCoverAnimation({
  cover,
  author_name,
  title,
  size,
  reverseFlip = false,
}) {
  // Configurable width & height of book image
  let book_w;
  let book_h;
  // Component style settings in object form
  let hoverStyle = {};
  const [deg, setDeg] = useState(false);
  // Checks to see if user wants the book animation flip to the other side
  reverseFlip
    ? (hoverStyle = {
        transform: deg
          ? `rotate3d(0, 1, 0, -35deg)`
          : `rotate3d(0, 1, 0, 0deg)`,
      })
    : (hoverStyle = {
        transform: deg ? `rotate3d(0, 1, 0, 35deg)` : `rotate3d(0, 1, 0, 0deg)`,
      });

  //On hover of book cover
  function flipBook(e) {
    setDeg(true);
  }

  // off-hover of book cover
  function flipBookBack(e) {
    setDeg(false);
  }

  // Used to determine what size the user wants animated book cover
  switch (size) {
    case "lg":
      book_w = "355px";
      book_h = "510px";
      break;
    case "md":
      book_w = "317px";
      book_h = "490px";
      break;
    case "sm":
      book_w = "170px";
      book_h = "270px";
      break;

    default:
      book_w = "315px";
      book_h = "490px";
      break;
  }

  return (
    <>
      <Box zIndex={1} className="flip-book-container">
        <Box
          className="flip-book"
          position={"relative"}
          display={"block"}
          w={book_w}
          h={book_h}
          color={"#2b2b2b"}
          fontWeight={"400"}
          onMouseEnter={flipBook}
          onMouseLeave={flipBookBack}
          style={hoverStyle}
        >
          <Box className="flip-book-front">
            <Box className="flip-book-cover" w={book_w} h={book_h}>
              <img src={cover} alt={`cover-${cover}`} />
            </Box>
          </Box>
          {/* <div className="flip-book-left-side">
            <h2>
              <span>{author_name}</span>
              <span>{title}</span>
            </h2>
          </div> */}
        </Box>
      </Box>
    </>
  );
}

export default BookCoverAnimation;
