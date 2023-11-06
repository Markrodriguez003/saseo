import "./style.css";
import {Box} from "@chakra-ui/react"

function BookCoverAnimation({ cover, author_name, title, size }) {
  return (
    <>
      
      <Box zIndex={1} className="flip-book-container">
        <div className="flip-book">
          <div className="flip-book-front">
            <div className="flip-book-cover">
              <img
              // ! make this a general URL instead of a specific one like the one below
                src={cover}
                // src={`https://covers.openlibrary.org/b/id/${cover}-L.jpg`}
                alt={`cover-${cover}`}
              />
              {/* <img src={`https://m.media-amazon.com/images/I/71UJ-KsY0xL._AC_UL480_FMwebp_QL65_.jpg`} alt={`cover-${cover}`} /> */}
            </div>
          </div>
          {/* <div className="flip-book-left-side">
            <h2>
              <span>{author_name}</span>
              <span>{title}</span>
            </h2>
          </div> */}
        </div>
      </Box>
    </>
  );
}

export default BookCoverAnimation;
