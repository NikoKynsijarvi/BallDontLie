import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    ft: 400,
    threes: 240,
    amt: 240,
  },
  {
    name: "2",
    ft: 300,
    threes: 139,
    amt: 221,
  },
  {
    name: "3",
    ft: 200,
    threes: 980,
    amt: 229,
  },
  {
    name: "4",
    ft: 278,
    threes: 390,
    amt: 200,
  },
  {
    name: "5",
    ft: 189,
    threes: 480,
    amt: 218,
  },
  {
    name: "6",
    ft: 239,
    threes: 380,
    amt: 250,
  },
  {
    name: "7",
    ft: 349,
    threes: 430,
    amt: 210,
  },
  {
    name: "8",
    ft: 278,
    threes: 390,
    amt: 200,
  },
  {
    name: "9",
    ft: 189,
    threes: 480,
    amt: 218,
  },
  {
    name: "10",
    ft: 239,
    threes: 380,
    amt: 250,
  },
  {
    name: "11",
    ft: 278,
    threes: 390,
    amt: 200,
  },
  {
    name: "12",
    ft: 189,
    threes: 480,
    amt: 218,
  },
];

const ShotsPerMonthBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ft" stackId="a" fill="#8884d8" />
        <Bar dataKey="threes" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ShotsPerMonthBarChart;
