import React, { useState } from 'react';
// import Tooltip from 'react-tooltip';
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

  const [mouseX, setMouseX] = useState(null);
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
  

  const [hoveredIndex, setHoveredIndex] = useState(null);


  const data = {
    labels,
    datasets: [
      {
        label: "Oct 1, 2022 - Feb 21, 2024",
        data: [18, 20, 28, 15, 19, 32, 25, 20],
        borderColor: "#489AD2",
        showLine: true,
        pointRadius: 0,

        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        cubicInterpolationMode: "monotone",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: "Oct 1, 2022 - Feb 21, 2024",
        data: [18, 18, 33, 10, 27, 25, 28, 20],
        borderColor: "#afcedb",
        cubicInterpolationMode: "monotone",
        borderDash: [8, 2],
        showLine: true,
        pointRadius: 0,

        fill: false,
      },
    ],
  };
  const options = {

    scales: {
      x: [
        {
          type: 'category',
          labels: data.labels,
        },
      ],
      y: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    onHover: (event, elements) => {
      if (event && event.currentTarget && elements && elements.length > 0) {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - (rect?.left || 0);
        setHoveredIndex(elements[0].index);
        setMouseX(rect?.left + window.scrollX + mouseX);
      } else {
        setHoveredIndex(null);
        setMouseX(null);
      }
    },
  };
  return (
 

    <div style={{ width: '786px', height: '450px', position: 'relative' }}>
      <Line data={data} options={options} />
      {mouseX !== null && (
        <Tooltip
          place="top"
          type="light"
          effect="solid"
          id="verticalLineTooltip"
          multiline={false}
          event={`mouseover`}
          eventOff={`mouseout`}
          globalEventOff={`mouseout`}
          eventResize={true}
          eventResizeFunc={(content) => {
            return {
              top: content.top + window.scrollY,
              left: mouseX - content.width / 2,
            };
          }}
        >
          <span>
            {`Normal Line: ${data.datasets[0].data[hoveredIndex]}`}
            <br />
            {`Dotted Line: ${data.datasets[1].data[hoveredIndex]}`}
          </span>
        </Tooltip>
      )}
      {mouseX !== null && (
        <div
          style={{
            position: 'absolute',
            left: mouseX + 'px',
            top: '0',
            height: '100%',
            borderLeft: '1px solid #ccc',
            pointerEvents: 'none',
          }}
        ></div>
      )}
    </div>
  );
}

export default Statbox