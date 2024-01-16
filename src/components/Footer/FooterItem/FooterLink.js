// src/components/Footer/FooterItem/FooterLinks.js

import React, { useState } from 'react';
import Model from '../../Model/Model';
import './FooterLink.css'; // Ensure you have the CSS to style the buttons as links

const FooterLinks = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleLinkClick = (content, event) => {
    event.preventDefault(); // Prevent default link behavior
    setModalContent(content);
    setModalVisible(true);
  };


  return (
    <>
        <Model
            isVisible={isModalVisible}
            content={modalContent}
            onClose={() => setModalVisible(false)}
            />
        <div className="footer-links">
            <ul>
                <li><a href='!#' onClick={(e) => handleLinkClick('這是關於條款聲明的信息。', e)}>條款聲明</a></li>
                <li><a href='!#' onClick={(e) => handleLinkClick('這是關於隱私權政策的信息。', e)}>隱私權政策</a></li>
                <li><a href='!#' onClick={(e) => handleLinkClick('這是關於防詐騙提醒的信息。', e)}>防詐騙提醒</a></li>
                <li><a href='!#' onClick={(e) => handleLinkClick('這是關於公司環境的信息。', e)}>公司環境</a></li>
                {/* 更多連結可以繼續添加 */}

            </ul>
        </div>
    </>
    );
};

export default FooterLinks;
