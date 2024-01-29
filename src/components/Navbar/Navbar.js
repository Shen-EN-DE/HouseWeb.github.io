import React from 'react';
import { Link } from 'react-router-dom';  // 確保您已經安裝並設定了 React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css'
import HouseIcon from '../../pictures/二順位貸款/二順位貸款1.png'; 
import CarIcon from '../../pictures/WT/首頁icon/銀行貸款諮詢服務/銀行貸款諮詢服務1.png'; 
import OtherIcon from '../../pictures/WT/首頁icon/大數據服務/大數據服務2.png'; 



const Navbar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <div className="container">
                <BootstrapNavbar.Brand as={Link} to="/">首頁</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbarNav" />
                <BootstrapNavbar.Collapse id="navbarNav">
                    <Nav className="mr-auto">
                        <NavDropdown title="服務項目" id="servicesDropdown">
                            <NavDropdown.Item as={Link} to="/DataFinTech"><img src= {OtherIcon} alt="DataFinTech" /> 大數據FinTech</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/SecondMortgagePage"><img src= {HouseIcon} alt="SecondMartgage" /> 二順位貸款</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/LoanConsuit"><img src= {CarIcon} alt="LoanConsuit" /> 銀行貸款諮詢業務</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/support-center">支援中心</Nav.Link>
                        <Nav.Link as={Link} to="/company">公司環境</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us">聯絡我們</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </div>
        </BootstrapNavbar>

    );
}

export default Navbar;