import React, { useState } from "react";
import InputField from "../../components/ui/InputField";
import JobHunt from "../../assets/JobHunt.svg";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserSetup = () => {
  const { userData, setUserData } = useUser();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const navigate = useNavigate();

  const handleStartTracking = (e) => {
    e.preventDefault();

    const newError = {};

    if (!userData.firstName) newError.firstName = "First name is required";
    if (!userData.lastName) newError.lastName = "Last name is required";

    setError(newError);

    if (Object.keys(newError).length > 0) return;

    navigate("/dashboard");
  };

  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen">
      <div className="grid grid-cols-2 h-screen">
        {/* User Setup  */}
        <div className="flex flex-col justify-between h-full p-6 ">
          {/* logo */}
          <div>
            <h1 className="text-4xl font-bold font-ubuntu tracking-wide text-black dark:text-white">
              trckr.
            </h1>
          </div>

          {/* Setup */}
          <div className="flex flex-col gap-12">
            {/* Get Started */}
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-4xl font-normal text-black dark:text-white">
                Get Started
              </h1>
              <p className="text-lg text-black dark:text-white">
                Just a few details and we’re ready to go.
              </p>
            </div>

            {/* Input Fields */}
            <div className="flex flex-col items-center">
              <form
                onSubmit={handleStartTracking}
                className="space-y-4 w-full max-w-md"
              >
                <InputField
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={userData.firstName}
                  onChange={handleChange}
                  placeholder="e.g, Jhon Rommel"
                  spellCheck="false"
                  required={true}
                  error={error.firstName}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={userData.lastName}
                  onChange={handleChange}
                  placeholder="e.g, Golandrina"
                  spellCheck="false"
                  required={true}
                  error={error.lastName}
                />
                <InputField
                  label="Position Applied For"
                  name="desiredPosition"
                  type="text"
                  value={userData.desiredPosition}
                  onChange={handleChange}
                  placeholder="e.g, Front-end Developer"
                  spellCheck="true"
                  required={false}
                />
                <button
                  type="submit"
                  className="btn w-full border-0 text-sm mt-[48px] bg-black  hover:bg-blue-500 text-white"
                >
                  Start Tracking
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center">
            <h1 className="text-sm text-black dark:text-white">
              © 2025 Jhon Rommel JR Golandrina. All rights reserved.
            </h1>
          </div>
        </div>

        {/* Support Graphic */}
        <div className="h-full flex items-center justify-center">
          <img src={JobHunt} alt="Job Hunt" className="w-[550px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default UserSetup;
