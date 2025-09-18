import React, { useState } from "react";
import InputField from "../../../../components/ui/InputField";
import SelectField from "../../../../components/ui/SelectField";
import { UseJobs } from "../../../../context/JobsContext";
import Swal from "sweetalert2";

const AddApplicationModal = ({ isVisible, onClose }) => {
  const { addApplication } = UseJobs();

  const INITIAL_FORM_STATE = {
    company: "",
    jobPosition: "",
    dateApplied: "",
    status: "",
    salary: "",
    location: "",
  };

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [error, setError] = useState("");

  if (!isVisible) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSaveApplication = () => {
    if (!formData.company || !formData.jobPosition || !formData.dateApplied) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      addApplication(formData);

      Swal.fire({
        title: "Successfully Added!",
        text: `${formData.jobPosition} at ${formData.company} has been added to your applications.`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      setFormData(INITIAL_FORM_STATE);
      setError("");
      onClose();
    } catch (error) {
      console.error("Error adding application:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to save application. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-[2px] flex justify-center items-center z-[9999] px-4">
      <div className="w-full max-w-lg max-h-[90vh] bg-white dark:bg-base-100 rounded-xl flex flex-col px-6 py-7 text-[#222222] shadow-md overflow-y-auto">
        {/* Title */}
        <div>
          <h1 className="font-bold text-2xl text-black dark:text-white">
            Add New Application
          </h1>
        </div>

        {/* Input Fields */}
        <div className="w-full flex flex-col gap-4 mt-4">
          <InputField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            type="text"
            placeholder="e.g, Google"
            required
            error={error}
          />
          <InputField
            label="Position Title"
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
            type="text"
            placeholder="e.g, Data Analyst"
            required
            error={error}
          />
          <InputField
            label="Date Applied"
            name="dateApplied"
            value={formData.dateApplied}
            onChange={handleChange}
            type="date"
            required
            error={error}
          />
          <SelectField
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={["Applied", "Interview", "Offer", "Rejected"]}
          />
          <InputField
            label="Salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            type="text"
            placeholder="e.g, $200,000 - $300,000"
          />
          <InputField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            type="text"
            placeholder="e.g, New York City"
          />
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-row items-center justify-end gap-2 mt-6">
          <button
            onClick={() => onClose()}
            className="btn border-0 font-medium text-sm mt-[48px] bg-red-500 text-white hover:bg-black cursor-pointer rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveApplication}
            className="btn border-0 font-medium text-sm mt-[48px] bg-blue-500 text-white hover:bg-black cursor-pointer rounded-md"
          >
            Save Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddApplicationModal;
