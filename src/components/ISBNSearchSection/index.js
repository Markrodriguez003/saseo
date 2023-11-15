// CHAKRA UI COMPONENTS
import {
  HStack,
  Button,
  Flex,
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
} from "@chakra-ui/react";

// LIBRARY
import ISBNSearchForm from "../ISBNSearchForm";
// COMPONENTS
import { Field, Form, Formik } from "formik";
import TextPanel from "components/ui/TextPanel";
import HeadingPanel from "components/ui/HeadingPanel";

// CSS

// IMAGES

export function ISBNSearchSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Link
                href="  https://en.wikipedia.org/wiki/List_of_ISBN_registration_groups"
                target="_blank"
                rel="help"
              >
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
        <HeadingPanel>ISBN Search</HeadingPanel>
        <ISBNSearchForm />
      </Flex>
    </>
  );
}

export default ISBNSearchSection;
