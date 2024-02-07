"use client";
import React from "react";
import { Chart, scales } from "chart.js";
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
// import faker from "faker";
const ChartLine = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sub",
    "Oct",
    "Nov",
    "Dec",
  ];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options : any = {
    responsive: true,
    indexAxis: "x",
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: true, // تعيين display إلى false لإخفاء الأرقام على المحور الأفقي (x)
        },
      },
      y: {
        grid: {
            display: true,
          },
        display: true,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        fill :true,
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#FB5607",
        backgroundColor: "#FB5607",
        tension: 0.1,
    
      },
    ],
  };
  return (
    <div>
      <Line  options={options} data={data} />
    </div>
  );
};

export default ChartLine;
