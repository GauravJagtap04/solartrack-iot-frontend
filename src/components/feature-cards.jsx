import {
  Zap,
  Sun,
  ChartNoAxesColumnDecreasing,
  CircleAlert,
} from "lucide-react";
import { Card } from "./ui/card";

const features = [
  { title: "Real-Time Monitoring", icon: Zap },
  { title: "Smart Solar Tracking", icon: Sun },
  { title: "Detailed Energy Reports", icon: ChartNoAxesColumnDecreasing },
  { title: "Instant Alerts", icon: CircleAlert },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center flex-wrap">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="relative w-35 h-25 md:w-60 md:h-35 bg-background/15 dark:bg-primary/5 backdrop-blur-md rounded-xl flex items-center justify-center overflow-hidden hover:dark:bg-primary/30 hover:bg-background/70 transition-colors duration-300 ease-in-out group"
        >
          {/* Background Icon */}
          <feature.icon className="absolute opacity-5 w-30 h-30 md:w-35 md:h-35 transition-all duration-300 group-hover:w-50 group-hover:h-50" />

          {/* Title */}
          <h2 className="font-semibold text-center z-40 text-sm md:text-md opacity-80">
            {feature.title}
          </h2>
        </Card>
      ))}
    </div>
  );
}
