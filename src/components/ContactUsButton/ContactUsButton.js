import React from 'react';
import './ContactUsButton.css'; // 确保引入了上面的CSS文件
import LineIcon from '../../pictures/line-hover.svg'; 


function ContactUsButton() {
  const handleClick = () => {
    // 这里可以放置跳转到Line或其他通讯软件的逻辑
    // 例如打开一个新的Line联系页面或是执行其他操作
    window.open('https://www.google.com.tw/?hl=zh_TW', '_blank'); // 替换为您的Line联系路径
  };

  return (
    <div className="contact-us-menu">
      <div className="contact-us-button" onClick={() => handleClick('https://line.me')}>
        <img src={LineIcon} alt="Line" />
        <span className="tooltip">聯絡我們</span>
      </div>
      {/* <div className="contact-us-button" onClick={() => handleClick('https://messenger.com')}>
        <img src={LineIcon} alt="Messenger" />
        <span className="tooltip">常見問題</span>
      </div> */}
      {/* 更多按钮 */}
    </div>
  );
}

export default ContactUsButton;
