import React from 'react';
import'../ServiceStyle.css'; // 请确保引入了CSS文件
import { Link } from 'react-router-dom';
// 引入DataFintech特有的图片
import AnalyticsIcon from '../../../pictures/WT/首頁icon/ESG綠色金融科技/永續資料.png'; 
import InsightsIcon from '../../../pictures/WT/首頁icon/ESG綠色金融科技/獨家指數指標.png'; 
import StrategyIcon from '../../../pictures/WT/首頁icon/ESG綠色金融科技/趨勢分析.png'; 

import ESGDataDisplay from './ESGDataDisplay';

const FlexContainer = () => {
  // 调整为DataFintech页面特有的服务项
  return (
    <div className="content-container">
      <div className="flex-container services-row">
        <div className="service-item">
          <img src={AnalyticsIcon} alt="数据分析" className="service-icon" />
          <h3>量化的永續資料</h3>
        </div>
        <div className="service-item">
          <img src={InsightsIcon} alt="市场洞察" className="service-icon" />
          <h3>趨勢分析</h3>
        </div>
        <div className="service-item">
          <img src={StrategyIcon} alt="战略规划" className="service-icon" />
          <h3>建立獨家指數指標</h3>
        </div>
      </div>
    </div>
  );
};

const DataFintech = () => {
  // 调整页面内容以反映DataFintech的特点
  return (
    <div className="ESGtech-page">
      <div className="service-title esgtech-background">
        <div className="text-mask"> {/* 添加这个新的容器 */}
          <h2> 綠色金融資料庫 </h2>
          <p className="white-text">
          協助業界人士建立永續量化指標。可藉由資料庫來完成學術研究或協助永續投資發展。本資料庫將定期更新以降低資訊落差，隨時掌握企業在永續方面的成果與付出。
          </p>
        </div>
      </div>
      <div className="ServerItemMiddleText">
        <h1>ABOUT US...</h1>
        <p>
        鑒於氣候變遷造成極端氣候之影響，促使各國重視環境與社會的永續發展。並希望透過資本市場之引導企業開始投入永續發展。
        金管會於是於2020年8月推行「公司治理3.0-永續發展藍圖」。其中特別要求企業須每年度公布永續報告書，詳細說明公司的永續進程與成果。
        本資料庫希望透過技術，降低投資人或是學術研究人員的時間耗費，因永續報告書具有各種不同格式。
        使用者如是需要多年度、多公司的資料會耗費許多時間在資料擷取，因此本資料庫旨在將玲瑯滿目的永續報告書化成黑底白字的量化資料。

        </p>
      </div>

      <FlexContainer />
      <ESGDataDisplay /> {/* 导入Excel数据显示组件 */}


      {/* 保持或调整页面底部的链接和按钮 */}
      <div className="buttons-container">
        <Link to="/" className="button-link back-home">
          <button>回首页</button>
        </Link>
        <Link to="/contact-us" className="button-link contact-us">
          <button>聯絡我們</button>
        </Link>
      </div>
    </div>
  );
}

export default DataFintech;
