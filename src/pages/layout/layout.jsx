import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideBar from "./sideBar";

const Layout = ({ theme, setTheme }) => {
  return (
    <div className="max-w-screen min-h-screen">
      <div className="grid grid-cols-[250px_1fr] h-screen">
        {/* Side Bar */}
        <SideBar theme={theme} setTheme={setTheme} />
        {/* Pages */}
        <div className="bg-base-200 h-full">
          <outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
