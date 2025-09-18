import React, { useState, useMemo } from "react";
import { UseJobs } from "../../../context/JobsContext";
import Swal from "sweetalert2";

const JobsTable = () => {
  const { jobTrack, updateApplication, deleteApplication } = UseJobs();
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Calculate pagination data
  const paginationData = useMemo(() => {
    const totalItems = jobTrack.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = jobTrack.slice(startIndex, endIndex);

    return {
      totalItems,
      totalPages,
      currentItems,
      startIndex,
      endIndex: Math.min(endIndex, totalItems),
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    };
  }, [jobTrack, currentPage, itemsPerPage]);

  // Reset to first page when jobs change
  React.useEffect(() => {
    if (
      currentPage > paginationData.totalPages &&
      paginationData.totalPages > 0
    ) {
      setCurrentPage(1);
    }
  }, [jobTrack.length, currentPage, paginationData.totalPages]);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get status badge styling
  const getStatusStyle = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status?.toLowerCase()) {
      case "applied":
        return `${baseClasses} bg-blue-500 text-white dark:bg-blue-900 dark:text-blue-200`;
      case "interview":
        return `${baseClasses} bg-yellow-500 text-white dark:bg-yellow-900 dark:text-yellow-200`;
      case "offer":
        return `${baseClasses} bg-green-500 text-white dark:bg-green-900 dark:text-green-200`;
      case "rejected":
        return `${baseClasses} bg-red-500 text-white dark:bg-red-900 dark:text-red-200`;
      default:
        return `${baseClasses} bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-200`;
    }
  };

  // Handle edit button click
  const handleEdit = (actualIndex, job) => {
    // Calculate the actual index in the full array
    const realIndex = paginationData.startIndex + actualIndex;
    setEditingIndex(realIndex);
    setEditData({ ...job });
  };

  // Handle save edit
  const handleSaveEdit = () => {
    if (!editData.company || !editData.jobPosition || !editData.dateApplied) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all required fields",
        icon: "error",
      });
      return;
    }

    updateApplication(editingIndex, editData);
    setEditingIndex(null);
    setEditData({});

    Swal.fire({
      title: "Updated!",
      text: "Application has been updated successfully",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditData({});
  };

  // Handle delete with confirmation
  const handleDelete = (actualIndex, job) => {
    // Calculate the actual index in the full array
    const realIndex = paginationData.startIndex + actualIndex;

    Swal.fire({
      title: "Are you sure?",
      text: `Delete application for ${job.jobPosition} at ${job.company}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteApplication(realIndex);
        Swal.fire({
          title: "Deleted!",
          text: "Application has been deleted",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  // Handle input change during editing
  const handleEditChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
    setEditingIndex(null); // Cancel any ongoing edits when changing pages
    setEditData({});
  };

  const goToNextPage = () => {
    if (paginationData.hasNextPage) {
      goToPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (paginationData.hasPreviousPage) {
      goToPage(currentPage - 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const { totalPages } = paginationData;

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page, last page, current page and surrounding pages
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Show empty state if no jobs
  if (jobTrack.length === 0) {
    return (
      <div className="w-full flex items-center justify-center py-12">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-lg font-semibold text-neutral-600 dark:text-neutral-300 mb-2">
            No applications yet
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400">
            Start by adding your first job application!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      {/* Table Info */}
      <div className="flex justify-between items-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">
        <span>
          Showing {paginationData.startIndex + 1} to {paginationData.endIndex}{" "}
          of {paginationData.totalItems} applications
        </span>
        <span>
          Page {currentPage} of {paginationData.totalPages}
        </span>
      </div>

      {/* Table */}
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginationData.currentItems.map((job, index) => {
              const realIndex = paginationData.startIndex + index;
              return (
                <tr
                  key={realIndex}
                  className="text-black dark:text-white border-b border-base-200"
                >
                  {/* Company & Position */}
                  <td>
                    {editingIndex === realIndex ? (
                      <div className="flex flex-col gap-2">
                        <input
                          type="text"
                          value={editData.jobPosition || ""}
                          onChange={(e) =>
                            handleEditChange("jobPosition", e.target.value)
                          }
                          className="input input-sm input-bordered w-full"
                          placeholder="Job Position"
                        />
                        <input
                          type="text"
                          value={editData.company || ""}
                          onChange={(e) =>
                            handleEditChange("company", e.target.value)
                          }
                          className="input input-sm input-bordered w-full"
                          placeholder="Company"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {job.jobPosition || "N/A"}
                        </span>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                          {job.company || "N/A"}
                        </span>
                      </div>
                    )}
                  </td>

                  {/* Date Applied */}
                  <td>
                    {editingIndex === realIndex ? (
                      <input
                        type="date"
                        value={editData.dateApplied || ""}
                        onChange={(e) =>
                          handleEditChange("dateApplied", e.target.value)
                        }
                        className="input input-sm input-bordered w-full"
                      />
                    ) : (
                      formatDate(job.dateApplied)
                    )}
                  </td>

                  {/* Status */}
                  <td>
                    {editingIndex === realIndex ? (
                      <select
                        value={editData.status || ""}
                        onChange={(e) =>
                          handleEditChange("status", e.target.value)
                        }
                        className="select select-sm select-bordered w-full"
                      >
                        <option value="">Select Status</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    ) : (
                      <span className={getStatusStyle(job.status)}>
                        {job.status || "N/A"}
                      </span>
                    )}
                  </td>

                  {/* Salary */}
                  <td>
                    {editingIndex === realIndex ? (
                      <input
                        type="text"
                        value={editData.salary || ""}
                        onChange={(e) =>
                          handleEditChange("salary", e.target.value)
                        }
                        className="input input-sm input-bordered w-full"
                        placeholder="e.g., $50,000 - $60,000"
                      />
                    ) : (
                      job.salary || "N/A"
                    )}
                  </td>

                  {/* Location */}
                  <td>
                    {editingIndex === realIndex ? (
                      <input
                        type="text"
                        value={editData.location || ""}
                        onChange={(e) =>
                          handleEditChange("location", e.target.value)
                        }
                        className="input input-sm input-bordered w-full"
                        placeholder="e.g., New York City"
                      />
                    ) : (
                      job.location || "N/A"
                    )}
                  </td>

                  {/* Actions */}
                  <td>
                    {editingIndex === realIndex ? (
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveEdit}
                          className="p-2 rounded bg-green-500 hover:bg-green-600 text-white transition-colors cursor-pointer"
                          title="Save changes"
                        >
                          ✅
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="p-2 rounded bg-gray-500 hover:bg-gray-600 text-white transition-colors cursor-pointer"
                          title="Cancel editing"
                        >
                          ❌
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(index, job)}
                          className="p-2 rounded bg-base-300 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                          title="Edit application"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(index, job)}
                          className="p-2 rounded bg-base-300 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                          title="Delete application"
                        >
                          🗑️
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {paginationData.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center mt-2 gap-4">
          {/* Pagination Controls */}
          <div className="flex items-center space-x-1">
            {/* Previous Button */}
            <button
              onClick={goToPreviousPage}
              disabled={!paginationData.hasPreviousPage}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                paginationData.hasPreviousPage
                  ? "bg-base-300 hover:bg-base-200 text-neutral-700 dark:text-neutral-200"
                  : "bg-base-200 text-neutral-400 cursor-not-allowed"
              }`}
            >
              Prev
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-1">
              {getPageNumbers().map((page, index) => {
                if (page === "...") {
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-3 py-2 text-neutral-500"
                    >
                      ...
                    </span>
                  );
                }

                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-base-300 hover:bg-base-200 text-neutral-700 dark:text-neutral-200"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={!paginationData.hasNextPage}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                paginationData.hasNextPage
                  ? "bg-base-300 hover:bg-base-200 text-neutral-700 dark:text-neutral-200"
                  : "bg-base-200 text-neutral-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsTable;
