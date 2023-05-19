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
function CountSlider() {
  const [value, setValue] = useState(1);
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
        max={10}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={value} />
      </Slider>
    </Flex>
  );
}


export default CountSlider;
