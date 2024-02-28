import React from 'react';
import { Link } from 'react-router-dom';  // 確保您已經安裝並設定了 React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css'

import logo from '../../pictures/首頁2.jpg'; // Update the path to where your logo is



const Navbar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <div className="container">
                <BootstrapNavbar.Brand as={Link} to="/">
                    <div className="logo-container">
                        <img
                            src={logo}
                            width="80" // set the width of your logo
                            height="80" // set the height of your logo
                            alt="White Tree Financial Technology logo"
                        />
                        <span className="navbar-brand-text">白樹金融科技</span>
                    </div>
                </BootstrapNavbar.Brand>

                {/* <BootstrapNavbar.Brand as={Link} to="/">首頁</BootstrapNavbar.Brand> */}
                <BootstrapNavbar.Toggle aria-controls="navbarNav" />
                <BootstrapNavbar.Collapse id="navbarNav">
                    <Nav className="mr-auto">
                        <NavDropdown title="服務項目" id="servicesDropdown">
                            <NavDropdown.Item as={Link} to="/DataFinTech"> 大數據FinTech</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/SecondMortgagePage"> 二順位貸款</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/LoanConsuit"> 碳管理平台</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ESGtech"> 綠色金融科技</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link as={Link} to="/support-center">支援中心</Nav.Link>
                        <NavDropdown title="關於我們" id="AboutDropdown">
                            <NavDropdown.Item as={Link} to="/company"> 公司環境</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/BrandStory"> 品牌故事</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link as={Link} to="/contact-us">聯絡我們</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </div>
        </BootstrapNavbar>

    );
}

export default Navbar;