import React, { Component } from 'react';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import AboutOur from '../../components/AboutOur/AboutOur';
import './HomePage.css';



class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <header className="homeHeader">
          <h1>白樹金融科技</h1>
          <p>Financial Consulting. Let Us Do The Math.</p>
        </header>
        <ServiceSection />
        <AboutOur />
        {/* <ClientsSection />
        <ArticlesSection /> */}
        {/* Footer would go here */}
      </div>
    );
  }
}

export default HomePage;