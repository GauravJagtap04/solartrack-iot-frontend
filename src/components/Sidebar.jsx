"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Home,
  LayoutDashboard,
  Settings,
  SunMedium,
  Terminal,
  User,
  Users,
  X,
  Menu,
  Zap,
  Battery,
  Forward,
  Download,
  Bell,
  ChartArea,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = ({ userData }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigation = [
    { name: "Dashboard", href: "#", icon: LayoutDashboard },
    { name: "Energy Reports", href: "#energy-reports", icon: Zap },
    { name: "Battery Status", href: "#battery-status", icon: Battery },
    {
      name: "Grid Export & Revenue",
      href: "#grid-export-revenue",
      icon: Forward,
    },
    {
      name: "Energy Consumption & Export Trends",
      href: "#energy-consumption-export-trends",
      icon: ChartArea,
    },
    {
      name: "Alerts & Notifications",
      href: "#alerts-and-notifications",
      icon: Bell,
    },
    { name: "Export Data", href: "#export-data", icon: Download },
  ];

  // Desktop sidebar
  const desktopSidebar = (
    <>
      <div className="hidden md:flex h-screen w-56 flex-col border-r fixed">
        <div className="p-4 pt-8">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span>SolarTrack IoT</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "transparent"
                )}
              >
                <item.icon className="h-4 w-4" />
                <h2 className="font-normal text-sm opacity-90">{item.name}</h2>
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t p-4">
          <div className="flex items-center gap-3 rounded-md bg-accent/50 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <User className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">
                {userData?.user_metadata?.displayName || "User"}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {userData?.email || "No email"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-56 h-screen hidden md:flex"></div>
    </>
  );

  // Mobile hamburger button
  const mobileHamburgerButton = (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 px-4 flex items-center justify-between z-30 bg-background border-b">
        <div className="font-semibold text-lg">SolarTrack IoT</div>
        <TooltipProvider />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <div
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-accent transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? "top-3 rotate-45 w-6" : "top-2 w-6"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? "top-3 -rotate-45 w-6" : "top-4 w-6"
                    }`}
                  />
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>Menu</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="md:hidden h-14 flex w-screen"></div>
    </>
  );

  // Mobile menu content
  const mobileMenu = (
    <>
      <div
        className={`md:hidden fixed inset-0 z-20 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } bg-background pt-14`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "transparent"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t p-4">
            <div className="flex items-center gap-3 rounded-md bg-accent/50 px-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <User className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">
                  {userData?.user_metadata?.displayName || "User"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {userData?.email || "No email"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Overlay to prevent content access when mobile menu is open
  const overlay = isMobileMenuOpen && (
    <div
      className="md:hidden fixed inset-0 z-10 bg-black/50"
      onClick={() => setIsMobileMenuOpen(false)}
    />
  );

  return (
    <>
      {desktopSidebar}
      {mobileHamburgerButton}
      {mobileMenu}
      {overlay}
    </>
  );
};

export default Sidebar;
