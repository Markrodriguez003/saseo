import {
  Image,
  Box,
  Flex,
  Button,
  Input,
  FormLabel,
  VStack,
  InputGroup,
  InputRightAddon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Switch,
  Divider,
  Modal,
  ModalCloseButton,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

// COMPONENTS
import HeadingPanel from "../../ui/HeadingPanel";

// ICONS

// IMAGES
import avatarImage from "../../../images/avatars/avatar-1.png";

function AccountInformation() {
  // Modal Control
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSignIn() {
    console.log("You clicked on avatar image change! ");
    onOpen();
  }
  return (
    <>
      {/* AVATAR IMAGE OPTIONS MODAL */}
      {/* LOGIN MODAL  */}
      <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(10deg)"
        />

        <ModalContent>
          <Divider />
          <ModalCloseButton color={"white"} fontSize={"15px"} />

          <ModalFooter>
            <Button
              backgroundColor={"primary"}
              color={"white"}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <VStack
        justifyContent={"flex-start"}
        justifyItems={"flex-start"}
        alignContent={"flex-start"}
        textAlign={"left"}
        marginBottom={"150px"}
      >
        <HeadingPanel>Account Information</HeadingPanel>
        <Accordion defaultIndex={[0]} allowMultiple w={"65%"} color={"white"}>
          {/* //*********************************************************************  */}
          {/* //? GENERAL ACCOUNT INFORMATION */}
          {/* //*********************************************************************  */}
          <AccordionItem color={"white"}>
            <h2>
              <AccordionButton
                backgroundColor={"primary"}
                _hover={{
                  background: "rgba(0,139,139,0.88)",
                }}
              >
                <Box as="span" flex="1" textAlign="left" fontSize={"xl"}>
                  General Account Information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              p={8}
              backgroundColor={"rgba(0,139,139,0.2)"}
              color={"black"}
            >
              <VStack gap={"6px"}>
                {/* Profile nickname */}
                <FormLabel htmlFor="profile_nickname" marginRight={"auto"}>
                  {" "}
                  Profile nickname:
                </FormLabel>
                <InputGroup>
                  <Input
                    id={"profile_nickname"}
                    color={"black"}
                    backgroundColor={"white"}
                    focusBorderColor="accent-1"
                    placeholder="CookBookReader22"
                    disabled
                  />
                  <InputRightAddon backgroundColor={"primary"} color={"white"}>
                    <Button
                      backgroundColor={"transparent"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      Change
                    </Button>
                  </InputRightAddon>
                </InputGroup>

                {/* Email */}
                <FormLabel
                  htmlFor="profile_email"
                  textAlign={"left"}
                  marginRight={"auto"}
                >
                  {" "}
                  Profile Email:
                </FormLabel>
                <InputGroup>
                  <Input
                    id={"profile_email"}
                    color={"black"}
                    backgroundColor={"white"}
                    focusBorderColor="accent-1"
                    placeholder="CookBookReader22@gmail.com"
                    disabled
                  />
                  <InputRightAddon backgroundColor={"primary"} color={"white"}>
                    <Button
                      backgroundColor={"transparent"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      Change
                    </Button>
                  </InputRightAddon>
                </InputGroup>
                {/* Favorite author */}
                <FormLabel
                  htmlFor="profile_password"
                  textAlign={"left"}
                  marginRight={"auto"}
                >
                  {" "}
                  Profile Account Password:
                </FormLabel>
                <InputGroup>
                  <Input
                    id={"profile_password"}
                    color={"black"}
                    backgroundColor={"white"}
                    focusBorderColor="accent-1"
                    placeholder="*******"
                    disabled
                  />
                  <InputRightAddon backgroundColor={"primary"} color={"white"}>
                    <Button
                      backgroundColor={"transparent"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      Change
                    </Button>
                  </InputRightAddon>
                </InputGroup>
                {/* Newsletter */}
                <FormLabel
                  htmlFor="profile_password"
                  textAlign={"left"}
                  marginRight={"auto"}
                >
                  {" "}
                  Enable newsletter signup:
                </FormLabel>
                <Switch colorScheme="teal" />
              </VStack>
            </AccordionPanel>
          </AccordionItem>
          {/* //*********************************************************************  */}
          {/* //? PROFILE SETTINGS */}
          {/* //*********************************************************************  */}
          <AccordionItem color={"white"}>
            <h2>
              <AccordionButton
                backgroundColor={"primary"}
                _hover={{
                  background: "rgba(0,139,139,0.88)",
                }}
              >
                <Box as="span" flex="1" textAlign="left" fontSize={"xl"}>
                  Profile Settings
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              p={8}
              backgroundColor={"rgba(0,139,139,0.2)"}
              color={"black"}
            >
              <VStack gap={"6px"}>
                {/* Profile Avatar */}
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <FormLabel htmlFor="profile_avatar" marginRight={"auto"}>
                    {" "}
                    Profile Avatar:
                  </FormLabel>
                  <InputGroup>
                    <Box onClick={handleSignIn}>
                      <Image
                        src={avatarImage}
                        w={"135px"}
                        _hover={{ cursor: "pointer" }}
                      />
                    </Box>
                  </InputGroup>
                </Flex>

                {/* Favorite author */}
                <FormLabel
                  htmlFor="profile_favorite_author"
                  textAlign={"left"}
                  marginRight={"auto"}
                >
                  {" "}
                  Favorite Author:
                </FormLabel>
                <InputGroup>
                  <Input
                    id={"profile_favorite_author"}
                    color={"black"}
                    backgroundColor={"white"}
                    focusBorderColor="accent-1"
                    placeholder="Stephen King"
                    disabled
                  />
                  <InputRightAddon backgroundColor={"primary"} color={"white"}>
                    <Button
                      backgroundColor={"transparent"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      Change
                    </Button>
                  </InputRightAddon>
                </InputGroup>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </>
  );
}

export default AccountInformation;
