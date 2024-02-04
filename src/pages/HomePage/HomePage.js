import React, { Component } from 'react';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import AboutOur from '../../components/AboutOur/AboutOur';
// import backgroundImage from '../../pictures/首頁.jpg'; // 引入圖片
import './HomePage.css';



class HomePage extends Component {
  render() {

    // 使用行內樣式直接設定背景圖片和大小
    // const headerStyle = {
    //   backgroundImage: `url(${backgroundImage})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center center',
    // };

    return (
      <div className="homePage">
        {/* <header className="homeHeader" style={headerStyle}> */}
        <header className="homeHeader">
          <div className="overlay"></div> {/* 遮罩層 */}
          <h1>白樹金融科技</h1>
          <p className="white-text">Financial Consulting. Let Us Do The Math.</p>
        </header>
        <div className="middleText"> {/* 新增中間文字 */}
          <h1>為何選擇白樹金融科技</h1>
          <p>專業金融咨詢服務，讓專業來做數學。</p>
          
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