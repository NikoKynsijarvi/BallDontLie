import {
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import SmallRoundedContainer from "./SmallRoundedContainer";

const HomeInfoStats = () => {
  return (
    <HStack gap={10}>
      <SmallRoundedContainer>
        <Stat color="white" padding="3">
          <HStack>
            <StatLabel>Free throw %</StatLabel>
          </HStack>
          <StatNumber>80 %</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            1%
          </StatHelpText>
        </Stat>
      </SmallRoundedContainer>
      <SmallRoundedContainer>
        <Stat color="white" padding="3">
          <StatLabel>Three point fg %</StatLabel>
          <StatNumber>40 %</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            -1,6%
          </StatHelpText>
        </Stat>
      </SmallRoundedContainer>
      <SmallRoundedContainer>
        <Stat color="white" padding="3">
          <StatLabel>Field goal %</StatLabel>
          <StatNumber>48 %</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            -0,7%
          </StatHelpText>
        </Stat>
      </SmallRoundedContainer>
    </HStack>
  );
};

export default HomeInfoStats;
