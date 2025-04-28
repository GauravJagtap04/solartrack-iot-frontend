import React from "react";
import { LogoutButton } from "./logout-button";
import ThemeToggle from "./toggle-theme";

const Header = ({ userData }) => {
  return (
    <>
      <header className="hidden border-b h-18 px-4 md:flex items-center justify-between top-0 right-0 w-[calc(100%-224px)] fixed bg-background/50 backdrop-blur-md z-50">
        <div>
          <h1 className="text-xl font-semibold">{`Welcome Back, ${
            userData?.user_metadata?.displayName || "User"
          }`}</h1>
          <h6 className="opacity-55 text-sm font-thin">
            Track solar energy and battery performance in real time.
          </h6>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LogoutButton />
        </div>
      </header>
      <div className="w-[calc(100vw-240px)] h-18 hidden md:flex"></div>
    </>
  );
};

export default Header;
