import {
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Card,
  Center,
} from "@chakra-ui/react";

const LastGameInfo = () => {
  return (
    <Card bgColor="#151e34ff" h="150px" w="30%">
      <Center h="full">
        <Stat color="white" padding="3">
          <StatLabel fontSize="lg">Last game</StatLabel>
          <HStack>
            <StatNumber>6</StatNumber>
            <StatHelpText>pts</StatHelpText>
            <StatNumber>4</StatNumber>
            <StatHelpText>reb</StatHelpText>
            <StatNumber>9</StatNumber>
            <StatHelpText>ast</StatHelpText>
            <StatNumber>2</StatNumber>
            <StatHelpText>stl</StatHelpText>
            <StatNumber>1</StatNumber>
            <StatHelpText>blk</StatHelpText>
          </HStack>
          <StatHelpText>25-03-2023</StatHelpText>
        </Stat>
      </Center>
    </Card>
  );
};

export default LastGameInfo;
