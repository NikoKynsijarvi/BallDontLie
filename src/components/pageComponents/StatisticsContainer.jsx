import { Card, HStack, Stat, StatLabel } from "@chakra-ui/react";

const StatisticsContainer = () => {
  return (
    <HStack w="full" margin={10} gap={10}>
      <Card w="50%" bgColor="#151e34ff" h="100%" padding={10}>
        <Stat>
          <StatLabel color="white">Shots</StatLabel>
        </Stat>
      </Card>
      <Card w="50%" bgColor="#151e34ff" h="100%" padding={10}>
        <Stat>
          <StatLabel color="white">Games</StatLabel>
        </Stat>
      </Card>
    </HStack>
  );
};

export default StatisticsContainer;
