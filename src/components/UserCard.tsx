import {
  Box,
  Flex,
  HStack,
  Text,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { apiUrl, Service } from "@hex-labs/core";
import axios from "axios";
import React from "react";

type Props = {
  user: any;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: any;
};


// TODO: right now, the UserCard only displays the user's name and email. Create a new modal component <UserModal> that
// pops up when the card is clicked. In this modal, list all the user's information including name, email, phoneNumber,
// and userId. 

// TODO: Explore if you can display the email as a link to the user's email that will open up the user's 
// email client and start a new email to that user. Also explore if you can provide a link to the user's resume.

// TODO: In our database structure, every user has a userId that is unique to them. This is the primary key of the user
// and is referenced in their applications to all of our hexathons. Create a button that when clicked, will retrieve all of
// the hexathons that the user has applied to. You can use the /applications endpoint of the registration service to do this
// and the /hexathons endpoint of the hexathons service to get a list of all the hexathons.

const UserModal: React.FC<ModalProps> = ({ isOpen, onClose, user }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>User Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text><strong>Name:</strong> {`${user.name.first} ${user.name.last}`}</Text>
          <Text><strong>Email:</strong> {user.email}</Text>
          <Text><strong>Phone Number:</strong> {user.phoneNumber || "Not provided"}</Text>
          <Text><strong>User ID:</strong> {user.userId}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const getUsers = async (user: any) => {
// complete
}

const UserCard: React.FC<Props> = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
    <Box
    borderWidth="1px"
    rounded="lg"
    boxShadow="lg"
    height="175px"
    fontWeight="bold"
    alignItems="center"
    onClick={onOpen}
    >
      <Flex padding="2" flexDirection="column">
        <HStack align="flex-end" justify="space-between">
          <Text fontSize='xl'>{`${props.user.name.first} ${props.user.name.last}`}</Text>
        </HStack>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          justifyContent="justify"
          mt="2"
        >
          {props.user.email}
        </Text>
      </Flex>
    </Box>

    <UserModal isOpen={isOpen} onClose={onClose} user={props.user} />
    </>
  );
};

export default UserCard;