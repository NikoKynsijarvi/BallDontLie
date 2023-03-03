import { Center, Text, Image } from "@chakra-ui/react";

const AddNewButton = ({ onOpen }) => {
  return (
    <Center
      onClick={onOpen}
      bgColor="white"
      h="150px"
      borderRadius="md"
      w="30%"
    >
      <Image
        filter="brightness(50%)"
        _hover={{ filter: "brightness(100%)" }}
        borderRadius="md"
        h="full"
        w="full"
        objectFit="cover"
        src={require("./../../material/basketball.jpg")}
      />
      <Text position="absolute" fontSize="2xl" color="white">
        Add shootaround
      </Text>
    </Center>
  );
};

export default AddNewButton;
