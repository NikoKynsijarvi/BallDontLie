import { VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import HistoryCard from "../cards/HistoryCard";

const HistoryList = () => {
  const shotgroups = useSelector((state) => state.shotgroup);
  return (
    <VStack w="100%" padding={10} overflow="scroll">
      {shotgroups.map((s) => {
        return <HistoryCard shotgroup={s} key={s.id} />;
      })}
    </VStack>
  );
};

export default HistoryList;
