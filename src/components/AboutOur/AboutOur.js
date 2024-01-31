import React from 'react';
import './AboutOur.css';
import serviceIcon1 from '../../pictures/WT/首頁icon/品牌故事/品牌故事1.jpg'; 
import serviceIcon2 from '../../pictures/WT/首頁icon/品牌故事/品牌故事3.jpg'; 
import serviceIcon3 from '../../pictures/WT/首頁icon/為何選擇白樹/WHY3.jpg'; 

import { useNavigate } from 'react-router-dom';


function AboutOurItem({ icon, title, description, path }) {

  const navigate = useNavigate();
  
  const handleClick = () => {
    if(path) {
      navigate(path); // 使用導航函數來改變路徑
    }
  };


    return (
      <div className="AboutOurItem">
        <div className="AboutOurInfo">
          <h2>{title}</h2>
          {Array.isArray(description) ? (
            <ol>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          ) : (
            <p>{description}</p>
          )}
          {path && <button className="readMore" onClick={handleClick}>Read More</button>}
        </div>
        <div className="AboutOurGraphic">
          <img src={icon} alt={title} className="AboutOurIcon" />
        </div>
      </div>
    );
  }

  function AboutOur() {
    const services = [
      {
        icon: serviceIcon1, // 路徑替換為你的圖標路徑
        title: '公司環境&照片',
        description: 'description...',
        path: '/company', // 這裡指定導航的路徑

      },
      {
        icon: serviceIcon2, // 路徑替換為你的圖標路徑
        title: '品牌故事',
        description: [
          ' 機器學習建模服務',
          '市場探索並建構金融模型',
          '客製化服務'
        ],

        path: '/brandstory', // 這裡指定導航的路徑

      },
      {
        icon: serviceIcon3, // 路徑替換為你的圖標路徑
        title: '為何選擇白樹',
        description: [
          '顧客信任',
          '創新研發',
          '誠信正直',
          '互信互惠'
        ],

      },
      
      // ...其他服務項目...
    ];
  
    return (
      <section className="AboutOur">
        <div className="AboutOurList">
          {services.map((service, index) => (
            <AboutOurItem key={index} {...service} />
          ))}
        </div>
      </section>
    );
  }
  
  export default AboutOur;