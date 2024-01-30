import React, { useState } from 'react';
import './BrandStory.css'; // 確保這個CSS包含所有需要的樣式

const contentData = {
  我們的使命: "這裡是關於我們的使命的內容...",
  核心價值: "這裡是關於我們的核心價值的內容...",
  我們的願景: "這裡是關於我們的願景的內容...",
  品牌故事: "這裡是關於我們的品牌故事的內容..."
};

const BrandStory = () => {
  const [activeContent, setActiveContent] = useState('我們的使命'); // 預設載入時顯示的是'我們的使命'

  // 這個函數更新激活的按鈕樣式
  const setActiveButtonClass = (contentName) => {
      return activeContent === contentName ? 'active-btn' : '';
      };

  const renderContent = () => {
    switch (activeContent) {
      case '我們的使命':
        return <p className="company-description">{contentData.我們的使命}</p>;
      case '核心價值':
        return <p className="company-description">{contentData.核心價值}</p>;
      case '我們的願景':
        return <p className="company-description">{contentData.我們的願景}</p>;
      case '品牌故事':
        return <p className="company-description">{contentData.品牌故事}</p>;
      default:
        return <p className="company-description">內容選擇錯誤。</p>;
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
        <h1 className="company-title">{activeContent === 'story' ? '品牌故事' : activeContent}</h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default BrandStory;
