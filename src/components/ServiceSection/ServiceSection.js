import React from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ServiceSection.css';
import slick1 from '../../pictures/slick1.jpg';
import slick2 from '../../pictures/slick2.jpg';
import slick3 from '../../pictures/slick3.jpg';


const SlideItem = ({ icon, title, description, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="image-slider__slider-slide">
      <img src={icon} alt={title} className="lazyload" />
      <div className="image-slider__slider-slide-content">
        <button className="button button--primary-spring" onClick={handleClick}>
          <span className="button__text button__text--primary-spring">Learn More</span>
        </button>
        <div className="image-slider__slider-slide-text-wrapper">
          <h4 className="image-slider__slider-slide-content-title">{title}</h4>
          <div className="image-slider__slider-slide-content-text">{description}</div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: slick1,
      title: '大數據FinTech',
      description: '大數據FinTech服務描述...',
      path: '/DataFinTech', // 路徑對應到導航條中的路徑

    },
    {
      icon: slick2,
      title: '二順位貸款',
      description: '二順位貸款服務描述...',
      path: '/SecondMortgagePage',
    
    },
    {
      icon: slick3,
      title: '銀行貸款諮詢業務',
      description: '銀行貸款諮詢業務描述...',
      path: '/LoanConsuit',
    
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