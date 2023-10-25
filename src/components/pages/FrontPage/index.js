import FrontPageHero from "../../FrontPageHero";
import FrontPageSection from "components/FrontpageSection";
import WordRollerAnimation from "../../ui/WordRollerAnimation";
import FlipBook from "../../FlipBook";

import { Box, Heading } from "@chakra-ui/react";

import backgroundImg from "../../../images/backgrounds/background-7262229_1920.jpg";

function FrontPage() {
  return (
    <>
      <FrontPageHero />
      <FrontPageSection />
      {/* <FlipBook /> */}
    </>
  );
}

export default FrontPage;
