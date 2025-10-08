import React from "react";
import { FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
import { BiSolidPieChartAlt2 } from "react-icons/bi";

const TotalApplied = () => {
  const totalAppli = [
    { label: "Today", value: "05", Icon: FaRegCalendar },
    { label: "This Week", value: "25", Icon: FaRegCalendarCheck },
    { label: "This Month", value: "109", Icon: BsBarChartFill },
    { label: "Total", value: "129", Icon: BiSolidPieChartAlt2 },
  ];

  return (
    <div className="h-full flex flex-col py-4 px-6  gap-4">
      <h1 className="text-lg font-semibold text-black dark:text-white w-full">
        Jobs Applied
      </h1>
      <div className="flex-1 flex gap-6 items-center justify-center">
        {totalAppli.map((t) => (
          <div
            key={t.value}
            className="flex flex-col gap-2 items-center justify-center border-1 border-base-300 w-32 h-38 rounded-md shadow-md"
          >
            <t.Icon size={20} className="text-black dark:text-white" />
            <h1 className="text-xl text-black dark:text-white">{t.value}</h1>
            <p className="text-xs text-black dark:text-white">{t.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalApplied;
