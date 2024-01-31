import React, { useState } from 'react';
import './BrandStory.css'; // 確保這個CSS包含所有需要的樣式

const contentData = {
  我們的使命: "我們期望成為金融科技領域的領先者，為客戶提供更智慧、更便捷的金融科技 服務。",
  核心價值: [
    "提供文件 - 土地權狀、聯徵紀錄、其他有利審查之資料(薪資單等)",
    "審查評估資料 - 審查資格與抵押品估價",
    "申請書填寫 - 填寫貸款申請書",
    "協商條件 - 確認貸款額度以及利率條件",
    "設定質押 - 前往地政辦理質押",
    "專戶撥款 - 撥款至戶頭"
  ],
  我們的願景: "期待在未來，本公司能夠持續以人工智慧技術為核心創造更多價值。",
  品牌故事: "我們是致力於機器學習及資料科學在商業金融領域的青創團隊。透過深入研究行為模式和精密的資料剖析並構築分析模型"+
  "，本團隊期望利用機器學習技術提供多元的金融科技服務。 我們期望成為金融科技領域的領先者，為客戶提供更"+
  "智慧、更便捷的金融科技 服務。期待在未來，本公司能夠持續以人工智慧技術為核心創造更多價值。"
};

const BrandStory = () => {
  const [activeContent, setActiveContent] = useState('我們的使命'); // 預設載入時顯示的是'我們的使命'

  // 這個函數更新激活的按鈕樣式
  const setActiveButtonClass = (contentName) => {
      return activeContent === contentName ? 'active-btn' : '';
      };

  const renderContent = () => {
    if (activeContent === '核心價值') {
      return (
        <div className="company-description">
          {contentData.核心價值.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      );
    }

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
