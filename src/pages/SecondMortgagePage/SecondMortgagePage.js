import React, { useState } from 'react';
import './SecondMortgagePage.css'; // 请确保引入了CSS文件

import HouseIcon from '../../pictures/房貸.png'; 
import CarIcon from '../../pictures/車貸.png'; 
import OtherIcon from '../../pictures/其他貸款.png'; 


const SecondMortgagePage = () => {
  // 默认显示不动产二顺位的流程图
  const [activeService, setActiveService] = useState('second-mortgage');

  const services = {
    'motorcycle-loan': {
      title: '機車貸款',
      processImages: [HouseIcon, CarIcon, OtherIcon, HouseIcon, CarIcon, OtherIcon, HouseIcon],
      content: '機車借款申請書一張完整的機車借款申請書通常包含以下內容：個人資料：包括姓名、身份證字號、住址、聯絡方式等。工作資料：包括職業、公司名稱、職稱、薪資等。' +
      '財務資料：包括收入、支出、負債等。機車資料：包括品牌、型號、購買時間、登記號碼等。抵押資料：包括抵押物的資料，如車牌號碼、登記證明等。' + 
      '申請貸款金額：借款者需要指明申請貸款的金額和期限。附件：一般需要附上身份證正反面影本、戶籍謄本、薪資證明、機車登記證明。',
      processDescriptions: ['步骤1描述', '步骤2描述', '步骤3描述', '步骤4描述', '步骤5描述', '步骤6描述', '步骤7描述']
    },
    'second-mortgage': {
      title: '不動產二順位',
      processImages: [HouseIcon, CarIcon, OtherIcon, HouseIcon, CarIcon, OtherIcon, HouseIcon],
      content: '不動產二順位的相關描述...',
      processDescriptions: ['步骤1描述', '步骤2描述', '步骤3描述', '步骤4描述', '步骤5描述', '步骤6描述', '步骤7描述']
    },
    'car-loan': {
      title: '汽車貸款',
      processImages: [HouseIcon, CarIcon, OtherIcon, HouseIcon, CarIcon, OtherIcon, HouseIcon],
      content: '汽車貸款的相關描述...',
      processDescriptions: ['步骤1描述', '步骤2描述', '步骤3描述', '步骤4描述', '步骤5描述', '步骤6描述', '步骤7描述']
    }
  };

  return (
        <div className="second-mortgage-page">
        <div className="service-title">
            <h2>{services[activeService].title}</h2>
        </div>
        {/* 業務內容容器 */}
        <div className="service-content">
            <p>{services[activeService].content}</p>
        </div>

        {/* 現有的流程圖容器 */}
        <div className="process-images-container">
        {services[activeService].processImages.map((image, index) => (
        <div key={index} className="process-step">
            <img src={image} alt={`流程 ${index + 1}`} className="process-image" />
            <p className="process-description">{services[activeService].processDescriptions[index]}</p>
        </div>
        ))}
        </div>
        <div className="service-selection">
            {Object.keys(services).map((serviceKey) => (
            <button
                key={serviceKey}
                onClick={() => setActiveService(serviceKey)}
                className={`service-button ${activeService === serviceKey ? 'active' : ''}`}
            >
                {services[serviceKey].title}
            </button>
            ))}
        </div>
        </div>
    )
}

export default SecondMortgagePage;

