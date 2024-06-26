import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer.jsx';
import logo from './assets/Log.png'; 

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import AboutUs from './pages/AboutUs.jsx';



library.add(fab); 

function App() {
  return (
    <div className="App">
     
      <NavBar logo={logo} />
      <div className="content">
        <AboutUs />
      </div>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
