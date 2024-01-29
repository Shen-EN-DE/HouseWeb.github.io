import React, { useState } from 'react';
import './SecondMortgagePage.css'; // 请确保引入了CSS文件
import { Link } from 'react-router-dom';

import HouseIcon1 from '../../pictures/WT/房貸流程p/2提供資料1.png'; 
import HouseIcon2 from '../../pictures/WT/房貸流程p/3確認貸款.png'; 
import HouseIcon3 from '../../pictures/二順位貸款/二順位貸款3.png'; 
import HouseIcon4 from '../../pictures/WT/房貸流程p/4協商條件2.png'; 
import HouseIcon5 from '../../pictures/WT/房貸流程p/6走政府流程2.png'; 
import HouseIcon6 from '../../pictures/WT/房貸流程p/5通知裕融.png'; 

import arrow from '../../pictures/箭頭.png'; 


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
          <h3>優點</h3>
          <p>1. 信用條件要求低: 擁有房產作擔保品，對其他證明要求較低。</p>
          <p>2. 貸款額度較高: 相比其他貸款項目，不動產二順位能獲得較高貸款額度。</p>
          <p>3. 還款年限較長: 擁有較長還款期限，讓申貸人財務壓力減少。</p>

          {/* <div className="highlight">120月</div> */}
        </div>
      </div>
    </div>
  );
};



const SecondMortgagePage = () => {
  // 默认显示不动产二顺位的流程图
  const [activeService] = useState('second-mortgage');

  const services = {
    // 'motorcycle-loan': {
    //   title: '機車貸款',
    //   processImages: [HouseIcon, CarIcon, OtherIcon, HouseIcon, CarIcon, OtherIcon, HouseIcon],
    //   processDescriptions: ['步骤1描述', '步骤2描述', '步骤3描述', '步骤4描述', '步骤5描述', '步骤6描述', '步骤7描述']
    // },
    'second-mortgage': {
      title: '不動產二順位',
      processImages: [HouseIcon1, HouseIcon2, HouseIcon3, HouseIcon4, HouseIcon5, HouseIcon6],
      processDescriptions: ['提供文件', '審查評估資料', '申請書填寫', '協商條件', '設定質押', '專戶撥款']
    },

  };
  

  return (
      <div className="second-mortgage-page">
        <div className="service-title">
            <h2>{services[activeService].title}</h2>
        </div>

        {/* 現有的流程圖容器 */}
        <div className="process-images-container">
          {/* 第一行流程步骤与箭头 */}
          <div className="process-row">
            {services[activeService].processImages.slice(0, 3).map((image, index, array) => (
              <React.Fragment key={`top-row-fragment-${index}`}>
                <div className="process-step">
                  <img src={image} alt={`步骤 ${index + 1}`} className="process-image" />
                  <p className="process-description">{services[activeService].processDescriptions[index]}</p>
                </div>
                {index < array.length - 1 && ( // 只有在非最后一个元素后才添加箭头
                  <div className="arrow">
                    <img src= {arrow} alt="箭头" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 第二行流程步骤与箭头 */}
          <div className="process-row">
            {services[activeService].processImages.slice(3, 6).map((image, index, array) => (
              <React.Fragment key={`bottom-row-fragment-${index}`}>
                <div className="process-step">
                  <img src={image} alt={`步骤 ${index + 4}`} className="process-image" />
                  <p className="process-description">{services[activeService].processDescriptions[index + 3]}</p>
                </div>
                {index < array.length - 1 && ( // 只有在非最后一个元素后才添加箭头
                  <div className="arrow">
                    <img src= {arrow} alt="箭头" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <FlexContainer />


        {/* <div className="service-selection">
            {Object.keys(services).map((serviceKey) => (
            <button
                key={serviceKey}
                onClick={() => setActiveService(serviceKey)}
                className={`service-button ${activeService === serviceKey ? 'active' : ''}`}
            >
                {services[serviceKey].title}
            </button>
            ))}
        </div> */}

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

export default SecondMortgagePage;

