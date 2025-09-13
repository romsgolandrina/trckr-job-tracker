import React, { useState } from "react";
import {
  LuClipboardPenLine,
  LuFileChartColumn,
  LuSearch,
} from "react-icons/lu";
import AddApplicationModal from "./modal/addApplicationModal";

const AddFilterSearch = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-between px-1">
        <div className="flex flex-wrap gap-2 items-center">
          <button
            onClick={() => setShowModal(true)}
            className="h-10 py-2 px-4 bg-blue-500 text-white flex items-center gap-2 text-sm font-medium hover:bg-black cursor-pointer rounded-md"
          >
            <LuClipboardPenLine size={20} />
            Add New Application
          </button>
          <button className="h-10 py-2 px-4 bg-green-500 text-white flex items-center gap-2 text-sm  font-medium hover:bg-black cursor-pointer rounded-md">
            <LuFileChartColumn size={20} />
            Export Data
          </button>
        </div>
        <div className="flex items-center justify-end">
          <label className="input bg-white dark:bg-base-300 text-black dark:text-white border border-neutral-300 dark:border-base-300 h-10 rounded-md outline-none">
            <LuSearch size={20} />
            <input
              type="search"
              placeholder="Search"
              className="bg-white w-64 text-sm dark:bg-base-300 text-black dark:text-white"
            />
          </label>
        </div>
      </div>
      <AddApplicationModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default AddFilterSearch;
