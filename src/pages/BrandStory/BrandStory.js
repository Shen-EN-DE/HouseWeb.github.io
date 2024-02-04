import React, { useState } from 'react';
import './BrandStory.css'; // 确保这个CSS包含所有需要的样式

import MissionImage from '../../pictures/WT/首頁icon/品牌故事/我們的品牌故事.jpg';
import ValuesImage from '../../pictures/WT/首頁icon/品牌故事/核心價值.jpg';
import VisionImage from '../../pictures/WT/首頁icon/品牌故事/我們的願景.jpg';
import StoryImage from '../../pictures/WT/首頁icon/品牌故事/品牌故事.jpg';

const BrandStory = () => {
  const [activeContent, setActiveContent] = useState('我們的使命'); // 默认载入时显示的是'我们的使命'

  // 这个函数更新激活的按钮样式
  const setActiveButtonClass = (contentName) => {
    return activeContent === contentName ? 'active-btn' : '';
  };

  // 渲染内容的函数
  const renderContent = () => {
    switch (activeContent) {
      case '我們的使命':
        return <img src={MissionImage} alt="我們的使命" className="content-image" />;
      case '核心價值':
        return <img src={ValuesImage} alt="核心價值" className="content-image" />;
      case '我們的願景':
        return <img src={VisionImage} alt="我們的願景" className="content-image" />;
      case '品牌故事':
        return <img src={StoryImage} alt="品牌故事" className="content-image" />;
      default:
        return <p>内容选择错误。</p>;
    }
  };

  return (
    <div className="company-container">
      <div className="sidebar">
        <button className={setActiveButtonClass('我們的使命')} onClick={() => setActiveContent('我們的使命')}>我們的使命</button>
        <button className={setActiveButtonClass('核心價值')} onClick={() => setActiveContent('核心價值')}>核心價值</button>
        <button className={setActiveButtonClass('我們的願景')} onClick={() => setActiveContent('我們的願景')}>我們的願景</button>
        <button className={setActiveButtonClass('品牌故事')} onClick={() => setActiveContent('品牌故事')}>品牌故事</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default BrandStory;
