// Support.js
import React, {useState} from 'react';
import './Support.css'; // 創建一個Support.css來定義專門的樣式


const FAQItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={toggleIsActive}>
      <h3 className="faq-question">{question}</h3>
      <p className="faq-answer">{answer}</p>
    </div>
  );
};


const Support = () => {
  return (
    <div className="support-container">
      <h1 className="support-title">支援中心</h1>
      <input type="text" placeholder="搜索問題..." className="support-search" />
      <div className="support-content">
        <h2>常見問題</h2>
        {/* <p>在這裡，你可以找到最常見問題的答案。</p> */}
          {/* FAQ 問答區域 */}
          <div className="faq-section">
            <table>
            <thead>
              <tr>
                <th>問題</th>
                <th>答案</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>如何開設帳戶？</td>
                <td>開設帳戶的步驟是...</td>
              </tr>
              <tr>
                <td>如何重置我的密碼？</td>
                <td>重置密碼可以通過...</td>
              </tr>
              {/* 更多的FAQ項目 */}
            </tbody>
          </table>
          </div>
      </div>
      <h2>聯繫我們</h2>
      <p>如果你找不到問題的答案，請聯繫我們。</p>
        {/* 聯繫表單區域 */}
      <div className="contact-section">
        <form>
          <input type="text" placeholder="你的名字" required />
          <input type="email" placeholder="你的郵箱" required />
          <textarea placeholder="你的問題" rows="4" required></textarea>
          <button type="submit" className="submit-button">發送消息</button>
        </form>
      </div>
      </div>
    );

  };
  export default Support;



