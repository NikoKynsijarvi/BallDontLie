import {
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import SmallRoundedContainer from "./SmallRoundedContainer";

const getPercentage = (array) => {
  var attempted = 0;
  var made = 0;

  array.forEach((element) => {
    attempted += element.shotsattempted;
    made += element.shotsmade;
  });

  return (made / attempted).toFixed(2) * 100;
};

const compareToLastMonth = (array, month, thisYear) => {
  var attemptedThisMonth = 0;
  var madeThisMonth = 0;

  var attemptedLastMonth = 0;
  var madeLastMonth = 0;

  var thisMonth = month;
  var lastMonth = month === 1 ? 12 : month - 1;

  array.forEach((element) => {
    var arr = element.date.split("-");
    var month = arr[1];
    var year = arr[0];
    if (parseInt(thisYear) !== parseInt(year) && thisMonth > 1) return;
    if (parseInt(month) === parseInt(thisMonth)) {
      madeThisMonth += element.shotsmade;
      attemptedThisMonth += element.shotsattempted;
    }
    if (parseInt(month) === parseInt(lastMonth)) {
      madeLastMonth += element.shotsmade;
      attemptedLastMonth += element.shotsattempted;
    }
  });

  const lastMonthPercentage =
    (madeLastMonth / attemptedLastMonth).toFixed(2) * 100;
  const thisMonthPercentage =
    (madeThisMonth / attemptedThisMonth).toFixed(2) * 100;

  if (madeLastMonth + attemptedLastMonth === 0) return 0;
  if (madeThisMonth + attemptedLastMonth === 0) return 0;
  return (thisMonthPercentage - lastMonthPercentage).toFixed(2);
};

const HomeInfoStats = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const shotgroups = useSelector((state) => state.shotgroup);
  const freethrows = shotgroups.filter((s) => s.type === "ft");
  const threes = shotgroups.filter((s) => s.type === "3p");

  const ftTrend = useMemo(
    () => compareToLastMonth(freethrows, month, year),
    [freethrows, month, year]
  );
  const threesTrend = useMemo(
    () => compareToLastMonth(threes, month, year),
    [threes, month, year]
  );

  return (
    <HStack gap={10}>
      <SmallRoundedContainer>
        <Stat color="white" padding="3">
          <HStack>
            <StatLabel>Free throw %</StatLabel>
          </HStack>
          <StatNumber>{getPercentage(freethrows)} %</StatNumber>
          <StatHelpText>
            <StatArrow type={ftTrend > 0 ? "increase" : "decrease"} />
            {ftTrend}%
          </StatHelpText>
        </Stat>
      </SmallRoundedContainer>
      <SmallRoundedContainer>
        <Stat color="white" padding="3">
          <StatLabel>Three point fg %</StatLabel>
          <StatNumber>{getPercentage(threes)}%</StatNumber>
          <StatHelpText>
            <StatArrow type={threesTrend > 0 ? "increase" : "decrease"} />
            {threesTrend}%
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
