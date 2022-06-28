import React from 'react'
import { Flex, useDisclosure } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Text
} from '@chakra-ui/react'


const ProfileModal = ({ user, children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {children ? (
                <span onClick={onOpen}>{children}</span>
            ) : (
                <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
            )}

            <Modal size='md' isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='red.300' h='410px'>
                    <ModalHeader
                        fontSize="40px"
                        fontFamily="Work sans"
                        justifyContent="center"
                        style={{ display: 'flex' }}
                    >{user.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        flexDir="column"
                        alignItems="center"
                        justifyContent="space-between"
                        style={{ display: 'flex' }}>
                        <Image borderRadius="full"
                            boxSize="150px"
                            src={user.pic}
                            alt={user.name}>

                        </Image>
                        <Text
                            fontSize={{ base: "28px", md: "30px" }}
                            fontFamily="Work sans"
                        >
                            Email: {user.email}
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileModal