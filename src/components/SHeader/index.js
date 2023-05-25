import { Box, Image, Heading, Link, Avatar, AvatarGroup } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IoLibrarySharp } from "react-icons/io5";
import Logo from "../../images/book-2247427_640.png";
import "./SHeader.design.css"

export function SHeader() {
  return (
    <Box
      display="flex"
      w="100%"
      flexDirection={"row"}
      alignItems="center"
      justifyContent="start"
      // backgroundColor={"mediumseagreen"}
      backgroundColor={"#A2E4B8"}
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
        marginLeft={"15px"}
        fallbackSrc="https://via.placeholder.com/150" // FIX
      />

      <Heading color={"white"} textShadow="2px 2px darkgreen" size={"2xl"}>
        SASEO
      </Heading>

      <Link color={"white"} href="https://chakra-ui.com" isExternal>
        Random
      </Link>
      <Link color={"white"} href="https://chakra-ui.com" isExternal>
        Book Suggestion
      </Link>
      {/* <Link color={"white"} href="https://chakra-ui.com" isExternal marginLeft={"auto"} paddingRight={"50px"}  >
        <AvatarGroup size='lg' max={1}>

          <Avatar backgroundColor={"slategrey"} name='' icon={<IoLibrarySharp size={"1.5em"}/>} size={"2xl"} />
          <Avatar name='' src='' backgroundColor={"grey"}/>
          <Avatar name='' src='' backgroundColor={"grey"} />
          <Avatar name='' src='' backgroundColor={"grey"} />
          <Avatar name='' src='' backgroundColor={"grey"} />
          <Avatar name='' src='' backgroundColor={"grey"} />
          <Avatar name='' src='' backgroundColor={"grey"} />
          <Avatar name='' src='' backgroundColor={"grey"} />
        </AvatarGroup>
      </Link> */}


    </Box>
  );
}

export default SHeader;
