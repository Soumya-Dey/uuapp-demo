import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = () => {
  const chartRef = useRef();
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        position: 'absolute',
        padding: '18px 34px',
        minHeight: '350px',
        minWidth: '680px',
        border: '1px solid #aaaaaa',
        background: '#ffffff',
        boxShadow: '-2px 2px 8px 0 #dddddd',
        borderRadius: '4px',
        right: '-780px',
        top: '-30px',
        zIndex: 2,
      }}
    >
      <Bar ref={chartRef} data={data} />
    </div>
  );
};

export default Chart;
