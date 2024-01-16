import React from 'react';
import './ServiceSection.css';
import serviceIcon from '../../pictures/Customer Support.png'; 

function ServiceItem({ icon, title, description }) {
    return (
        <div className="serviceItem">
          <div className="serviceGraphic">
            <img src={icon} alt={title} className="serviceIcon" />
          </div>
          <div className="serviceInfo">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="readMore">Read More</button>
          </div>
        </div>
      );
  }

  function ServiceSection() {
    const services = [
      {
        icon: serviceIcon, // 路徑替換為你的圖標路徑
        title: 'Service Name',
        description: 'Service description...',
      },
      // ...其他服務項目...
    ];
  
    return (
      <section className="serviceSection">
        <div className="servicesList">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </section>
    );
  }
  
  export default ServiceSection;