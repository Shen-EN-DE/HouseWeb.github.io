import React from 'react';
import './Contact.css'; // 假設你會有一個專門的CSS檔案

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">聯絡我們</h1>
      <form className="contact-form">
        {/* 假設每個Field是一個包含標籤、輸入框的組件 */}
        <Field label="姓名：" type="text" placeholder="請輸入您的姓名" />
        <Field label="電郵：" type="email" placeholder="請輸入您的電郵" />
        <Field label="電話：" type="phone" placeholder="請輸入您的電話" />
        <Field label="信息：" type="textarea" placeholder="請輸入您想要傳達的信息" />
        <button type="submit" className="submit-button">發送信息</button>
      </form>
    </div>
  );
};

const Field = ({ label, type, placeholder }) => {
  return (
    <div className="field-container">
      <label className="field-label">{label}</label>
      {type === "textarea" ? (
        <textarea className="text-input" placeholder={placeholder}></textarea>
      ) : (
        <input type={type} className="text-input" placeholder={placeholder} />
      )}
    </div>
  );
};

export default Contact;
