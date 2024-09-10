// NOTES
// Cool font https://www.ransomizer.com/
// Instead of ransom text above perhaps halftone fonts --> https://www.sliderrevolution.com/resources/css-text-animation/ "Strokes, Shadows + Halftone Effects"
// HTML TO JSX generator https://transform.tools/html-to-jsx
// ? Texture used for bottom headers?
// https://codepen.io/hexagoncircle/pen/Exyewjv
// https://codepen.io/robdimarzo/pen/VqjvqR
// CHAKRA COMPONENTS
import { Box } from "@chakra-ui/react";

// IMAGES
// * Letter Textures
import texture1 from "../../../images/textures/texture1.png";
import texture2 from "../../../images/textures/texture2.png";
import texture3 from "../../../images/textures/texture3.png";
import texture4 from "../../../images/textures/texture4.jpg";
import texture5 from "../../../images/textures/texture5.jpg";
import texture6 from "../../../images/textures/texture6.jpg";
import texture7 from "../../../images/textures/texture7.png";
import texture8 from "../../../images/textures/texture8.jpg";
import texture9 from "../../../images/textures/texture9.jpg";
import texture10 from "../../../images/textures/texture10.jpg";
import texture11 from "../../../images/textures/texture11.jpg";
import texture12 from "../../../images/textures/texture12.jpg";

import "./style.css";

function RandomLetterHeader() {
  return (
    <>
      <Box w={"75%"} textAlign={"center"} className="about-header">
        <div id="ransomizer">
          {/* WE */}
          <div className="rww">
            <div
              className="rr"
              style={{
                backgroundColor: "#006847",
                color: "#ceffef",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                fontSize: "110%",
                backgroundImage: `url(${texture1})`,
                backgroundPosition: "left top",
                fontStyle: "italic",
                textTransform: "uppercase",
                lineHeight: "125%",
                margin: "0.1em",
                padding: "0.2em",
                verticalAlign: "0.1em",
              }}
            >
              W
            </div>
            <div
              style={{
                backgroundColor: "#F9AA51",
                color: "#000000",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                fontSize: "100%",
                fontWeight: "bold",
                backgroundBlendMode: "color-burn",
                backgroundImage: `url(${texture2})`,
                backgroundPosition: "center top",
                fontStyle: "italic",
                textTransform: "lowercase",
                lineHeight: "75%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "-0.1em",
              }}
            >
              E
            </div>
          </div>{" "}
          {/* HELP */}
          <div className="rww">
            <div
              style={{
                backgroundColor: "#0C8489",
                color: "#fbffff",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                fontSize: "90%",
                backgroundImage: `url(${texture2})`,
                backgroundPosition: "center top",
                boxShadow: "-1px 1px 2px #333",
                textTransform: "uppercase",
                lineHeight: "75%",
                textDecoration: "underline",
                margin: "0.1em",
                padding: "0.1em",
                verticalAlign: "baseline",
              }}
            >
              H
            </div>
            <div
              className="rr"
              style={{
                backgroundColor: "#047a16",
                color: "#ededed",
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: "110%",
                backgroundImage: `url(${texture3})`,
                backgroundPosition: "center center",
                boxShadow: "1px -1px 2px #333",
                textTransform: "lowercase",
                lineHeight: "100%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "-0.1em",
              }}
            >
              E
            </div>
            <div
              className="rl"
              style={{
                backgroundColor: "#74309c",
                color: "#ededed",
                fontFamily: '"Impact", Charcoal, sans-serif',
                fontSize: "90%",
                fontWeight: "bolder",
                backgroundImage: `url(${texture4})`,
                backgroundBlendMode: "soft-light",
                backgroundPosition: "right bottom",
                fontStyle: "italic",
                boxShadow: "-1px -1px 2px #333",
                textTransform: "uppercase",
                lineHeight: "125%",
                margin: "0.1em",
                padding: "0.2em",
                verticalAlign: "0.1em",
              }}
            >
              L
            </div>
            <div
              className="rr"
              style={{
                backgroundColor: "#F2F227",
                color: "#fbffff",
                fontFamily: '"Verdana", Geneva, sans-serif',
                fontSize: "90%",
                fontWeight: "bold",
                fontStyle: "italic",
                backgroundImage: `url(${texture10})`,
                boxShadow: "1px 1px 2px #333",
                textTransform: "uppercase",
                lineHeight: "75%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "0.1em",
              }}
            >
              P
            </div>
          </div>{" "}
          {/* GROW */}
          <div className="rww">
            <div
              style={{
                backgroundColor: "#F15770",
                color: "#000000",
                fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
                fontSize: "110%",
                fontWeight: "bold",
                backgroundImage: `url(${texture2})`,
                backgroundPosition: "left top",
                textTransform: "uppercase",
                lineHeight: "125%",
                margin: "0.1em",
                padding: "0.1em",
                verticalAlign: "baseline",
              }}
            >
              G
            </div>
            <div
              style={{
                backgroundColor: "#803F1D",
                color: "#ffffff",
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: "90%",
                textTransform: "uppercase",
                lineHeight: "100%",
                margin: "0.1em",
                padding: "0.2em",
                verticalAlign: "baseline",
              }}
            >
              R
            </div>
            <div
              className="rr"
              style={{
                backgroundColor: "#F04F1D",
                color: "#ffffff",
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: "110%",
                fontWeight: "bold",
                fontStyle: "italic",
                backgroundImage: `url(${texture7})`,
                boxShadow: "1px -1px 2px #333",
                textTransform: "lowercase",
                lineHeight: "75%",
                textDecoration: "underline",
                margin: "0.1em",
                padding: "0.1em",
                verticalAlign: "-0.1em",
              }}
            >
              O
            </div>
            <div
              style={{
                backgroundColor: "#CE1126",
                color: "#ffffff",
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: "90%",
                fontWeight: "bold",
                boxShadow: "1px 1px 2px #333",
                lineHeight: "100%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "0.1em",
              }}
            >
              W
            </div>
          </div>{" "}
          {/* YOUR */}
          <div className="rww">
            <div
              style={{
                backgroundColor: "#F9AA51",
                color: "#000000",
                fontFamily: '"Impact", Charcoal, sans-serif',
                fontSize: "100%",
                fontWeight: "bold",
                backgroundImage: `url(${texture3})`,
                backgroundPosition: "right bottom",
                boxShadow: "-1px 1px 2px #333",
                textTransform: "lowercase",
                lineHeight: "75%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "-0.1em",
              }}
            >
              Y
            </div>
            <div
              className="rl"
              style={{
                backgroundColor: "#E21051",
                color: "#000000",
                fontFamily: '"Verdana", Geneva, sans-serif',
                fontSize: "100%",
                fontWeight: "bold",
                backgroundImage: `url(${texture1})`,
                backgroundPosition: "right bottom",
                boxShadow: "-1px -1px 2px #333",
                textTransform: "lowercase",
                lineHeight: "100%",
                margin: "0.1em",
                padding: "0.1em",
                verticalAlign: "baseline",
              }}
            >
              O
            </div>
            <div
              style={{
                backgroundColor: "#CE1126",
                color: "#ffffff",
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: "90%",
                fontWeight: "bolder",
                backgroundImage: `url(${texture2})`,
                backgroundBlendMode: `overlay`,
                backgroundPosition: "left center",
                textTransform: "lowercase",
                lineHeight: "75%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "0.1em",
              }}
            >
              U
            </div>
            <div
              className="rl"
              style={{
                backgroundColor: "#AA4186",
                color: "#ffffff",
                fontFamily: '"Impact", Charcoal, sans-serif',
                fontSize: "100%",
                backgroundImage: `url(${texture5})`,
                backgroundBlendMode: "overlay",
                backgroundPosition: "right top",
                fontStyle: "italic",
                boxShadow: "1px 1px 2px #333",
                lineHeight: "100%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "-0.1em",
              }}
            >
              R
            </div>
          </div>{" "}
          {/* LIBRARY */}
          <div className="rww">
            <div
              className="rl"
              style={{
                backgroundColor: "#A9F349",
                color: "#000000",
                fontFamily: "serif",
                fontSize: "100%",
                fontWeight: "bold",
                backgroundImage: `url(${texture9})`,
                backgroundBlendMode: "overlay",
                backgroundPosition: "center bottom",
                fontStyle: "italic",
                lineHeight: "75%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "0.1em",
              }}
            >
              L
            </div>
            <div
              style={{
                backgroundColor: "#006847",
                color: "#000",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                fontSize: "110%",
                backgroundImage: `url(${texture9})`,
                backgroundBlendMode: `overlay`,
                backgroundPosition: "top center",
                boxShadow: "1px 1px 2px #333",
                textTransform: "lowercase",
                lineHeight: "125%",
                margin: "0.1em",
                padding: "0.2em",
                verticalAlign: "0.1em",
              }}
            >
              I
            </div>
            <div
              className="rr"
              style={{
                backgroundColor: "#EA0",
                color: "#000000",
                fontFamily: '"Arial", Helvetica, sans-serif',
                fontSize: "110%",
                backgroundImage: `url(${texture6})`,
                backgroundBlendMode: "overlay",
                backgroundPosition: "left center",
                fontStyle: "italic",
                textTransform: "lowercase",
                lineHeight: "125%",
                margin: "0.1em",
                padding: "0.1em",
                verticalAlign: "0.1em",
              }}
            >
              B
            </div>
            <div
              style={{
                backgroundColor: "#25A",
                color: "#ffffff",
                fontFamily: '"Comic Sans MS", cursive',
                fontSize: "90%",
                backgroundPosition: "right center",
                fontStyle: "italic",
                boxShadow: "-1px -1px 2px #333",
                textTransform: "uppercase",
                lineHeight: "75%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "-0.1em",
              }}
            >
              R
            </div>
            <div
              style={{
                backgroundColor: "#D2A567",
                color: "#000000",
                fontFamily: '"Georgia", serif',
                fontSize: "90%",
                textTransform: "lowercase",
                lineHeight: "125%",
                margin: "0.1em",
                padding: "0.3em",
                verticalAlign: "-0.1em",
              }}
            >
              A
            </div>
            <div
              className="rr"
              style={{
                backgroundColor: "#F8C83C",
                color: "#000000",
                fontFamily: '"Tahoma", Geneva, sans-serif',
                fontSize: "100%",
                backgroundImage: `url(${texture8})`,
                backgroundPosition: "right top",
                fontStyle: "italic",
                boxShadow: "1px 1px 2px #333",
                textTransform: "lowercase",
                lineHeight: "125%",
                textDecoration: "underline",
                margin: "0.1em",
                padding: "0.2em",
                verticalAlign: "0.1em",
              }}
            >
              R
            </div>
            <div
              className="rr"
              style={{
                backgroundColor: "#0C8489",
                color: "#fbffff",
                fontFamily: '"Tahoma", Geneva, sans-serif',
                // backgroundImage: `url(${texture9})`,
                fontSize: "100%",
                fontStyle: "italic",
                textTransform: "lowercase",
                lineHeight: "75%",
                margin: "0.1em",
                padding: "0.2em",
                verticalAlign: "baseline",
              }}
            >
              Y
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default RandomLetterHeader;
