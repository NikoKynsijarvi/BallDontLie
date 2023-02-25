import React from "react";
import Sidebar from "../components/Sidebar";
import HomeInfoStats from "../components/pageComponents/HomeInfoStats";
import LastGameInfo from "../components/pageComponents/LastGameInfo";
import HomePercentageChart from "../components/pageComponents/HomePercentageChart";

import { HStack, Center, Card, VStack } from "@chakra-ui/react";
import LastGamesContainer from "../components/pageComponents/LastGamesContainer";

function HomePage() {
  return (
    <div className="h-screen w-screen  bg-background flex flex-row">
      <Sidebar />
      <div className="h-full w-full flex ">
        <Center w="full">
          <VStack w="full">
            <HomeInfoStats />
            <HStack padding={5} w="full">
              <HomePercentageChart />
              <LastGamesContainer />
            </HStack>
            <HStack padding={5} w="full" h="100%">
              <Card color="white" bgColor="#151e34ff" h="full" w="70%"></Card>
              <LastGameInfo />
            </HStack>
          </VStack>
        </Center>
      </div>
    </div>
  );
}

export default HomePage;
