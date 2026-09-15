import React from "react";
import { IoMdAdd } from "react-icons/io";
import { GoGoal } from "react-icons/go";

const AddGoals = () => {
  return (
    <div className="h-full flex flex-row justify-between items-center px-6 gap-4">
      <div className="flex flex-col gap-8">
        {/* Radial Progress */}
        <div class="relative size-50">
          <svg
            class="size-full -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              class="stroke-current text-base-300"
              stroke-width="2"
            ></circle>
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              class="stroke-current text-[#222222] dark:text-[#ffffff]"
              stroke-width="2"
              stroke-dasharray="100"
              stroke-dashoffset="75"
              stroke-linecap="round"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-[#222222] dark:text-white">
              2/10
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold flex items-center text-black dark:text-white">
            <GoGoal />
            Goal
          </h1>
          <p className="text-sm text-black dark:text-white">
            You've completed 20% of today's goal. Keep going — you're on track!
            🚀
          </p>
        </div>
        <button className="flex gap-2 text-sm font-medium bg-blue-400 hover:bg-[#222222] text-white px-4 py-2 rounded-md cursor-pointer">
          <IoMdAdd size={20} />
          Add goal
        </button>
      </div>
    </div>
  );
};

export default AddGoals;
