import React from "react";
import {
  Card,
  Stat,
  StatLabel,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeHomeaverageChart } from "./../../reducers/settings";
import AveragePercentageChart from "../AveragePercentageChart";
import { useEffect } from "react";

const HomePercentageChart = () => {
  const [value, setValue] = React.useState("ft");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHomeaverageChart(value));
  }, [value]);

  return (
    <Card bgColor="#151e34ff" h="300px" w="70%">
      <Stat color="white" padding="3">
        <StatLabel fontSize="xl">Last 5 %</StatLabel>
        <RadioGroup onChange={setValue} value={value} defaultValue="ft">
          <Stack spacing={4} direction="row">
            <Radio value="ft">Free throws</Radio>
            <Radio value="3p">Three point</Radio>
          </Stack>
        </RadioGroup>
      </Stat>
      <AveragePercentageChart />
    </Card>
  );
};

export default HomePercentageChart;
