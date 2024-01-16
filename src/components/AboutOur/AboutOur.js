import React from 'react';
import './AboutOur.css';
import serviceIcon from '../../pictures/意願確認1.png'; 

function AboutOurItem({ icon, title, description }) {
    return (
        <div className="AboutOurItem">
          <div className="AboutOurInfo">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="readMore">Read More</button>
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
        title: 'Our Team',
        description: 'Team description...',
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