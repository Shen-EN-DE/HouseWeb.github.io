import React from 'react';
import './ESGtech.css'; // 请确保引入了CSS文件
import { Link } from 'react-router-dom';

const FlexContainer = () => {
    return (
      <div className="content-container">
        <div className="flex-container top-row">
          {/* 上方的四個小方格子，請根據需要填充內容 */}
          <div className="flex-item small-box">好房再貸一波，房屋價值再活化。利率也較高！好房再貸一波，房屋價值再活化。利率也較高</div>
          <div className="flex-item small-box">小方格2</div>
  
  
        </div>
        <div className="flex-container bottom-row">
          {/* 下方的兩個大方格子，請根據需要填充內容 */}
          <div className="flex-item large-box">
            <h3>貸款金額</h3>
            <p>最高可貸金額</p>
            <div className="highlight">110%</div>
          </div>
          <div className="flex-item large-box">
            <h3>還款期限</h3>
            <p>最高可貸期限</p>
            <div className="highlight">120月</div>
          </div>
        </div>
      </div>
    );
  };

  const ESGtech = () => {
    
  
    return (
        <div className="second-mortgage-page">
          <div className="service-title">
              <h2> 綠色金融科技 </h2>
          </div>
  
          <FlexContainer />
  
  
          {/* 回首頁與線上申貸按鈕 */}
          <div className="buttons-container">
            <Link to="/" className="button-link">
              <button>回首頁</button>
            </Link>
            <Link to="/contact-us" className="button-link">
              <button>線上申貸</button>
            </Link>
          </div>
  
        </div>
      )
  }

  export default ESGtech;