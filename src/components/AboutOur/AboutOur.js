import React from 'react';
import './AboutOur.css';
import serviceIcon from '../../pictures/意願確認1.png'; 
import { useNavigate } from 'react-router-dom';


function AboutOurItem({ icon, title, description, path }) {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(path); // 使用導航函數來改變路徑
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
            <button className="readMore" onClick={handleClick}>Read More</button>
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
        icon: serviceIcon, // 路徑替換為你的圖標路徑
        title: '公司環境&照片',
        description: 'description...',
        path: '/company', // 這裡指定導航的路徑

      },
      {
        icon: serviceIcon, // 路徑替換為你的圖標路徑
        title: '品牌故事',
        description: '我們專注於研究機器學習及資料科學領域之應用。目前金融相關市場蓬勃發展，我們透過深入研究行為模式及對資料的剖析來構築分析模型。本團隊期望利用機器學習技術提供多元的金融科技服務。'+
        '未來，本公司致力於運用人工智慧技術，以提供更為精準與客製化服務，滿足客戶需求。',
        path: '/company', // 這裡指定導航的路徑

      },
      {
        icon: serviceIcon, // 路徑替換為你的圖標路徑
        title: '為何選擇白樹',
        description: [
          '顧客信任 (與上市公司合作，重視服務信任)',
          '創新研發 (持續學習與跳脫現狀，努力提供更完善服務)',
          '誠信正直 (守信與注重客戶隱私)',
          '互信互惠 (以共享與負責態度，建立良好合作關係)'
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