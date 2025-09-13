import React from "react";
import AddFilterSearch from "./addFilterSearch";

const jobTracker = () => {
  const ApplicationSent = [
    { Label: "Total Applied", Value: "3" },
    { Label: "Interview", Value: "4" },
    { Label: "Offers", Value: "5" },
  ];

  return (
    <div className="w-full h-full">
      <div className="grid grid-rows-3 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border border-base-300 shadow-md rounded-lg h-28 px-8">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            📋 Job Applications Tracker
          </h1>
          <div className="flex flex-row gap-2">
            {ApplicationSent.map(({ Label, Value }) => (
              <div className="flex flex-col items-center justify-center rounded-md py-3 px-8 bg-neutral-100 dark:bg-base-300 text-black dark:text-white gap-1">
                <h1 className="text-2xl font-bold">{Value}</h1>
                <p className="text-sm">{Label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-12">
          <AddFilterSearch />
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default jobTracker;
