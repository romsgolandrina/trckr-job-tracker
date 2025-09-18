import React, { createContext, useState, useContext, useEffect } from "react";
import { jobsService } from "../services/jobsService";

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobTrack, setJobTrack] = useState(jobsService.getJobs());

  useEffect(() => {
    jobsService.saveJobs(jobTrack);
  }, [jobTrack]);

  // Add new application
  const addApplication = (application) => {
    const newJob = jobsService.createJob(application);
    setJobTrack((prev) => [...prev, newJob]);
  };

  // Update existing application
  const updateApplication = (index, updatedApp) => {
    setJobTrack((prev) =>
      prev.map((app, i) => (i === index ? { ...app, ...updatedApp } : app))
    );
  };

  // Delete application
  const deleteApplication = (index) => {
    setJobTrack((prev) => prev.filter((_, i) => i !== index));
  };

  // Clear all applications
  const clearAllApplications = () => {
    setJobTrack([]);
  };

  return (
    <JobsContext.Provider
      value={{
        jobTrack,
        addApplication,
        updateApplication,
        deleteApplication,
        clearAllApplications,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

// Custom hook
export const UseJobs = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("UseJobs must be used inside a JobProvider");
  }
  return context;
};
