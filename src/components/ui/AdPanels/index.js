import { Link, Center, Image, Box } from "@chakra-ui/react";

// * DIFFERENT AD BANNER IMAGES
import ad_1 from "../../../images/ads/ad-8.jpeg";
// import ad_1 from "../../../images/ads/ad-5.jpg";
// import ad_2 from "../../../images/ads/ad-2.jpeg";
// import ad_3 from "../../../images/ads/ad-3.jpeg";
// import ad_4 from "../../../images/ads/ad-4.jpeg";
// import ad_5 from "../../../images/ads/ad-5.jpeg";
// import ad_6 from "../../../images/ads/ad-6.jpeg";
// import ad_7 from "../../../images/ads/ad-7.jpeg";
// import ad_8 from "../../../images/ads/ad-8.jpeg";

function AdPanels({ type }) {
  return (
    <>
      <Center marginBottom={"80px"}>
        <Link href="https://www.audible.com/">
          <Image src={ad_1} w={"880px"} backgroundSize={"cover"} />
        </Link>
      </Center>
    </>
  );
}

export default AdPanels;
