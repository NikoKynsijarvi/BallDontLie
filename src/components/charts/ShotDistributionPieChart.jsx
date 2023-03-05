import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#7f03fc", "#F27649"];

const ShotDistributionPieChart = ({ threes, fts }) => {
  const data = [
    { name: "Free throws", value: fts },
    { name: "Threes", value: threes },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          fill="#82ca9d"
        >
          {data.map((d, index) => (
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
