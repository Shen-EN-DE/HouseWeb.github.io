import React from 'react';
import './DataFinTech.css'; // 请确保引入了CSS文件
import { Link } from 'react-router-dom';

// import HouseIcon from '../../pictures/房貸.png'; 
// import CarIcon from '../../pictures/車貸.png'; 
// import OtherIcon from '../../pictures/其他貸款.png'; 


const FlexContainer = () => {
  return (
    <div className="content-container">
      <div className="flex-container top-row">
        {/* 上方的四個小方格子，請根據需要填充內容 */}
        <div className=
        "flex-item small-box">
          <p>
          為了簡化企業貸款所需的時間，本公司利用人工智慧(Artificial Intelligence)技術
          來為國外中小型企業提供服務。<br/>
          主要使用機器學習(Machine Learning)以及大數
          據分析( Data Analysis)，來大幅縮短申貸所需時間。<br/>
          同時根據國外廠商所需商業
          決策或多元金融產品來建置模型，以滿足企業需求。
          </p>

        </div>

        <div className="flex-item small-box">
          <p>可提供服務:</p>
            <ul>
              <li>1. 人工智慧技術位國外企業提供服務</li>
              <li>2. 客制化金融模型</li>
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
        </div> */}
      {/* </div> */}
    </div>
  );
};



const DataFinTech = () => {
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
            <h2> 大數據分析 </h2>
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

export default DataFinTech;

