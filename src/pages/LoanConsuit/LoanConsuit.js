import React from 'react';
import './LoanConsuit.css'; // 请确保引入了CSS文件
import { Link } from 'react-router-dom';


import ModelIcon from '../../pictures/WT/首頁icon/碳權/algorithm.png'; 
import ReportIcon from '../../pictures/WT/首頁icon/碳權/report.png'; 
import EsgIcon from '../../pictures/WT/首頁icon/碳權/corporate.png'; 
import EmissionsChart from './EmissionsChart';

const FlexContainer = () => {

  return (
    <div className="content-container">
      <div className="flex-container services-row">
        <div className="service-item">
          <img src={ModelIcon} alt="建立碳排模型" className="service-icon" />
          <h3>建立碳排模型</h3>
          <p>開發準確的碳足跡模型以監控排放。</p>
        </div>
        <div className="service-item">
          <img src={ReportIcon} alt="報告" className="service-icon" />
          <h3>提供報告及建議</h3>
          <p>提供帶有可執行見解的詳細每月報告。</p>
        </div>
        <div className="service-item">
          <img src={EsgIcon} alt="ESG" className="service-icon" />
          <h3>提升企業 ESG 形象</h3>
          <p>通過戰略性舉措提高企業 ESG 輪廓。</p>
        </div>
      </div>
    </div>
  );
};



const LoanConsuit = () => {


  return (
      <div className="loan-page">
        <div className="service-title">
            <h2> 碳管理工具 </h2>
            <p>協助企業建立碳排計算量模型，企業可以透過模型掌握自身擁有排碳量。同時提供碳管理服務於每月底提供詳細分析報告，來改善企業碳排表現。</p>
        </div>
        <div className="middleText"> {/* 新增中間文字 */}
          <h1>ABOUT US...</h1>
          <p>
            金管會為了於 2027 年達成全體上市櫃公司溫室氣體盤查的目標，並在 2029 年能達到確信水準，以建立永續發展(ESG)的綠色供應鏈。
            目前大家所重視碳盤查原因主要有保護環境進而展現企業社會責任、推動能源
            轉型以及銷售減碳額度 (碳權交易機制)。
            此服務擁有的優點為快速掌握碳排放數據、數據的可靠性擁有可追溯、具有監
            測與管理特性以及管控對相關供應鏈影響，具有風險管理。
          </p>
          
        </div>



        <FlexContainer />
        <EmissionsChart />

        {/* 回首頁與線上申貸按鈕 */}
        <div className="buttons-container">
          <Link to="/" className="button-link back-home">
            <button>回首頁</button>
          </Link>
          <Link to="/contact-us" className="button-link contact-us">
            <button>聯絡我們</button>
          </Link>
        </div>

      </div>
    )
}

export default LoanConsuit;

