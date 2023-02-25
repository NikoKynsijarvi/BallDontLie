import { Card, Stat, StatLabel } from "@chakra-ui/react";
import AveragePercentageChart from "../AveragePercentageChart";

const HomePercentageChart = () => {
  return (
    <Card bgColor="#151e34ff" h="300px" w="70%">
      <Stat color="white" padding="3">
        <StatLabel fontSize="xl">Last 5 %</StatLabel>
      </Stat>
      <AveragePercentageChart />
    </Card>
  );
};

export default HomePercentageChart;
