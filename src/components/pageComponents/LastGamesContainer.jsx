import { Stat, StatLabel, Card, VStack } from "@chakra-ui/react";
import HomeGameCard from "../cards/HomeGameCard";

const LastGamesContainer = () => {
  return (
    <Card bgColor="#151e34ff" h="300px" w="30%">
      <Stat color="white" padding="3">
        <StatLabel fontSize="xl">Last 5 games</StatLabel>
      </Stat>
      <VStack w="100%" padding={5} overflow="scroll">
        <HomeGameCard />
        <HomeGameCard />
        <HomeGameCard />
        <HomeGameCard />
        <HomeGameCard />
      </VStack>
    </Card>
  );
};

export default LastGamesContainer;
