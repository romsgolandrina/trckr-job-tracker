import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const YearReports = () => {
  // Example data (applications per day)
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Applications Sent",
        data: [3, 2, 4, 1, 0, 5, 2, 10, 15, 6, 3, 9], // replace with dynamic data
        borderColor: "#222222",
        backgroundColor: "rgb(210, 210, 210)",
        fill: true,
        tension: 0.3, // smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#374151", // text-gray-700
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#374151" },
        grid: { color: "rgba(209, 213, 219, 0.3)" }, // light gray
      },
      y: {
        ticks: { color: "#374151" },
        grid: { color: "rgba(209, 213, 219, 0.3)" },
      },
    },
  };

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="h-full flex flex-col py-4 px-6 gap-4">
      <h1 className="w-full flex items-center text-lg font-semibold text-black dark:text-white">
        Monthly Application -{" "}
        {date.toLocaleDateString("en-GB", {
          year: "numeric",
        })}
      </h1>
      <div className="flex-1">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default YearReports;
