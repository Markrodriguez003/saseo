
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
    Image
} from "@chakra-ui/react";

import { useState } from "react";

function BookCoverZoom(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const OverlayOne = () => (
        <ModalOverlay
            // bg='blackAlpha.300'
            // backdropFilter='blur(10px) hue-rotate(90deg)'
                  bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
        />
    )
    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {OverlayOne}
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={props.cover}/>
                    </ModalBody>
                    <ModalFooter flex={true} flexDirection={"column"}>
                        <Text>{props.name}</Text>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BookCoverZoom;