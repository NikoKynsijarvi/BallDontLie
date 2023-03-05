import React, { useEffect, useState } from "react";
import {
  Card,
  HStack,
  Stat,
  StatLabel,
  Center,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import ShotsPerMonthBarChart from "../charts/ShotsPerMonthBarChart";
import StatisticsTotal from "./StatisticsTotal";
import ShotDistributionPieChart from "../charts/ShotDistributionPieChart";
import ShotgroupService from "./../../services/shotgroup";

const StatisticsContainer = () => {
  const user = useSelector((state) => state.user);
  const shotgroup = useSelector((state) => state.shotgroup);

  const [userStats, setUserStats] = useState({
    total: 0,
    total_fg: 0,
    total_ft_percentage: 0,
    total_fts: 0,
    total_three_fg: 0,
    total_threes: 0,
  });
  console.log(userStats);
  useEffect(() => {
    ShotgroupService.getStatistics(user.user_id).then((res) => {
      setUserStats(res);
    });
  }, [shotgroup]);

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
            <StatisticsTotal text={"Shots total"} value={userStats.total} />

            <StatisticsTotal
              text={"Three pointers"}
              value={userStats.total_threes}
            />

            <StatisticsTotal text={"Free throws"} value={userStats.total_fts} />
          </HStack>
          <HStack w="full">
            <StatisticsTotal
              text={"Total fg %"}
              value={`${userStats.total_fg}%`}
            />

            <StatisticsTotal
              text={"3p fg %"}
              value={`${userStats.total_three_fg}%`}
            />

            <StatisticsTotal
              text={"Ft %"}
              value={`${userStats.total_ft_percentage}%`}
            />
          </HStack>
          <VStack w="full" h="full" color="white">
            <Stat w="full">
              <StatLabel fontSize="lg">Shot distribution</StatLabel>
            </Stat>
            <ShotDistributionPieChart
              threes={userStats.total_threes}
              fts={userStats.total_fts}
            />
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
