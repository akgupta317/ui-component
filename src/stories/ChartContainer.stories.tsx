import type { Meta, StoryObj } from "@storybook/react";
import { ChartContainer } from "../lib/components/ChartContainer";
import {
  AreaChart,
  LineChart,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Line,
  Bar,
} from "recharts";

// Sample data for charts
const data = [
  { name: "Jan", value: 400, pv: 2400, amt: 2400 },
  { name: "Feb", value: 300, pv: 1398, amt: 2210 },
  { name: "Mar", value: 200, pv: 9800, amt: 2290 },
  { name: "Apr", value: 278, pv: 3908, amt: 2000 },
  { name: "May", value: 189, pv: 4800, amt: 2181 },
  { name: "Jun", value: 239, pv: 3800, amt: 2500 },
  { name: "Jul", value: 349, pv: 4300, amt: 2100 },
];

const meta: Meta<typeof ChartContainer> = {
  title: "Components/ChartContainer",
  component: ChartContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    infoDescription: { control: "text" },
    infoCalculation: { control: "text" },
    onTitleClick: { action: "title clicked" },
    chartHeight: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

export const DefaultAreaChart: Story = {
  args: {
    title: "Area Chart Example",
    infoDescription: "This is an example of an area chart showing random data.",
    infoCalculation: "value = random data points collected over time",
    chartHeight: "250px",
    children: (
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
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
        <Legend />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorValue)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    ),
  },
};

export const LineChartExample: Story = {
  args: {
    title: "Line Chart Example",
    infoDescription: "This is an example of a line chart showing trend data.",
    infoCalculation:
      "Trend = data points connected by lines to show progression",
    chartHeight: "250px",
    children: (
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    ),
  },
};

export const BarChartExample: Story = {
  args: {
    title: "Bar Chart Example",
    infoDescription: "This is an example of a bar chart for comparing values.",
    infoCalculation: "Each bar represents a discrete value for comparison",
    chartHeight: "250px",
    children: (
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    ),
  },
};

export const NoInfoSection: Story = {
  args: {
    title: "Chart Without Info",
    chartHeight: "250px",
    children: (
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    ),
  },
};

export const CustomHeight: Story = {
  args: {
    title: "Custom Height Chart",
    infoDescription: "This chart has a custom height setting.",
    chartHeight: "400px",
    children: (
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    ),
  },
};
