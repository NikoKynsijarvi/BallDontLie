import { Box, Card, Center, Text, Image } from "@chakra-ui/react";

const AddNewButton = () => {
  return (
    <Center bgColor="white" h="150px" borderRadius="md" w="30%">
      <Image
        borderRadius="md"
        h="full"
        w="full"
        objectFit="cover"
        src={require("./../../material/basketball.jpg")}
      />
      <Text position="absolute" fontSize="2xl" color="white">
        Add new
      </Text>
    </Center>
  );
};

export default AddNewButton;
