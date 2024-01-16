// MyCompany.js
import React from 'react';
import './MyCompany.css'; // 引入CSS檔案

const MyCompany = () => {
  return (
    <div className="company-container">
      <h1 className="company-title">關於我們</h1>
      <p className="company-description">可以介紹公司背景、使命、願景、歷史、團隊等的文字。</p>
      {/* 這裡可以添加更多關於公司的內容 */}
    </div>
  );
};

export default MyCompany;
