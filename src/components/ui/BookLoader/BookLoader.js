import "./BookLoader.design.css";
import { Fade } from "react-reveal";
// https://codepen.io/nxworld/pen/zwGpXr
function BookLoader() {
  return (
    <Fade>
      <div className="book-container">
        <div className="book">
          <div className="book__pg-shadow"></div>
          <div className="book__pg"></div>
          <div className="book__pg book__pg--2"></div>
          <div className="book__pg book__pg--3"></div>
          <div className="book__pg book__pg--4"></div>
          <div className="book__pg book__pg--5"></div>
        </div>
        <h1>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </h1>
      </div>
    </Fade>
  );
}

export default BookLoader;
