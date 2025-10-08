import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import ResumePreview from "./ResumePreview";

const ResumeBuilder = () => {
  return (
    <div className="h-full grid grid-cols-[450px_1fr] gap-4">
      {/* Personal Information Form */}
      <div className="border-2 border-base-300 shadow-md rounded-md">
        <PersonalInfoForm />
      </div>
      {/* Resume Preview */}
      <div className="border-2 border-base-300 shadow-md rounded-md">
        <ResumePreview />
      </div>
    </div>
  );
};

export default ResumeBuilder;
