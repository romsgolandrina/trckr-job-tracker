import React from "react";
import InputField from "../../../../components/ui/InputField";
import SelectField from "../../../../components/ui/SelectField";

const AddApplicationModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

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
            type="text"
            placeholder="e.g, Google"
            required
          />
          <InputField
            label="Position Title"
            type="text"
            placeholder="e.g, Data Analyst"
            required
          />
          <InputField label="Date Applied" type="date" required />
          <SelectField
            label="Status"
            name="status"
            // value={formData.status}
            // onChange={handleChange}
            options={["Applied", "Interview", "Offer", "Rejected"]}

            // error={errors.status}
          />
          <InputField
            label="Salary"
            type="text"
            placeholder="e.g, $200,000 - $300,00"
          />
          <InputField
            label="Location"
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
            // onClick={handleSaveApplication}
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
