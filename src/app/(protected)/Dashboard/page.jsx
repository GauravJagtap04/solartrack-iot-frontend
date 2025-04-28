import EnergyGraph from "@/components/energy-trend-graph";
import ReadingCard from "@/components/reading-card";
import { ArrowRightFromLine, Battery, Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-72px)] w-screen md:w-[calc(100vw-240px)] overflow-x-hidden px-4 md:px-5 py-4 md:py-4 items-center sm:items-start">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 flex-col" id="solar-energy-summary">
            <h1 className="text-[1.4rem] font-semibold opacity-90">
              Solar Energy Summary
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 place-items-center sm:place-items-stretch">
              <ReadingCard
                title="Energy generated today"
                data="1.52"
                def="0.00"
                unit="kWh"
                icon={<Zap className="w-3.5 h-3.5" />}
              />
              <ReadingCard
                title="Total energy generated this month"
                data="2.95"
                def="0.00"
                unit="kWh"
                icon={<Zap className="w-3.5 h-3.5" />}
              />
              <ReadingCard
                title="Efficiency level"
                data="75.8"
                def="0.00"
                unit="%"
                icon={<Zap className="w-3.5 h-3.5" />}
              />
            </div>
          </div>
          <div className="flex gap-2 flex-col" id="battery-status">
            <h1 className="text-[1.4rem] font-semibold opacity-90">
              Battery Status Overview
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 place-items-center sm:place-items-stretch">
              <ReadingCard
                title="Current charge level"
                data="85"
                def="0.00"
                unit="%"
                icon={<Battery className="w-3.5 h-3.5" />}
              />
              <ReadingCard
                title="Total energy generated this month"
                data="2.95"
                def="0.00"
                unit="kWh"
                icon={<Battery className="w-3.5 h-3.5" />}
              />
              <ReadingCard
                title="Efficiency level"
                data="75.8"
                def="0.00"
                unit="%"
                icon={<Battery className="w-3.5 h-3.5" />}
              />
            </div>
          </div>
          <div className="flex gap-2 flex-col" id="grid-export-revenue">
            <h1 className="text-[1.4rem] font-semibold opacity-90">
              Grid export & revenue
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 place-items-center sm:place-items-stretch">
              <ReadingCard
                title="Energy sold today"
                data="4.99"
                def="0.00"
                unit="kWh"
                icon={<ArrowRightFromLine className="w-3.5 h-3.5" />}
              />
              <ReadingCard
                title="Total energy sold this month"
                data="23.95"
                def="0.00"
                unit="kWh"
                icon={<ArrowRightFromLine className="w-3.5 h-3.5" />}
              />
              <ReadingCard
                title="Revenue generated today"
                data="74"
                def="00"
                prefix="₹"
                icon={<ArrowRightFromLine className="w-3.5 h-3.5" />}
              />
              <ReadingCard
                title="Total revenue earned"
                data="940"
                def="00"
                prefix="₹"
                icon={<ArrowRightFromLine className="w-3.5 h-3.5" />}
              />
            </div>
          </div>
          <div
            className="flex gap-2 flex-col"
            id="energy-consumption-export-trends"
          >
            <h1 className="text-[1.4rem] font-semibold opacity-90">
              Energy Consumption & Export Trends
            </h1>
            <div className="flex place-items-center sm:place-items-stretch">
              <EnergyGraph />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
