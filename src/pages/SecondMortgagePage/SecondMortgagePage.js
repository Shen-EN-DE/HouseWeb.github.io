import React, { useState } from 'react';
import'./SecondMortgagePage.css'; // 请确保引入了CSS文件
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
    <div className={"content-container"}>
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

const ProcessStep = ({ image, title, descriptions }) => {

  return (
    <div className="process-step">
      <img src={image} alt={title} className="process-image" />
      <h3 className="process-step-title">{title}</h3>
      <ul className="process-description-list">
        {descriptions.map((description, index) => (
          <li key={index} className="process-description-item">{description}</li>
        ))}
      </ul>
    </div>
  );
};

const SecondMortgagePage = () => {
  // 默认显示不动产二顺位的流程图
  const [activeService] = useState('second-mortgage');

  const services = {
    'second-mortgage': {
      title: '不動產二順位',
      processSteps: [
        {
          image: HouseIcon1,
          title: '提供文件',
          descriptions: [
            '土地權狀',
            '聯徵紀錄',
            '其他有利審查之資料(薪資單等)'
          ]
        },
        {
          image: HouseIcon2,
          title: '審查評估資料',
          descriptions: ['審查資格與抵押品估價']
        },
        {
          image: HouseIcon3,
          title: '申請書填寫',
          descriptions: ['填寫貸款申請書']
        },
        {
          image: HouseIcon4,
          title: '協商條件',
          descriptions: ['確認貸款額度以及利率條件']
        },
        {
          image: HouseIcon5,
          title: '設定質押',
          descriptions: ['前往地政辦理質押']
        },
        {
          image: HouseIcon6,
          title: '專戶撥款',
          descriptions: ['撥款至戶頭']
        },
      ]
    },

  };
  

  return (
      <div className="second-mortgage-page">
        <div className="service-title">
            <h2>{services[activeService].title}</h2>
        </div>


        <FlexContainer />


        {/* 現有的流程圖容器 */}
        <div className="process-images-container">
          {/* 第一行流程步骤与箭头 */}
          <div className="process-row">
            {services[activeService].processSteps.slice(0, 3).map((step, index, array) => (
              <React.Fragment key={`top-row-fragment-${index}`}>
               <ProcessStep 
                  image={step.image} 
                  title={step.title} 
                  descriptions={step.descriptions} 
                />
                {/* <div className="process-step">
                  <img src={image} alt={`步骤 ${index + 1}`} className="process-image" />
                  <p className="process-description">{services[activeService].processDescriptions[index]}</p>
                </div> */}
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
           {services[activeService].processSteps.slice(3).map((step, index, array) => (
            <React.Fragment key={`bottom-row-fragment-${index}`}>
              <ProcessStep 
                image={step.image} 
                title={step.title} 
                descriptions={step.descriptions} 
              />
                {/* <div className="process-step">
                  <img src={image} alt={`步骤 ${index + 4}`} className="process-image" />
                  <p className="process-description">{services[activeService].processDescriptions[index + 3]}</p>
                </div> */}
                {index < array.length - 1 && ( // 只有在非最后一个元素后才添加箭头
                  <div className="arrow">
                    <img src= {arrow} alt="箭头" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
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

