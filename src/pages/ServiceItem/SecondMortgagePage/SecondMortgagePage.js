import React, { useState } from 'react';
import'../ServiceStyle.css'; // 请确保引入了CSS文件
import { Link } from 'react-router-dom';

import HouseIcon1 from '../../../pictures/WT/房貸流程icon/2提供資料.png'; 
import HouseIcon2 from '../../../pictures/WT/房貸流程icon/1意願確認.png'; 
import HouseIcon3 from '../../../pictures/WT/房貸流程icon/3確認貸款.png'; 
import HouseIcon4 from '../../../pictures/WT/房貸流程icon/4協商條件.png'; 
import HouseIcon5 from '../../../pictures/WT/房貸流程icon/設定質押.png'; 
import HouseIcon6 from '../../../pictures/WT/房貸流程icon/6撥款.png'; 

import arrow from '../../../pictures/WT/房貸流程icon/arrow-right.png'; 

// 引入DataFintech特有的图片
import AnalyticsIcon from '../../../pictures/WT/首頁icon/二順位貸款/personal.png'; 
import InsightsIcon from '../../../pictures/WT/首頁icon/二順位貸款/valuation.png'; 
import value from '../../../pictures/WT/首頁icon/二順位貸款/價值.png'; 


const FlexContainer = () => {
  // 调整为DataFintech页面特有的服务项
  return (
    <div className="content-container">
      <div className="flex-container services-row">
        <div className="service-item">
          <img src={AnalyticsIcon} alt="数据分析" className="service-icon" />
          <h3>協助資產評估</h3>
        </div>
        <div className="service-item">
          <img src={InsightsIcon} alt="市场洞察" className="service-icon" />
          <h3>協助貸款諮詢</h3>
        </div>
        <div className="service-item">
          <img src={value} alt="upvalue" className="service-icon" />
          <h3>提升價值</h3>
        </div>

      </div>
    </div>
  );
};

const ProcessStep = ({ image, title}) => {

  return (
    <div className="process-step">
      <img src={image} alt={title} className="process-image" />
      <h3 className="process-step-title">{title}</h3>

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
        <div className="service-title secondMortgagePage-background">
          <div className="text-mask"> {/* 添加这个新的容器 */}
            <h2> 二順位貸款 </h2>
            <p className="white-text">
              協助資金需求者取得投資或是創業的資金。透過房屋活化，將房屋或建物透過不同方式擴大收益率。
            </p>
          </div>
      </div>
      <div className="middleText">
        <h1>ABOUT US...</h1>
        <p>
          協助屋主進行資產活化，屋主可以利用貸款進行資本配置。我們致力於協助資金需求者取得投資或是創業的基金。
          可以透過房屋活化，將持有多年的房屋或是建物，透過其他方式擴大收益率。
          特別是閒置或是停用的建築，透過規劃與管理，可以提升這些資產價值。

        </p>
      </div>


        <FlexContainer />


        {/* 現有的流程圖容器 */}
        <div className="process-images-container">

          <div className="process-title">
            <h2>流程圖</h2>
          </div>

          {/* 第一行流程步骤与箭头 */}
          <div className="process-row">
            {services[activeService].processSteps.slice(0, 3).map((step, index, array) => (
              <React.Fragment key={`top-row-fragment-${index}`}>
               <ProcessStep 
                  image={step.image} 
                  title={step.title} 
                  descriptions={step.descriptions} 
                />

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

                {index < array.length - 1 && ( // 只有在非最后一个元素后才添加箭头
                  <div className="arrow">
                    <img src= {arrow} alt="箭头" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      

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

