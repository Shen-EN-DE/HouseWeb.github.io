import React from 'react';
import './Footer.css';
import ContactInfo from '../../components/Footer/FooterItem/ContractInfo';
import FooterLinks from '../../components/Footer/FooterItem/FooterLink';
import SocialLinks from '../../components/Footer/FooterItem/SocialLinks'; 

// import NavigationLinks from './NavigationLinks';
// import Copyright from './Copyright';

const Footer = () => {
    return (
        <footer className="site-footer">
          <div className="footer-container">
            <ContactInfo />
            <FooterLinks />
            <SocialLinks />
            {/* 版权信息，根据需要添加 */}
            <div className="copy-right-info">
              <p>© 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
};

export default Footer;
