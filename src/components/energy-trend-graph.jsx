"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

// Revised test data with more realistic energy patterns
const chartData = [
  { month: "January", generated: 85, consumed: 110, exported: 15 },
  { month: "February", generated: 95, consumed: 105, exported: 20 },
  { month: "March", generated: 135, consumed: 100, exported: 35 },
  { month: "April", generated: 165, consumed: 95, exported: 70 },
  { month: "May", generated: 195, consumed: 105, exported: 90 },
  { month: "June", generated: 210, consumed: 120, exported: 90 },
  { month: "July", generated: 225, consumed: 135, exported: 95 },
  { month: "August", generated: 205, consumed: 130, exported: 75 },
];

// Updated chart configuration for energy metrics
const chartConfig = {
  generated: {
    label: "Energy Generated",
    color: "var(--chart-1)",
  },
  consumed: {
    label: "Energy Consumed",
    color: "var(--chart-2)",
  },
  exported: {
    label: "Energy Exported",
    color: "var(--chart-3)",
  },
};

export default function EnergyGraph() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Energy Trends</CardTitle>
        <CardDescription>
          Monthly energy generation, consumption, and export (kWh)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              left: 0,
              right: 20,
              bottom: 0,
            }}
            height={300} // Reduced height from default
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
              unit=" kWh"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent verticalAlign="top" />} />
            <defs>
              <linearGradient id="fillGenerated" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillConsumed" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExported" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="generated"
              type="monotone"
              fill="url(#fillGenerated)"
              fillOpacity={0.4}
              stroke="var(--chart-1)"
              strokeWidth={2}
            />
            <Area
              dataKey="consumed"
              type="monotone"
              fill="url(#fillConsumed)"
              fillOpacity={0.4}
              stroke="var(--chart-2)"
              strokeWidth={2}
            />
            <Area
              dataKey="exported"
              type="monotone"
              fill="url(#fillExported)"
              fillOpacity={0.4}
              stroke="var(--chart-3)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
