import React from "react";

const JobsTable = () => {
  return (
    <div className="w-full flex items-center">
      <div className="w-full overflow-x-auto border-1 border-base-300 rounded-lg shadow-md">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-neutral-600 dark:text-white border-b-1 border-base-300 bg-base-300">
              <th>Company & Position</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Salary</th>
              <th>Location</th>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-black dark:text-white">
              <td className="flex flex-col">
                Junior Front-end Developer <span>Pacific Asia</span>
              </td>
              <td>Sep 14, 2025</td>
              <td>Applied</td>
              <td>24,000 - 30,000</td>
              <td>Quezon City</td>
              <td className="flex gap-2">
                <button
                  className="p-2 rounded bg-base-300 hover:bg-blue-500 transition-colors cursor-pointer"
                  title="Edit application"
                >
                  ✏️
                </button>
                <button
                  className="p-2 rounded bg-base-300 hover:bg-red-500 transition-colors cursor-pointer"
                  title="Delete application"
                >
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsTable;
