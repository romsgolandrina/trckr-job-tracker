import React from "react";
import { Link } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuListTodo,
  LuPencilRuler,
  LuMoon,
  LuSun,
} from "react-icons/lu";
import { UseUser } from "../../context/UserContext";

const SideBar = ({ theme, setTheme }) => {
  const navLinks = [
    {
      label: "Dashboard",
      path: "/dashboard",
      logo: LuLayoutDashboard,
    },
    {
      label: "Job Tracker",
      path: "/jobTracker",
      logo: LuListTodo,
    },
    {
      label: "Resume Builder",
      path: "/builder",
      logo: LuPencilRuler,
    },
  ];

  const { userData } = UseUser();

  return (
    <div className="w-full h-full border-r-2 flex flex-col border-base-300 bg-base-100">
      {/* Logo */}
      <div className="flex flex-row items-center justify-center border-b-2 border-base-300 py-8">
        <h1 className="text-4xl font-bold font-ubuntu tracking-wide text-black dark:text-white">
          trckr.
        </h1>
      </div>

      {/* Naviation Links */}
      <div className="flex-1 px-3 pt-8">
        <ul className="flex flex-col gap-1">
          {navLinks.map(({ label, path, logo: Icons }) => (
            <li key={path}>
              <Link
                to={path}
                className="text-sm font-medium py-2 px-4 rounded-lg hover:bg-base-300 text-black dark:text-white flex items-center gap-3"
              >
                {Icons && <Icons size={20} />}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Profile & Dark Mode Switch */}
      <div className="flex items-center justify-between border-t-2 border-base-300 py-8 px-6">
        <div className="flex flex-col">
          <h1 className="text-sm font-medium w-36 truncate text-black dark:text-white">
            {userData.firstName}&nbsp;{userData.lastName}
          </h1>
          <p className="text-sm text-black dark:text-white">
            {userData.desiredPosition}
          </p>
        </div>
        <label className="swap swap-rotate rounded-lg p-2 border border-base-300 hover:bg-base-300 text-black dark:text-white">
          <input
            type="checkbox"
            onChange={(e) => setTheme(e.target.checked ? "dracula" : "pastel")}
            checked={theme === "dracula"}
          />
          <LuSun size={20} className="swap-on" />
          <LuMoon size={20} className="swap-off" />
        </label>
      </div>
    </div>
  );
};

export default SideBar;
