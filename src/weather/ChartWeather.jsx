import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useGetHourlyWeatherData from './hook/useGetHourlyWeatherData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

function ChartWeather() {
  const hourlyWeather = useGetHourlyWeatherData();
  const labels = hourlyWeather.map((weather) => weather.dt_txt);
  const displayData = hourlyWeather.map((weather) => weather.main.temp - 273.15);

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature in Ljubljana,°C',
        data: displayData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default ChartWeather;
