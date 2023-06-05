// --------------------------------------------------------------------- //
// NOTES
// --------------------------------------------------------------------- //

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43

// --------------------------------------------------------------------- //
// TEST DATA
// --------------------------------------------------------------------- //
import book_subjects from "../../data/book_subjects.json";

// --------------------------------------------------------------------- //
// EXTERNAL COMPONENTS
// --------------------------------------------------------------------- //
import {
  Box,
  Flex,
  Heading,
  Button,
  Select,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaSearch, FaBook } from "react-icons/fa";

import { useState } from "react";

import CountSlider from "../CountSlider";
import "./BookSuggestionForm.design.css";

// ? Has to be async? & Move to separate file?
// --------------------------------------------------------------------- //
// Book subject select component
// --------------------------------------------------------------------- //
function BookSubjectsOptions(options) {
  // --------------------------------------------------------------------- //
  // Sorts the JSON data of book subjects (will be used with API call)
  // --------------------------------------------------------------------- //

  const sorted_subjects = book_subjects.b_subjects.sort((a, b) =>
    Object.keys(a) > Object.keys(b)
      ? 1
      : Object.keys(a) < Object.keys(b)
      ? -1
      : 0
  );

  // --------------------------------------------------------------------- //
  // Inserts sorted book subjects into individual select option components
  // --------------------------------------------------------------------- //

  const subjects = sorted_subjects.map((book) => {
    return (
      <option
        key={Object.keys(book)}
        className="select_placeholder"
        value={Object.values(book)}
        style={{ color: "black", backgroundColor: "white", color: "black" }}
      >
        {Object.keys(book)}{" "}
      </option>
    );
  });

  // --------------------------------------------------------------------- //
  // Inserts array of option components into select component
  // --------------------------------------------------------------------- //
  return subjects;
}

// --------------------------------------------------------------------- //
// Book suggestion form
// --------------------------------------------------------------------- //

export function BookSuggestionForm() {
  const [searchParameters, setSearchParameters] = useState({
    subject: "",
    amount: 1,
  });

  const BookAmount = (BookAmount) => {
    setSearchParameters((prev) => ({
      ...prev,
      amount: BookAmount,
    }));
  };

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      alignItems="center"
      justifyContent="center"
      marginTop={0}
      marginBottom={8}
      backgroundColor={"mintcream"}
      // backgroundColor={"#A2E4B8"}
    >
      <VStack gap={"25px"}>
        <HStack>
          <FaBook size={"45px"} color="darkcyan" />

          <Heading
            as="h1"
            size={"2xl"}
            color={"darkcyan"}
            textShadow="1px 1px darkgreen"
          >
            Find me a book!
          </Heading>
        </HStack>
        <Select
          variant={"outline"}
          // backgroundColor={"darkcyan"}
          backgroundColor={"white"}
          // color={"white"}
          color={"black"}
          border={"3px solid darkcyan"}
          placeholder="Choose a book genre"
          onChange={(e) => {
            setSearchParameters((prev) => ({
              ...prev,
              subject: e.target.value,
            }));
          }}
        >
          <BookSubjectsOptions />
        </Select>
        <Flex
          w="100%"
          flex
          flexDirection={"column"}
          textAlign={"center"}
          gap={"12px"}
        >
          <Heading as="h3" size="xs" color={"grey"}>
            How many book suggestions?
          </Heading>
          <CountSlider BookAmount={BookAmount} />
        </Flex>
        <Button
          leftIcon={<FaSearch />}
          colorScheme="teal"
          size="lg"
          onClick={() => {
            console.log(
              "User's search parameters: " + JSON.stringify(searchParameters)
            );
          }}
        >
          Search!
        </Button>
      </VStack>
    </Box>
  );
}

export default BookSuggestionForm;

/*

// --------------------------------------------------------------------- //
// TEST DATA
// --------------------------------------------------------------------- //
import book_subjects from "../../data/book_subjects.json";

// --------------------------------------------------------------------- //
// EXTERNAL COMPONENTS
// --------------------------------------------------------------------- //
import {
  Box,
  Flex,
  Heading,
  Button,
  Select,
  VStack,
  HStack,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SliderMark,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from "@chakra-ui/react";
import { FaSearch, FaBook } from "react-icons/fa";

import { useState } from "react";

// import CountSlider from "../CountSlider";
import "./BookSuggestionForm.design.css"
// --------------------------------------------------------------------- //
// NOTES
// --------------------------------------------------------------------- //
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// ? Has to be async? & Move to separate file?
// --------------------------------------------------------------------- //
// Book subject select component
// --------------------------------------------------------------------- //
function BookSubjectsOptions(options) {
  // --------------------------------------------------------------------- //
  // Sorts the JSON data of book subjects (will be used with API call)
  // --------------------------------------------------------------------- //

  const sorted_subjects = book_subjects.b_subjects.sort((a, b) =>
    Object.keys(a) > Object.keys(b)
      ? 1
      : Object.keys(a) < Object.keys(b)
        ? -1
        : 0
  );

  // --------------------------------------------------------------------- //
  // Inserts sorted book subjects into individual select option components
  // --------------------------------------------------------------------- //

  const subjects = sorted_subjects.map((book) => {
    return (
      <option key={Object.keys(book)} className="select_placeholder" value={Object.values(book)} style={{ color: 'black', backgroundColor: "darkCyan", fontSize: "20px", color: "white" }}>
        {Object.keys(book)}{" "}
      </option>
    );
  });

  // --------------------------------------------------------------------- //
  // Inserts array of option components into select component
  // --------------------------------------------------------------------- //
  return (
    // <Select
    //   variant={"outline"}
    //   placeholder="Choose a book genre"
    //   on={(e) => console.log("Book selection -> " + e.target.value)}
    // >
    subjects
    // </Select>
  );
}



// --------------------------------------------------------------------- //
// Book suggestion counter 
// --------------------------------------------------------------------- //

function CountSlider() {
  const [value, setValue] = useState(1);
  // const [amount, setAmount] = useState(value);
  const handleChange = (value) => setValue(value);

  return (
    <Flex>
      <NumberInput
        maxW="100px"
        mr="2rem"
        value={value}
        onChange={handleChange}
        defaultValue={1}
        min={1}
        max={10}
        backgroundColor={"darkcyan"}
        color={"white"}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper color={"white"} />
          <NumberDecrementStepper color={"white"} />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
        defaultValue={1}
        min={1}
        max={10}

      >
        <SliderTrack>
          <SliderFilledTrack backgroundColor={"darkcyan"}
          />
        </SliderTrack>
        <SliderThumb backgroundColor={"darkcyan"}
          color={"white"} fontSize="sm" boxSize="32px" children={value} />
      </Slider>
      {console.log("This is the value: --> " + value)}
    </Flex>
  );
}

// --------------------------------------------------------------------- //
// Book suggestion form
// --------------------------------------------------------------------- //

export function BookSuggestionForm() {
  const [searchParameters, setSearchParameters] = useState({
    subject: "",
    amount: 1,
  });

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      alignItems="center"
      justifyContent="center"
      marginTop={0}
      marginBottom={8}
      // w={"100%"}

      backgroundColor={"mintcream"}
    // backgroundColor={"#A2E4B8"}
    >
      <VStack gap={"25px"}>
        <HStack>
          <FaBook size={"45px"} color="darkcyan" />

          <Heading
            as="h1"
            size={"2xl"}
            color={"darkcyan"}
            textShadow="1px 1px darkgreen"
            onClick={() => {
              console.log("Book subject changed!");
            }}
          >
            Find me a book!
          </Heading>
        </HStack>
        <Select
          variant={"outline"}
          backgroundColor={"darkcyan"}
          color={"white"}
          fontSize={"20px"}
          placeholder="Choose a book genre"
          onChange={(e) => {
            setSearchParameters((prev) => ({
              ...prev,
              subject: e.target.value,
            }));
          }}
        >
          <BookSubjectsOptions />
        </Select>
        <Flex
          w="100%"
          flex
          flexDirection={"column"}
          textAlign={"center"}
          gap={"12px"}
        >
          <Heading as="h3" size="xs" color={"grey"}>
            How many book suggestions?
          </Heading>
          <CountSlider />
        </Flex>
        <Button
          leftIcon={<FaSearch />}
          colorScheme="teal"
          size="lg"
        // onClick={() => {
        //   console.log(
        //     "User's search parameters: " + JSON.stringify(searchParameters)
        //   );
        // }}
        >
          Search!
        </Button>
      </VStack>
    </Box>
  );
}

export default BookSuggestionForm;


*/
