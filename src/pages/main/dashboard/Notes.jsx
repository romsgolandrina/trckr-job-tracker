import React from "react";
import { IoMdAdd, IoIosFunnel } from "react-icons/io";
import { LuChevronUp } from "react-icons/lu";

const Notes = () => {
  const optionButtons = [
    { icon: IoIosFunnel, modal: "" },
    { icon: LuChevronUp, modal: "" },
  ];

  const dataReminders = [
    {
      headline: "Requirements(Full stack dev)",
      desc: "lorem ipsum",
      deadline: "10/07/2025",
    },
    {
      headline: "Update Resume(Back end dev)",
      desc: "lorem ipsum",
      deadline: "10/14/2025",
    },
    {
      headline: "Send portfolio",
      desc: "lorem ipsum",
      deadline: "10/25/2025",
    },
  ];

  return (
    <div className="h-full flex flex-col gap-4 py-4 px-6">
      <div className="flex justify-between">
        <h1 className="w-full flex text-lg font-semibold">Reminders</h1>
        {/* buttons */}
        <div className="flex gap-1">
          {optionButtons.map((t) => (
            <button
              key={t.modal}
              className="border rounded-sm px-3 py-2 hover:bg-[#222222] hover:text-white cursor-pointer"
            >
              <t.icon size={20} />
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {/* Reminders Cards */}
        {dataReminders.map((t) => (
          <div
            className={`rounded-lg pl-1 shadow-sm cursor-pointer transition-shadow hover:shadow-md ${
              t.deadline == "10/07/2025" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            <div
              className={`flex items-center justify-between py-4 px-4  rounded-md ${
                t.deadline == "10/07/2025" ? "bg-red-100" : "bg-green-100"
              }`}
            >
              <h1 className="text-xs font-medium">{t.headline}</h1>
              <h1 className="text-xs font-medium">{t.deadline}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
