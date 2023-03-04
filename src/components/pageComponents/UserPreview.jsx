import { Container, VStack, Center, Avatar, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const UserPreview = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container h="200" padding="5">
      <VStack>
        <Center>
          <Avatar bgColor="#7f03fc" size={["xl", "2xl"]} name={user.username} />
        </Center>
        <Center>
          <Text>{user.username}</Text>
        </Center>
      </VStack>
    </Container>
  );
};

export default UserPreview;
