// Model.js
import React from 'react';
import './Model.css';

const Model = ({ isVisible, content, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="model-overlay" onClick={onClose}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        {content}  
        <button className="model-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Model;
