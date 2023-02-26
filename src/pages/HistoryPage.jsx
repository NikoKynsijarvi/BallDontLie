import Sidebar from "../components/Sidebar";
import HistoryList from "../components/pageComponents/HistoryList";
import HistoryFilters from "../components/pageComponents/HistoryFilters";
import { VStack } from "@chakra-ui/react";

const HistoryPage = () => {
  return (
    <div className="h-screen w-screen  bg-background flex flex-row">
      <Sidebar />
      <VStack w="100%">
        <HistoryFilters />
        <HistoryList />
      </VStack>
    </div>
  );
};

export default HistoryPage;
