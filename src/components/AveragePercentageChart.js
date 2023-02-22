import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import "./../styles.css";

//First filter based on type and then check the length calculation
const AveragePercentageChart = () => {
  const shotgroup = useSelector((state) => state.shotgroup);
  const settings = useSelector((state) => state.settings);

  const filteredByType = shotgroup.filter(
    (shots) => shots.type === settings.homeScreenAverageChart
  );
  console.log(filteredByType.length);
  var filtered = null;

  if (filteredByType.length > settings.homeScreenDisplayLast) {
    const length = filteredByType.length;
    filtered = filteredByType.slice(
      length - settings.homeScreenDisplayLast,
      length
    );
  } else {
    filtered = filteredByType;
  }
  const data = filtered.map((a) => {
    const attempts = a.shotsattempted;
    const made = a.shotsmade;
    const percentage = (made / attempts).toFixed(2) * 100;
    return {
      ft_percentage: percentage.toFixed(2),
      ...a,
    };
  });

  console.log(shotgroup.length);

  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="ft_percentage"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AveragePercentageChart;
