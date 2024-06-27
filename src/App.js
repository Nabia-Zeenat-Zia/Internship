import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import NavBar from './components/NavBarMobile.jsx';
import Footer from './components/Footer.jsx';
import logo from './assets/Log.png'; 

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import AboutUs from './pages/AboutUs.jsx';
// import AboutUsMobile from './pages/AboutUsMobile';


library.add(fab); 

function App() {
  return (
    <div className="App">
     
      {/* <NavBar logo={logo} /> */}
      <NavBar logo={logo} />
      <div className="content">
        <AboutUs />
        {/* <AboutUsMobile /> */}
      </div>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
