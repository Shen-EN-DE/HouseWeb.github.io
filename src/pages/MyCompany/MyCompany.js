// MyCompany.js
import React, {useState} from 'react';
import './MyCompany.css'; // 引入CSS檔案


const contentData = {
  關於我們: "這裡是關於我們的使命的內容...",

};

const MyCompany = () => {
  const [activeContent, setActiveContent] = useState('關於我們'); // 預設載入時顯示的是'我們的使命'

  // 這個函數更新激活的按鈕樣式
  const setActiveButtonClass = (contentName) => {
      return activeContent === contentName ? 'active-btn' : '';
      };

  const renderContent = () => {
    switch (activeContent) {
      case '關於我們':
        return <p className="company-description">{contentData.關於我們}</p>;
      default:
        return <p className="company-description">內容選擇錯誤。</p>;
    }
  };

  return (
    <div className="company-container">
      <div className="sidebar">
        <button className={setActiveButtonClass('關於我們')} onClick={() => setActiveContent('關於我們')}>關於我們</button>
      </div>
      <div className="content">
        <h1 className="company-title">{activeContent === 'story' ? '品牌故事' : activeContent}</h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default MyCompany;
