import { Box, Image, Text, VStack, Center } from "@chakra-ui/react";

// EXTERNAL COMPONENTS
import confusedAvatar from "../../../images/confusedAvatar.png";

/*// ************************************************************************************************* */
/* INFOGRAPHIC SECTION  */
/*// ************************************************************************************************* */
export function ErrorPage() {
  return (
    <Box marginBottom={"150px"}>
      <br />
      <br />
      <Center>
        <VStack p={"15px"}>
          <Image
            src={confusedAvatar}
            w={"220px"}
            h={"auto"}
            borderRadius={"full"}
            marginTop={"45px"}
          />
          <Box textAlign={"center"}>
            <Text fontSize={"4xl"} color={"teal.100`"}>
              Page Not Found!
            </Text>
            <Text fontSize={"xl"} color={"teal.100`"}>
              Sorry!
            </Text>
            <Text fontSize={"xl"} color={"teal.100`"}>
              Something went wrong!
            </Text>
            <Text fontSize={"xl"} color={"teal.100`"}>
              The page you are looking for is not found!
            </Text>
          </Box>
        </VStack>
      </Center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
}

export default ErrorPage;
