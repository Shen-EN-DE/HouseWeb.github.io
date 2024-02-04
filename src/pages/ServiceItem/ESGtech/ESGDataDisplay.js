// 假设Excel文件被放置在src目录下，例如src/data/esgData.xlsx
import esgDataFile from './ESGData/綠色金融科技 永續資料庫 範例.xlsx';
import * as XLSX from 'xlsx';
import React, { useState, useEffect } from 'react';
import './ESGDataDisplay.css'; // 导入专用CSS

const ESGDataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(esgDataFile)
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const wb = XLSX.read(ab, { type: 'array' });
        const sheetName = wb.SheetNames[0];
        const ws = wb.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(ws);
        setData(data);
      });
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <table className="esg-data-table">
          {/* 表格内容 */}
          <div>
            {data.length > 0 && (
                <table className="esg-data-table">
                <thead>
                    <tr>
                    {/* 动态生成表头 */}
                    {Object.keys(data[0]).map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {/* 遍历data数组，为每条记录生成一个表格行 */}
                    {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {/* 遍历每条记录的键值对，生成单元格 */}
                        {Object.values(row).map((value, valueIndex) => (
                        <td key={valueIndex}>{value}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
          </div>
        </table>
      )}
    </div>
  );
};

export default ESGDataDisplay;
