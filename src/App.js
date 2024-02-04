import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactUsButton from './components/ContactUsButton/ContactUsButton';


import SecondMortgagePage from './pages/ServiceItem/SecondMortgagePage/SecondMortgagePage';
import DataFinTech from './pages/ServiceItem/DataFinTech/DataFinTech';
import LoanConsuit from './pages/ServiceItem/LoanConsuit/LoanConsuit';
import ESGtech from './pages/ServiceItem/ESGtech/ESGtech';

import Support from './pages/Support/Support';
import MyCompany from './pages/MyCompany/MyCompany';
import BrandStory from './pages/BrandStory/BrandStory';

import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className='main-container'>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SecondMortgagePage" element={<SecondMortgagePage />} />
            <Route path="/DataFinTech" element={<DataFinTech />} />
            <Route path="/LoanConsuit" element={<LoanConsuit />} />
            <Route path="/ESGtech" element={<ESGtech />} />

            <Route path="/support-center" element={<Support />} /> 
            <Route path="/company" element={<MyCompany />} /> 
            <Route path="/BrandStory" element={<BrandStory />} /> 

            <Route path="/contact-us" element={<Contact />} /> 
            <Route path="/contact-us" element={<Contact />} /> 
            {/* 確保你為每個頁面配置了相對應的路由 */}
            {/* 例如: */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </div>
        <Footer />
        <ContactUsButton /> {/* 这将在每个页面上显示联系我们按钮 */}

      </div>
    </Router>
  );
}

export default App;
