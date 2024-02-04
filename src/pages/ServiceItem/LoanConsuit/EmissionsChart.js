import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { MenuItem, FormControl, Select, Card, CardContent, Typography } from '@mui/material';

import Chart from 'chart.js/auto';

// 假設 data 是從您的 JSON 文件中讀取的數據
import initialData  from '../LoanConsuit/LoanData/國家溫室氣體排放清冊報告.json'

const EmissionsChart = () => {
  const [startYear, setStartYear] = useState('1990');
  const [endYear, setEndYear] = useState('2020');

  const filteredData = initialData.filter(item => item.year >= startYear && item.year <= endYear);

  const labels = filteredData.map(item => item.year);
  const co2Data = filteredData.map(item => item.co2);
  const ch4Data = filteredData.map(item => item.ch4);
  const n2oData = filteredData.map(item => item.n2o);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'CO2 排放量',
        data: co2Data,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'CH4 排放量',
        data: ch4Data,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'N2O 排放量',
        data: n2oData,
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const years = initialData.map(item => item.year);
  const uniqueYears = [...new Set(years)].sort();

  return (
    <div style={{margin: '16px'}}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            溫室氣體排放趨勢
          </Typography>
          <FormControl style={{ minWidth: '120px', margin: '0 8px' }}>
            <Select
              value={startYear}
              onChange={e => setStartYear(e.target.value)}
              displayEmpty
            >
              {uniqueYears.map(year => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: '120px', margin: '0 8px' }}>
            <Select
              value={endYear}
              onChange={e => setEndYear(e.target.value)}
              displayEmpty
            >
              {uniqueYears.map(year => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Line data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EmissionsChart;