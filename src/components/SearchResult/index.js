import { Box, Image, Heading, Link, Avatar, AvatarGroup } from "@chakra-ui/react";
 

export function SearchResult() {
  return (
    <Box
      display="flex"
      
      flexDirection={"row"}
      alignItems="center"
      justifyContent="end"
      paddingBottom={2}
      paddingTop={14}
      marginBottom={6}
      paddingRight={20}
    
    >
   

    <Heading color={"lightgrey"} as={"h5"} size={"md"}>3 : Book Results Found!</Heading>
    </Box>
  );
}

export default SearchResult;
