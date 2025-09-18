import React, { useMemo } from "react";
import AddFilterSearch from "./addFilterSearch";
import JobsTable from "./jobsTable";
import { UseJobs } from "../../../context/JobsContext";

const JobTracker = () => {
  const { jobTrack } = UseJobs();

  const ApplicationSent = useMemo(() => {
    if (!jobTrack || jobTrack.length === 0) {
      return [
        { Label: "Total Applied", Value: "0" },
        { Label: "Interview", Value: "0" },
        { Label: "Offers", Value: "0" },
      ];
    }

    const totalApplied = jobTrack.length;
    const interviewCount = jobTrack.filter(
      (job) => job.status?.toLowerCase() === "interview"
    ).length;
    const offerCount = jobTrack.filter(
      (job) => job.status?.toLowerCase() === "offer"
    ).length;

    return [
      { Label: "Total Applied", Value: totalApplied.toString() },
      { Label: "Interview", Value: interviewCount.toString() },
      { Label: "Offers", Value: offerCount.toString() },
    ];
  }, [jobTrack]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border border-base-300 shadow-md rounded-lg h-28 px-8">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            📋 Job Applications Tracker
          </h1>
          <div className="flex flex-row gap-2">
            {ApplicationSent.map(({ Label, Value }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-md py-3 px-8 bg-neutral-100 dark:bg-base-300 text-black dark:text-white gap-1"
              >
                <h1 className="text-2xl font-bold">{Value}</h1>
                <p className="text-sm">{Label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-8 flex items-center">
          <AddFilterSearch />
        </div>
        <div className="flex-1">
          <JobsTable />
        </div>
      </div>
    </div>
  );
};

export default JobTracker;
