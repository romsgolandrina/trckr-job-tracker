import React from "react";
import { Link } from "react-router-dom";

const sideBar = () => {
  const navLinks = [
    {
      label: "Dashboard",
      path: "/dashboard",
      logo: "",
    },
    {
      label: "Job Tracker",
      path: "/jobTracker",
      logo: "",
    },
    {
      label: "Resume Builder",
      path: "/builder",
      logo: "",
    },
  ];

  return (
    <div className="w-full h-full border-r-1 border-neutral-200">
      <div className="flex flex-col justify-between">
        {/* Logo */}
        <div className="flex flex-row items-center justify-center border-b-1 border-neutral-200 py-8">
          <h1 className="text-4xl font-bold font-ubuntu tracking-wide">
            trckr.
          </h1>
        </div>

        {/* Naviation Links */}
        <div className="flex-1 py-8 px-6">
          <ul className="flex flex-col">
            {navLinks.map(({ label, path, logo: Icon }) => (
              <Link to={path}>
                <li className="text-base font-medium py-2 px-4 rounded-lg hover:bg-base-300 hover:text-white">
                  {label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
