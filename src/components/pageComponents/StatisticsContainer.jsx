import {
  Card,
  HStack,
  Stat,
  StatLabel,
  Center,
  VStack,
} from "@chakra-ui/react";

import ShotsPerMonthBarChart from "../charts/ShotsPerMonthBarChart";
import StatisticsTotal from "./StatisticsTotal";
import ShotDistributionPieChart from "../charts/ShotDistributionPieChart";

const StatisticsContainer = () => {
  return (
    <HStack w="full" margin={10} gap={10}>
      <Card w="50%" bgColor="#151e34ff" h="100%" padding={5}>
        <Stat>
          <StatLabel fontSize="lg" color="white">
            Shots per month
          </StatLabel>
        </Stat>
        <VStack gap={5} w="full" h="100%">
          <Center w="full" h="70%">
            <ShotsPerMonthBarChart />
          </Center>
          <HStack w="full">
            <StatisticsTotal text={"Shots total"} value={"12 567"} />

            <StatisticsTotal text={"Three pointers"} value={"6 557"} />

            <StatisticsTotal text={"Free throws"} value={"6 010"} />
          </HStack>
          <HStack w="full">
            <StatisticsTotal text={"Total fg %"} value={"49%"} />

            <StatisticsTotal text={"3p fg %"} value={"34%"} />

            <StatisticsTotal text={"Ft %"} value={"81%"} />
          </HStack>
          <VStack w="full" h="full" color="white">
            <Stat w="full">
              <StatLabel fontSize="lg">Shot distribution</StatLabel>
            </Stat>
            <ShotDistributionPieChart />
          </VStack>
        </VStack>
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
