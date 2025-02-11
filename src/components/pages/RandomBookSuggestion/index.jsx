import { Box } from "@chakra-ui/react";

import RandomBookSearch from "../../RandomBookSearch/index"

function RandomBookSuggestion() {
  return (
    <>
      <Box marginTop={"100px"} marginBottom={"200px"}>
        <RandomBookSearch />
      </Box>
    </>
  );
}

export default RandomBookSuggestion;
