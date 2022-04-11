import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

ChartJs.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function Chart(props) {
  const { type, title, data, backgroundColor } = props;
  const barChartData = {
    labels: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor,
        fill: true,
      },
    ],
  };

  if (type === 'Bar') {
    return (
      <Bar
        height={250}
        options={{
          plugins: {
            title: {
              text: title,
              display: true,
              padding: {
                bottom: 20,
              },
              align: 'center',
              font: { weight: 'bold', size: 14 },
            },
            legend: {
              display: false,
            },
          },
        }}
        data={barChartData}
      />
    );
  }

  return (
    <Line
      height={250}
      options={{
        plugins: {
          title: {
            text: title,
            display: true,
            padding: {
              bottom: 20,
            },
            align: 'center',
            font: { weight: 'bold', size: 14 },
          },
          legend: {
            display: false,
          },
        },
      }}
      data={barChartData}
    />
  );
}

export default Chart;
