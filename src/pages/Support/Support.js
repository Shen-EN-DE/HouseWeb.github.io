import React, { useState } from 'react';
import './Support.css';

const FAQItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={toggleIsActive}>
      <h3 className="faq-question">{question}</h3>
      <p className={`faq-answer ${isActive ? 'show' : ''}`}>{answer}</p>
    </div>
  );
};

const Support = () => {
  const faqData = [
    { question: 'Q：二順位抵押房屋貸款申請資格?', answer: '年紀20-70歲，名下有房即可申辦房屋貸款。檢附文件：土地與建物權狀或謄本、房子貸款最近一年繳款明細，有助申貸通過二順位貸款。' },
    { question: 'Q：二順位房貸利率多少?', answer: '依申請人的條件評分專案，核准後專員 告會知二順位貸款利息及房屋二貸月付金，同意再對保。' },
    // 在此處添加更多 FAQ 項目...
  ];

  return (
    <div className="support-container">
      <h1 className="support-title">支援中心</h1>
      <input type="text" placeholder="搜索問題..." className="support-search" />
      <div className="support-content">
        <h2>常見問題</h2>
        <div className="faq-section">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <h2>聯繫我們</h2>
      <p>如果您找不到問題的答案，請聯繫我們。</p>
      <div className="contact-section">
        <form>
          <input type="text" placeholder="你的名字" required />
          <input type="email" placeholder="你的郵箱" required />
          <input type="phone" placeholder="你的電話" required />
          <textarea placeholder="你的問題" rows="4" required></textarea>
          <button type="submit" className="submit-button">發送消息</button>
        </form>
      </div>
    </div>
  );
};

export default Support;
