import React from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ServiceSection.css';
import slick1 from '../../pictures/WT/首頁icon/大數據服務/大數據服務2.png';
import slick2 from '../../pictures/WT/首頁icon/二順位貸款/二順位貸款3.png';
import slick3 from '../../pictures/WT/首頁icon/銀行貸款諮詢服務/銀行貸款諮詢服務4.png';
import slick4 from '../../pictures/WT/首頁icon/銀行貸款諮詢服務/銀行貸款諮詢服務1.png';


const SlideItem = ({ icon, title, description, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="image-slider__slider-slide">
      <img src={icon} alt={title} className="lazyload" />
      <div className="image-slider__slider-slide-content">
        <div className="image-slider__slider-slide-text-wrapper">
          <h4 className="image-slider__slider-slide-content-title">{title}</h4>
          <div className="image-slider__slider-slide-content-text">{description}</div>
        </div>
        <button className="button button--primary-spring" onClick={handleClick}>
          <span className="button__text button__text--primary-spring">Learn More</span>
        </button>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: slick1,
      title: '大數據FinTech',
      description: '本公司利用人工智慧(Artificial Intelligence)技術來為國外中小型企業提供服務',
      path: '/DataFinTech', // 路徑對應到導航條中的路徑

    },
    {
      icon: slick2,
      title: '二順位貸款',
      description: '金融機構也可以導入ChatGPT和生成式AI，協助客戶調整投資布局策略。',
      path: '/SecondMortgagePage',
    
    },
    {
      icon: slick3,
      title: '碳管理平台',
      description: '碳管理平台描述...',
      path: '/LoanConsuit',
    
    },
    {
      icon: slick4,
      title: '綠色金融數據',
      description: '綠色金融數據描述...',
      path: '/ESGtech',
    
    },
    // ...更多服务...
  ];

  const settings = {
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    autoplay: true, // 啟用自動輪播
    autoplaySpeed: 5000, // 設置為1000毫秒（即每秒輪播一次）
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
    // 確保slick dots可見
    dots: true,
    dotsClass: 'slick-dots', // 這是默認值，但保持它在這裡以防需要自定義
  };

  return (
    <section className="image-slider">
      <Slider {...settings}>
        {services.map((service, index) => (
          <SlideItem key={index} {...service} />
        ))}
      </Slider>
    </section>
  );
}

export default ServiceSection;