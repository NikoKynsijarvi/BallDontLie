import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const StatisticsTotal = ({ text, value }) => {
  return (
    <Stat w="full" color="white">
      <StatLabel fontSize="lg" color="white">
        {text}
      </StatLabel>
      <StatNumber>{value}</StatNumber>
    </Stat>
  );
};

export default StatisticsTotal;
