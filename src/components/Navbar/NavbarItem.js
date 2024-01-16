import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavItem.css'; // 你需要創建一個對應的 CSS 文件

const NavItem = ({ to, imgSrc, altText, label }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to}>
        {imgSrc && <img src={imgSrc} alt={altText} className="nav-icon" />} {label}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default NavItem;
