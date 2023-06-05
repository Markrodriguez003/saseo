import {
  Box,
  Flex,
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
import { useState } from "react";

// --------------------------------------------------------------------- //
// Count dial + slider pair for # of book suggestions
// --------------------------------------------------------------------- //
function CountSlider({ BookAmount }) {
  const [value, setValue] = useState(1);
  // const [amount, setAmount] = useState(value);
  const handleChange = (value) => {
    setValue(value);
    BookAmount(value);
  };

  return (
    <Flex>
      <NumberInput
        maxW="100px"
        mr="2rem"
        value={value}
        onChange={handleChange}
        defaultValue={1}
        min={1}
        max={15}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
        defaultValue={1}
        min={1}
        max={15}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={value} />
      </Slider>
      {console.log("This is the value: --> " + value)}
    </Flex>
  );
}

export default CountSlider;
