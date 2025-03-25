"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
// -----------------------------------------------------------------

const levels = [
    { name: "Sienna", min: 0, max: 10, color: "#9F6830" },
    { name: "Cobalt", min: 10, max: 12, color: "#2E479D" },
    { name: "Dandelion", min: 12, max: 14, color: "#F68C18" },
    { name: "Cyan", min: 14, max: 15, color: "#2FA9A8" },
    { name: "Scarlet", min: 15, max: 16, color: "#941E24" },
    { name: "Coral", min: 16, max: 17, color: "#DF87A0" },
    { name: "Argento", min: 17, max: 18, color: "#DADBDA" },
    { name: "Eldora", min: 18, max: 19, color: "#ECC251" },
    { name: "Crimson", min: 19, max: 20, color: "#BF2F2F" },
    { name: "Imperial", min: 20, max: 24, color: "#694894" },
];
  
function getSubBins(users) {
    const subBins = [];
  
    for (const level of levels) {
      const step = (level.max - level.min) / 4;
  
      for (let i = 0; i < 4; i++) {
        subBins.push({
          label: `${level.name}${i + 1}`,
          displayLabel: level.name,  // will be used for x-axis trick
          min: level.min + i * step,
          max: level.min + (i + 1) * step,
          color: level.color,
          count: 0,
        });
      }
    }
  
    // Count users into sub-bins
    for (const user of users) {
      const force = user.force;
      for (const bin of subBins) {
        if (force >= bin.min && force < bin.max) {
          bin.count += 1;
          break;
        }
      }
    }
  
    return subBins;
}

export default function ForceChart({ users }) {
    const bins = getSubBins(users);
  
    const data = {
      labels: bins.map((bin, idx) => (idx % 4 === 1 ? bin.displayLabel : "")),
      datasets: [
        {
          label: "User Count",
          data: bins.map(bin => bin.count),
          backgroundColor: bins.map(bin => bin.color),
        }
      ],
    };
  
    const options = {
      responsive: true,
      aspectRatio: 2,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Bar Graph",
          font: { size: 18 },
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const bin = bins[context.dataIndex];
              return `${bin.label} (${bin.min.toFixed(2)} ~ ${bin.max.toFixed(2)}): ${bin.count}`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        }
      }      
    };
  
    return <Bar data={data} options={options} />;
}
