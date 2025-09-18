const STORAGE_KEY = "jobTrack";

export const jobsService = {
  getJobs: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading job applications:", error);
      return [];
    }
  },

  saveJobs: (jobs) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
    } catch (error) {
      console.error("Error saving job applications data:", error);
    }
  },

  removeJobs: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error removing job application:", error);
    }
  },

  createJob: (jobData = {}) => {
    return {
      company: "",
      jobPosition: "",
      dateApplied: "",
      status: "",
      salary: "",
      location: "",
      ...jobData,
    };
  },
};
