import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SecondMortgagePage from './pages/SecondMortgagePage/SecondMortgagePage';
import DataFinTech from './pages/DataFinTech/DataFinTech';
import LoanConsuit from './pages/LoanConsuit/LoanConsuit';

import Support from './pages/Support/Support';
import MyCompany from './pages/MyCompany/MyCompany';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SecondMortgagePage" element={<SecondMortgagePage />} />
          <Route path="/DataFinTech" element={<DataFinTech />} />
          <Route path="/LoanConsuit" element={<LoanConsuit />} />
          <Route path="/support-center" element={<Support />} /> 
          <Route path="/company" element={<MyCompany />} /> 
          <Route path="/contact-us" element={<Contact />} /> 



          {/* 確保你為每個頁面配置了相對應的路由 */}
          {/* 例如: */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
