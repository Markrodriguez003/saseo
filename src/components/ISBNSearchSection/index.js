// CHAKRA UI COMPONENTS
import {
  Box,
  Heading,
  HStack,
  Button,
  Flex,
  Input,
  Link,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  useDisclosure,
  FormLabel,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
// LIBRARY

// COMPONENTS
import { Field, Form, Formik } from "formik";
import TextPanel from "components/ui/TextPanel";
// CSS

// IMAGES

// ICONS
import { FaSearch, FaQuestionCircle } from "react-icons/fa";
export function ISBNSearchSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  function validateISBN(value) {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Email is required";
    }
    return error;
  }

  return (
    <>
      {/* "What is an ISBN?" Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent backgroundColor={"background"}>
          <ModalHeader color={"primary"} textAlign={"center"} fontSize={"2xl"}>
            What is an ISBN?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={"1px"}>
            <TextPanel>
              Well every book is categorized by a serial of numbers that could
              be understood across the globe. This simple code makes it easy to
              find any book anywhere!
            </TextPanel>
            <TextPanel backgroundColor="secondary">
              In 2007, the length of an ISBN changed from 10 to 13 digits, and a
              new 3-digit prefix (978 or 979) was added in front of 10-digit
              ISBNs.[2] The following registration groups are compatible with or
              without a 978- prefix.
            </TextPanel>
            <TextPanel>
              For more information -{" "}
              <Link href="  https://en.wikipedia.org/wiki/List_of_ISBN_registration_groups">
                wikipedia
              </Link>
            </TextPanel>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button
              color={"text"}
              backgroundColor={"primary"}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ISBN FORM */}
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        marginTop={"80px"}
        marginBottom={"380px"}
      >
        <HStack>
          <FaSearch size={"45px"} color="darkcyan" />

          <Heading as="h1" size={"2xl"} color={"darkcyan"}>
            ISBN Book Search
          </Heading>
        </HStack>
        <Formik
          onSubmit={(values, actions) => {
            setTimeout(() => {
              toast({
                title: "Thank you!",
                description: "We've signed you up to our newsletter!",
                status: "success",
                duration: 9000,
                isClosable: true,
              });

              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field isbn="isbn" validate={validateISBN}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.isbn && form.touched.isbn}
                    paddingBottom={"5px"}
                  >
                    <HStack justifyContent={"space-between"}>
                      <FormLabel
                        color={"darkcyan"}
                        textAlign={"center"}
                        paddingTop={"35px"}
                      >
                        Search for 7,8 or 9 digit ISBN
                      </FormLabel>
                      <Tooltip
                        label="Learn more about ISBN"
                        backgroundColor={"primary"}
                        color={"text"}
                        marginTop={"12px"}
                      >
                        <Button paddingTop={"18px"} onClick={onOpen}>
                          <FaQuestionCircle size={"20px"} color="darkcyan" />
                        </Button>
                      </Tooltip>
                    </HStack>

                    <FormErrorMessage paddingBottom={"5px"}>
                      {form.errors.isbn}
                    </FormErrorMessage>

                    <Input
                      {...field}
                      placeholder="Enter ISBN here"
                      backgroundColor={"white"}
                      color={"darkcyan"}
                      w={"455px"}
                    />

                    <Box textAlign={"center"} paddingTop={"20px"}>
                      <Button
                        backgroundColor={"darkcyan"}
                        isLoading={props.isSubmitting}
                        type="submit"
                        color={"white"}
                      >
                        Search
                      </Button>
                    </Box>
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
}

export default ISBNSearchSection;
