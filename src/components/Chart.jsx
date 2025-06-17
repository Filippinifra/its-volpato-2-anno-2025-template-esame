import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const rainbowColors = [
  "#FF0000", // red
  "#FF7F00", // orange
  "#FFFF00", // yellow
  "#00FF00", // green
  "#0000FF", // blue
  "#4B0082", // indigo
  "#8B00FF", // violet
];

const data = [
  {
    name: "Gen",
    u1: 3,
    u2: 0,
    u3: 8,
    u4: 1,
  },
  {
    name: "Feb",
    u1: 3,
    u2: 0,
    u3: 1,
    u4: 2,
  },
  {
    name: "Mar",
    u1: 0,
    u2: 0,
    u3: 0,
    u4: 3,
  },
  {
    name: "Apr",
    u1: 2,
    u2: 8,
    u3: 6,
    u4: 1,
  },
  {
    name: "Mag",
    u1: 2,
    u2: 1,
    u3: 3,
    u4: 1,
  },
];

export const Chart = () => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
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
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      {Object.keys(data[0])
        .filter((value) => value !== "name")
        .map((key, index) => (
          <Area
            type="monotone"
            dataKey={key}
            stroke={rainbowColors[index]}
            fillOpacity={1}
            fill={rainbowColors[index]}
          />
        ))}
    </AreaChart>
  );
};
