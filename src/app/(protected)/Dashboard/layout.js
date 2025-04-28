import "../../globals.css";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { getUserData } from "@/lib/user-utils";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard for SolarTrack-IoT",
};

export default async function DashboardLayout({ children }) {
  const userData = await getUserData();

  return (
    <div className="flex text-primary overflow-x-hidden flex-col md:flex-row">
      <Sidebar userData={userData} />
      <div>
        <Header userData={userData} />
        <div className="overflow-x-hidden md:w-[calc(100vw-240px)] w-screen z-1">
          {children}
        </div>
      </div>
    </div>
  );
}
