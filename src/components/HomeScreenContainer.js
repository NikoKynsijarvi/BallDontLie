import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const data = [
  {
    name: "10.12",
    ftpg: 65,
  },
  {
    name: "12.12",
    ftpg: 70,
  },
  {
    name: "15.12",
    ftpg: 68,
  },
  {
    name: "19.12",
    ftpg: 90,
  },
];

const FtPercentage = () => {
  const percentage = 72;
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      className="h-2/3 bg-white"
    />
  );
};

const FtAverageChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="ftpg"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

function HomeScreenContainer() {
  return (
    <div className="w-full h-full flex p-3 flex-col gap-5">
      <div className="w-full h-1/2 flex flex-row gap-5 ">
        <div className="w-2/3 h-full bg-darkprimary justify-center content-center rounded-md">
          <FtAverageChart />
        </div>
        <div className="w-1/3 h-full bg-darkprimary flex justify-center items-center rounded-md">
          <FtPercentage />
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-row gap-5 ">
        <div className="w-1/4 h-full bg-darkprimary justify-center content-center rounded-md"></div>
        <div className="w-full h-full bg-darkprimary justify-center content-center rounded-md"></div>
      </div>
    </div>
  );
}

export default HomeScreenContainer;
