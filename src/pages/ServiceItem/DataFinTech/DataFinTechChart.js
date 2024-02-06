import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { MenuItem, FormControl, Select, Card, CardContent, Typography } from '@mui/material';
import Chart from 'chart.js/auto';  
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



// 導入JSON數據
import 丹麥 from './大數據DATA/居民消費物價指數：丹麥住房.json';
import 日本 from './大數據DATA/居民消費物價指數：日本住房.json';
import 加拿大 from './大數據DATA/居民消費物價指數：加拿大住房.json';
import 法國 from './大數據DATA/居民消費物價指數：法國住房.json';
import 美國 from './大數據DATA/居民消費物價指數：美國住房.json';
import 德國 from './大數據DATA/居民消費物價指數：德國住房.json';
import 澳洲 from './大數據DATA/居民消費物價指數：澳洲住房.json';
import 韓國 from './大數據DATA/居民消費物價指數：韓國住房.json';


const sheetsData = { 丹麥, 日本, 加拿大, 法國, 美國, 德國, 澳洲, 韓國 };

const countryFieldNames = {
    丹麥: 'CP0410DKM086NEST',
    日本: 'JPNCPIHOUMINMEI',
    加拿大: 'CANCPIHOUMINMEI',
    法國: 'CP0410FRM086NEST',
    美國: 'CPIHOSSL',
    德國: 'DEUCPIHOUMINMEI',
    澳洲: 'AUSCPIHOUQINMEI',
    韓國: 'KORCPIHOUMINMEI'
  };
  

function DataChart() {
    const [currentCountry, setCurrentCountry] = useState('丹麥');
    const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 80)));
    const [endDate, setEndDate] = useState(new Date());
    const [chartData, setChartData] = useState({
      labels: [],
      datasets: [{
        label: '',
        data: [],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      }]
    });

    useEffect(() => {
      const currentData = sheetsData[currentCountry];
      const fieldName = countryFieldNames[currentCountry]; // 请确保这个映射表已经定义
      
      if (currentData && currentData.length > 0 && fieldName) {
        const filteredData = currentData.filter(data => {
          const dataDate = new Date(data.observation_date);
          return dataDate >= startDate && dataDate <= endDate;
        });

        const chartData = {
          labels: filteredData.map(data => data.observation_date),
          datasets: [{
            label: `${currentCountry} 居民消費物價指數`,
            data: filteredData.map(data => data[fieldName]),
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
          }]
        };
        
        setChartData(chartData);
      }
    }, [currentCountry, startDate, endDate]);

    return (
    <div style={{ margin: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card style={{ margin: '50px', width: '80%' }}> {/* Adjust these styles as needed */}
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Data Chart
          </Typography>
          <FormControl fullWidth>
            <Select
              value={currentCountry}
              onChange={(e) => setCurrentCountry(e.target.value)}
            >
              {Object.keys(sheetsData).map(country => (
                <MenuItem key={country} value={country}>{country}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
          </div>
          <Line data={chartData} />
        </CardContent>
      </Card>
    </div>
    );
}

export default DataChart;