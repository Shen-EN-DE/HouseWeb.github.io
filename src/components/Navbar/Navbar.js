import React from 'react';
import { Link } from 'react-router-dom';  // 確保您已經安裝並設定了 React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css'
import HouseIcon from '../../pictures/房貸.png'; 
import CarIcon from '../../pictures/車貸.png'; 
import OtherIcon from '../../pictures/其他貸款.png'; 



const Navbar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <div className="container">
                <BootstrapNavbar.Brand as={Link} to="/">首頁</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbarNav" />
                <BootstrapNavbar.Collapse id="navbarNav">
                    <Nav className="mr-auto">
                        <NavDropdown title="服務項目" id="servicesDropdown">
                            <NavDropdown.Item as={Link} to="/service-1"><img src= {OtherIcon} alt="服務1" /> 服務1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/SecondMortgagePage"><img src= {HouseIcon} alt="SecondMartgage" /> 不動產二順位</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service-3"><img src= {CarIcon} alt="服務3" /> 服務3</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service-4"><img src= {OtherIcon} alt="服務4" /> 服務4</NavDropdown.Item>
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