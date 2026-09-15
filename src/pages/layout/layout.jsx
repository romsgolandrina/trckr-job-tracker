import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sideBar";
import { UseUser } from "../../context/UserContext";
import { useGreeting } from "../../utils/useGreetings";
import { useMotivationalQuotes } from "../../utils/useQoutes";

const Layout = ({ theme, setTheme }) => {
  const { userData } = UseUser();

  const qoute = useMotivationalQuotes();
  const greeting = useGreeting();

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="max-w-screen min-h-screen">
      <div className="grid grid-cols-[250px_1fr] h-screen">
        {/* Side Bar */}
        <SideBar theme={theme} setTheme={setTheme} />
        {/* Pages */}
        <div className="flex flex-col h-full px-16">
          <div className="flex justify-between items-center h-28">
            {/* greetings and motivational qoutes */}
            <div className="w-1/2 h-full flex flex-col justify-center">
              <h1 className="text-3xl text-black dark:text-white font-bold">
                {greeting}, {userData.firstName} 👋
              </h1>
              <p className="text-sm font-medium text-neutral-400 dark:text-white italic">
                "{qoute}"
              </p>
            </div>
            {/* Live date and time */}
            <div className="flex text-sm font-medium px-4 py-2 border border-base-300 shadow-md rounded-sm text-black dark:text-white">
              <div>
                {date
                  .toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                  .replace(/^(\w+)/, "$1,")}
              </div>
              <div className="divider divider-horizontal divider-base-300" />
              <div>
                {date.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto pb-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
