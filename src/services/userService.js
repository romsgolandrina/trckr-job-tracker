const STORAGE_KEY = "userData";

export const userService = {
  getUser: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : { firstName: "", lastName: "", desiredPosition: "" };
    } catch (error) {
      console.error("Error loading user data:", error);
      return { firstName: "", lastName: "", desiredPosition: "" };
    }
  },

  saveUser: (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  },

  clearUser: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing user data:", error);
    }
  },
};
