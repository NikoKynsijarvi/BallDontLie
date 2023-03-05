import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
const data01 = [
  { name: "Free throws", value: 400 },
  { name: "Three pointers", value: 300 },
];

const COLORS = ["#7f03fc", "#F27649", "#FFBB28", "#FF8042"];

const ShotDistributionPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          fill="#82ca9d"
        >
          {data01.map((d, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ShotDistributionPieChart;
