import React from "react";
import InputField from "../../../components/ui/InputField";
import { LuMail, LuPhone, LuMonitor } from "react-icons/lu";

const PersonalInfoForm = () => {
  return (
    <div className="h-full flex flex-col py-4 px-6 justify-center">
      <h1 className="text-lg font-semibold border-b-2 border-base-300 pb-4">
        Personal Information
      </h1>
      <form>
        <div className="flex flex-col gap-4 py-4">
          {" "}
          {/* Full Names */}
          <div className="flex justify-between gap-4">
            <InputField label="First Name" placeholder="First name" />
            <InputField label="Last Name" placeholder="Last name" />
          </div>
          {/* Job Title */}
          <InputField
            label="Professional Title"
            placeholder="e,g. Network Engineer"
          />
          {/* Address */}
          <InputField label="Address" placeholder="e,g. Manila, Philippines" />
          {/* Email Address */}
          <InputField
            label="Email"
            name="email"
            placeholder="Enter your email"
            iconLeft={LuMail}
          />
          {/* Contact Number */}
          <InputField
            label="Phone Number"
            name="phone_number"
            placeholder="123456"
            iconLeft={LuPhone}
          />
          {/* Portfolio/Website */}
          <InputField
            label="Portfolio / Website"
            name="Portfolio"
            placeholder="Personal Portfolio, Github, LinkedIn"
            iconLeft={LuMonitor}
          />
        </div>
        <div className="flex items-center justify-between mt-4 border-t-2 pt-4 gap-4">
          <button className="w-full bg-[#222222] px-6 py-2 rounded-md text-white text-sm font-medium">
            Prev
          </button>
          <button className="w-full bg-blue-500 px-6 py-2 rounded-md text-white text-sm font-medium">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
