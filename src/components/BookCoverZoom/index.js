import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";

import { useState } from "react";

function BookCoverZoom(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  // WORKS STOCK MODAL WITH BUTTON
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={props.cover} boxSize="350px" objectFit="cover"></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BookCoverZoom;
