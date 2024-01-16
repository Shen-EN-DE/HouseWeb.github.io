import React from 'react';
import './SocialLinks.css'; // 創建對應的 CSS 文件
import FacebookIcon from '../../../pictures/facebook-hover.svg'; 
import LineIcon from '../../../pictures/line-hover.svg'; 


const SocialLinks = () => {
  return (
    <div className="social-links">
      {/* 替換下面的 # 為您社交媒體的連結 */}
      
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img src={FacebookIcon} alt="Facebook" /> </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> <img src={LineIcon} alt="Line" /></a>
      {/* 添加更多社交媒體連結 */}
    </div>
  );
};

export default SocialLinks;
