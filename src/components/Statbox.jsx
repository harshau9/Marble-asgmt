import React from 'react'
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

function Statbox() {

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  const labels = ["Oct 2022", "Dec 2022", "Feb 2023", "Apr 2023", "Jun 2023", "Aug 2023", "Oct 2023", "Dec 2023"];
  
  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 3,
          callback: function (value, index, values) {
            return value + "K";
          },
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Oct 1, 2022 - Feb 21, 2024",
        data: [18, 20, 28, 15, 19, 32, 25, 20],
        borderColor: "#489AD2",
        showLine: true,
        pointRadius: 0,
      },
      {
        label: "Oct 1, 2022 - Feb 21, 2024",
        data: [18, 18, 33, 10, 27, 25, 28, 20],
        borderColor: "#afcedb",
        borderDash: [8, 2],
        showLine: true,
        pointRadius: 0,
      },
    ],
  };
  return (
    <div style={{ width: "786px",height:"450px" }}>
      <Line options={options} data={data} />
    </div>
  )
}

export default Statbox