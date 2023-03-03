import React from "react";
import Sidebar from "../components/Sidebar";
import HomeInfoStats from "../components/pageComponents/HomeInfoStats";
import LastGameInfo from "../components/pageComponents/LastGameInfo";
import HomePercentageChart from "../components/pageComponents/HomePercentageChart";
import AddNewButton from "../components/pageComponents/AddNewButton";
import AddShootaroundForm from "../components/forms/AddShootaroundForm";

import {
  HStack,
  Center,
  VStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import LastGamesContainer from "../components/pageComponents/LastGamesContainer";

function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <AddShootaroundForm
              onClose={onClose}
              onOpen={onOpen}
              isOpen={isOpen}
            />
            <HStack padding={5} w="full" h="100%">
              <HStack w="70%" gap={5}>
                <AddNewButton onOpen={onOpen} />
                <Center bgColor="white" h="150px" borderRadius="md" w="30%">
                  <Image
                    filter="brightness(50%)"
                    _hover={{ filter: "brightness(100%)" }}
                    borderRadius="md"
                    h="full"
                    w="full"
                    objectFit="cover"
                    src={require("./../material/hoop.jpg")}
                  />
                  <Text position="absolute" fontSize="2xl" color="white">
                    Add Game
                  </Text>
                </Center>
                <Center bgColor="white" h="150px" borderRadius="md" w="30%">
                  <Image
                    filter="brightness(50%)"
                    _hover={{
                      filter: "brightness(100%)",
                    }}
                    borderRadius="md"
                    h="full"
                    w="full"
                    objectFit="cover"
                    src={require("./../material/night-hoop.jpg")}
                  />
                  <Text position="absolute" fontSize="2xl" color="white">
                    1vs1
                  </Text>
                </Center>
              </HStack>

              <LastGameInfo />
            </HStack>
          </VStack>
        </Center>
      </div>
    </div>
  );
}

export default HomePage;
