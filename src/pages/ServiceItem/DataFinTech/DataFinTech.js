import React from 'react';
import'../ServiceStyle.css'; // 请确保引入了CSS文件
import { Link } from 'react-router-dom';
// 引入DataFintech特有的图片
import AnalyticsIcon from '../../../pictures/WT/首頁icon/大數據服務/geometric.png'; 
import InsightsIcon from '../../../pictures/WT/首頁icon/大數據服務/machine-learning.png'; 
import StrategyIcon from '../../../pictures/WT/首頁icon/大數據服務/operational.png'; 

import DataChart from './DataFinTechChart';


const FlexContainer = () => {
  // 调整为DataFintech页面特有的服务项
  return (
    <div className="content-container">
      <div className="flex-container services-row">
        <div className="service-item">
          <img src={AnalyticsIcon} alt="数据分析" className="service-icon" />
          <h3>數據技術為國外企業提供服務</h3>
        </div>
        <div className="service-item">
          <img src={InsightsIcon} alt="市场洞察" className="service-icon" />
          <h3>客制化金融模型</h3>
        </div>
        <div className="service-item">
          <img src={StrategyIcon} alt="战略规划" className="service-icon" />
          <h3>提高執行效率</h3>
        </div>
      </div>
    </div>
  );
};

const DataFintech = () => {
  // 调整页面内容以反映DataFintech的特点
  return (
    <div className="fintech-page">
      <div className="service-title data-fintech-background">
        <div className="text-mask"> {/* 添加这个新的容器 */}
          <h2> 大數據分析 </h2>
          <p className="white-text">
          利用人工智慧技術來為國外中小型企業提供服務。使用機器學習及數據分析，縮短申貸所需時間。同時根據國外客戶所需商業決策或金融產品建置模型。
            
            </p>
        </div>
      </div>
      <div className="ServerItemMiddleText">
          <h1>ABOUT US...</h1>
          <p>
            在科技化時代，大數據相關技術已被廣泛運用到各領域。利用演算法及數據相
            關技術可以擁有更安全的風險管理以及節省時間及人力成本來提高效率。同
            時，可針對客戶對金融產品的建置模型，進而提供更貼近客戶的實際狀況。
          </p>
      </div>

      <FlexContainer />
      <DataChart />


      {/* 保持或调整页面底部的链接和按钮 */}
      <div className="buttons-container">
        <Link to="/" className="button-link back-home">
          <button>回首頁</button>
        </Link>
        <Link to="/contact-us" className="button-link contact-us">
          <button>聯絡我們</button>
        </Link>
      </div>
    </div>
  );
}

export default DataFintech;
