import React, { Component } from 'react';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import AboutOur from '../../components/AboutOur/AboutOur';
// import backgroundImage from '../../pictures/首頁.jpg'; // 引入圖片
import './HomePage.css';
import banner from '../../pictures/WT/首頁icon/banner.gif'



class HomePage extends Component {
  render() {

    return (
      <div className="homePage">
        {/* <header className="homeHeader" style={headerStyle}> */}
        <header className="homeHeader">
          {/* <img src={banner} alt="首頁" className='homeHeader'/> */}
          <div className="overlay"></div> {/* 遮罩層 */}
          <img src={banner} alt="Banner" className="bannerImg"/> {/* 新增banner图片 */}

        </header>
        <div className="middleText"> {/* 新增中間文字 */}
          <h1>我們的理念</h1>
          <p>專業金融資訊服務，讓專業來做數學。</p>
          
        </div>


        <ServiceSection />
        <AboutOur />
        {/* <ClientsSection />
        <ArticlesSection /> */}
        {/* Footer would go here */}
      </div>
    );
  }
}

export default HomePage;