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

function CountSlider() {
  const [value, setValue] = useState(0);
  const handleChange = (value) => setValue(value);

  return (
    <Flex>
      <NumberInput maxW="100px" mr="2rem" value={value} onChange={handleChange}>
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
        
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={value} />
      </Slider>
    </Flex>
  );
}
// const [sliderValue, setSliderValue] = useState(25)

// const labelStyles = {
//   mt: '2',
//   ml: '-2.5',
//   fontSize: 'sm',
// }

// return (
//   <Box pt={6} pb={2}>
//     <Slider aria-label='slider-ex-6' defaultValue={25} min={1} max={25  } onChange={(val) => setSliderValue(val)}>
//       <SliderMark value={5} {...labelStyles}>
//         5
//       </SliderMark>
//       <SliderMark value={10} {...labelStyles}>
//         10
//       </SliderMark>
//       <SliderMark value={25} {...labelStyles}>
//         25
//       </SliderMark>
//       <SliderMark
//         value={sliderValue}
//         textAlign='center'
//         bg='blue.500'
//         color='white'
//         mt='10'
//         ml='5'
//         w='12'
//       >
//         {sliderValue} Books
//       </SliderMark>
//       <SliderTrack>
//         <SliderFilledTrack />
//       </SliderTrack>
//       <SliderThumb />
//     </Slider>
//   </Box>
// )
//

export default CountSlider;
