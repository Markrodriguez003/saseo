import { Box, Image, Heading, Link } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../images/book-2247427_640.png";

export function SHeader() {
  return (
    <Box
      display="flex"
      w="100%"
      flexDirection={"row"}
      alignItems="center"
      justifyContent="start"
      backgroundColor={"mediumseagreen"}
      borderBottom={"4px"}
      borderBottomColor="darkcyan"
      paddingBottom={2}
      marginBottom={6}
      boxShadow="xl"
      gap={"16px"}
    >
      <Image
        boxSize="120px"
        objectFit="cover"
        src={Logo}
        alt="Saseo - Book Logo"
        padding={1.5}
        fallbackSrc="https://via.placeholder.com/150" // FIX
      />

      <Heading color={"white"} textShadow="2px 2px darkgreen" size={"2xl"}>
        SASEO
      </Heading>
    
        <Link color={"white"}  href="https://chakra-ui.com" isExternal>
          Random
        </Link>
        <Link color={"white"}  href="https://chakra-ui.com" isExternal>
          Book Suggestion
        </Link>
 
    </Box>
  );
}

export default SHeader;
