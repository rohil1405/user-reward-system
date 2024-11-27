import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const BarChart = () => {
  const data = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        label: "Reward",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        data: [25, 50, 75, 100, 150, 175, 225],
      },
      {
        label: "Recognition",
        backgroundColor: "red",
        borderColor: "yellow",
        data: [20, 45, 74, 95, 140, 209],
      },
    ],
  };

  const options = {
    elements: {
      bar: {
        borderRadius: 40,
        borderWidth: 0.7,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { dash: [6, 6], display: true },
        grid: {
          display: true,
        },
        ticks: {
          padding: 15,
        },
      },
      x: {
        beginAtZero: true,
        border: { display: true },
        grid: {
          display: false,
        },
        ticks: {
          padding: 7,
        },
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
