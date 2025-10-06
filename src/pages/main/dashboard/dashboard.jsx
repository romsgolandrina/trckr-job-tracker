import React from "react";
import AddGoals from "./AddGoals";
import TotalApplied from "./TotalApplied";
import YearReports from "./YearReports";
import Notes from "./Notes";

const dashboard = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full pb-4">
      <div className="col-span-2 row-span-2 border-2 border-base-300 shadow-md rounded-md">
        <AddGoals />
      </div>
      <div className="col-span-3 row-span-2 col-start-3 border-2 border-base-300 shadow-md rounded-md">
        <TotalApplied />
      </div>
      <div className="col-span-3 row-span-3 row-start-3 border-2 border-base-300 shadow-md rounded-md">
        <YearReports />
      </div>
      <div className="col-span-2 row-span-3 col-start-4 row-start-3 border-2 border-base-300 shadow-md rounded-md">
        <Notes />
      </div>
    </div>
  );
};

export default dashboard;
