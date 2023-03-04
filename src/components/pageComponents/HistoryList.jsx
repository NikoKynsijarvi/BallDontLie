import { VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import HistoryCard from "../cards/HistoryCard";

const HistoryList = () => {
  const shotgroups = useSelector((state) => state.shotgroup);
  const settings = useSelector((state) => state.settings);

  const sorted = shotgroups.sort(function (a, b) {
    if (settings.sortShotsByLatest) {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  function sortByTypes(shotgroup) {
    return shotgroup.filter((s) => {
      if (settings.sortThrees && s.type === "3p") {
        return s;
      }
      if (settings.sortFreeThrows && s.type === "ft") {
        return s;
      }
    });
  }

  const sortedByType = sortByTypes(sorted);

  return (
    <VStack w="100%" padding={10} paddingTop={0} overflow="scroll">
      {sortedByType.map((s, index) => {
        return <HistoryCard shotgroup={s} key={index} />;
      })}
    </VStack>
  );
};

export default HistoryList;
