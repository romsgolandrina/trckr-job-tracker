import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideBar from "./sideBar";

const layout = () => {
  return (
    <div className="max-w-screen min-h-screen">
      <div className="grid grid-cols-[250px_1fr] h-screen">
        {/* Side Bar */}
        <SideBar />
        {/* Pages */}
        <div className="bg-blue-500 h-full">
          <outlet />
        </div>
      </div>
    </div>
  );
};

export default layout;
