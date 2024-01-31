import React from 'react';
import './LoanConsuit.css'; // 请确保引入了CSS文件
import { Link } from 'react-router-dom';

// import HouseIcon from '../../pictures/房貸.png'; 
// import CarIcon from '../../pictures/車貸.png'; 
// import OtherIcon from '../../pictures/其他貸款.png'; 


const FlexContainer = () => {
  return (
    <div className="content-container">
      <div className="flex-container top-row">
        {/* 上方的四個小方格子，請根據需要填充內容 */}
          <div className="flex-item small-box">
            <p>
              協助企業建置碳排放模型，協助企業透過簡單進行人員、廠房設備的盤查，建
              立碳排計算量模型。<br/>
              企業可以透過模型掌握自身企業的排碳量。同時，也提供
              碳管理服務，除了可以固定於每月底提供詳細分析報告，也可以提供建議以改
              善目前企業的碳排表現。
            </p>
          </div>
        <div className="flex-item small-box">
          <p>可提供服務:</p>
          <ul>
            <li>1. 建置碳排放模型</li>
            <li>2. 提供報告及建議</li>
          </ul>
        </div>
      </div>


      {/* <div className="flex-container bottom-row"> */}
        {/* 下方的兩個大方格子，請根據需要填充內容 */}
        {/* <div className="flex-item large-box">
          <h3>貸款金額</h3>
          <p>最高可貸金額</p>
          <div className="highlight">110%</div>
        </div>
        <div className="flex-item large-box">
          <h3>還款期限</h3>
          <p>最高可貸期限</p>
          <div className="highlight">120月</div>
        </div>
      </div> */}
    </div>
  );
};



const LoanConsuit = () => {
  // 默认显示不动产二顺位的流程图
  // const [activeService, setActiveService] = useState('second-mortgage');

  // const services = {
  //   // 'motorcycle-loan': {
  //   //   title: '機車貸款',
  //   //   processImages: [HouseIcon, CarIcon, OtherIcon, HouseIcon, CarIcon, OtherIcon, HouseIcon],
  //   //   processDescriptions: ['步骤1描述', '步骤2描述', '步骤3描述', '步骤4描述', '步骤5描述', '步骤6描述', '步骤7描述']
  //   // },
  //   'second-mortgage': {
  //     title: '不動產二順位',
  //     processImages: [HouseIcon, CarIcon, OtherIcon, HouseIcon, CarIcon, OtherIcon, HouseIcon],
  //     processDescriptions: ['步骤1描述', '步骤2描述', '步骤3描述', '步骤4描述', '步骤5描述', '步骤6描述', '步骤7描述']
  //   },

  // };
  

  return (
      <div className="second-mortgage-page">
        <div className="service-title">
            <h2> 碳管理平台 </h2>
        </div>

        {/* 現有的流程圖容器 */}
        {/* <div className="process-images-container">
        {services[activeService].processImages.map((image, index) => (
        <div key={index} className="process-step">
            <img src={image} alt={`流程 ${index + 1}`} className="process-image" />
            <p className="process-description">{services[activeService].processDescriptions[index]}</p>
        </div>
        ))}
        </div> */}

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

export default LoanConsuit;

