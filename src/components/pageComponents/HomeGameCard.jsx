import {
  Card,
  Stat,
  StatNumber,
  StatHelpText,
  HStack,
  StatLabel,
} from "@chakra-ui/react";

const HomeGameCard = () => {
  return (
    <Card
      w="full"
      bgGradient="linear(to-tr, #080c24ff, #151e34ff)"
      color="white"
    >
      <Stat>
        <StatLabel fontSize="lg">25-03-2023</StatLabel>
        <HStack>
          <StatNumber>6</StatNumber>
          <StatHelpText>pts</StatHelpText>
          <StatNumber>4</StatNumber>
          <StatHelpText>reb</StatHelpText>
          <StatNumber>9</StatNumber>
          <StatHelpText>ast</StatHelpText>
        </HStack>
      </Stat>
    </Card>
  );
};

export default HomeGameCard;
