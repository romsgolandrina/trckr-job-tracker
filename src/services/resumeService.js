const STORAGE_KEY = "buildResume";

export const resumeService = {
  getResume: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading resume data:", error);
      return [];
    }
  },

  saveResume: (resume) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
    } catch (error) {
      console.error("Error saving resume", error);
    }
  },

  removeResume: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error removing resume:", error);
    }
  },
};
