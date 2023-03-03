import { Box, HStack, Tag } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortDirection, changeSortThrees } from "../../reducers/settings";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";

const HistoryFilters = () => {
  const settings = useSelector((state) => state.settings);
  const [sortBadge, setSortBadge] = useState({
    threePoints: true,
    freeThrows: true,
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeSortDirection());
  };

  const addThreePointers = () => {
    dispatch(changeSortThrees());
    setSortBadge({ ...sortBadge, threePoints: !sortBadge.threePoints });
  };

  const addFreeThrows = () => {
    setSortBadge({ ...sortBadge, freeThrows: !sortBadge.freeThrows });
  };

  return (
    <HStack paddingLeft={10} paddingTop={10} w="full">
      <Box
        bgColor="#151e34ff"
        borderRadius="md"
        color="white"
        onClick={handleClick}
      >
        {settings.sortShotsByLatest ? (
          <FaSortAmountDownAlt size="30px" />
        ) : (
          <FaSortAmountUpAlt size="30px" />
        )}
      </Box>
      <Tag
        onClick={addThreePointers}
        bgColor={sortBadge.threePoints ? "green.300" : null}
      >
        Three point
      </Tag>
      <Tag
        onClick={addFreeThrows}
        bgColor={sortBadge.freeThrows ? "green.300" : null}
      >
        Free throws
      </Tag>
    </HStack>
  );
};

export default HistoryFilters;
