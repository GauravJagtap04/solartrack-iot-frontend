"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeatureCards from "@/components/feature-cards";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen gap-12 overflow-x-hidden relative"
      style={{
        backgroundImage:
          "linear-gradient(-125deg, var(--background) 20%, #334155 100%)",
      }}
    >
      <div className="flex flex-col gap-3 items-center justify-center h-full overflow-x-hidden">
        <div
          className={`${outfit.className} text-5xl md:text-7xl font-bold tracking-tight text-primary`}
        >
          SolarTrack IoT
        </div>
        <div className="text-lg md:text-xl font-semibold text-primary/50 tracking-widest">
          Intelligent Energy Management
        </div>
      </div>
      <Button asChild>
        <Link href="auth/login">Login To Dashboard</Link>
      </Button>
      <FeatureCards />
    </div>
  );
}
