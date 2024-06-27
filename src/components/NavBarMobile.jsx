import React, { useState }  from 'react';
import './CSS Files/NavBarMobile.css'
import profile from '../assets/Prof.png'; 
import logo from '../assets/Log.png'; 

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    return (
    <div className="navbar-container">
         <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
      <nav className="navbar">
       
        <ul className="navbar-items">
          <li className="navbar-item">
            Home
          </li>
          <li className="navbar-item">
          Novels
          </li>
          <li className="navbar-item">
          Notes
            <i className="fas fa-caret-down dropdown-icon" onClick={toggleDropdown}></i>
            {dropdownVisible && (
              <ul className="dropdown">
                {/* <li className="dropdown-item"></li> */}
                <li className="dropdown-item">Templates</li>
                <li className="dropdown-item">Word War/Sprint</li>
                <li className="dropdown-item">Forum</li>
                <li className="dropdown-item">Blog</li>
                
              </ul>
            )}
          </li>
        </ul>
        <div className="profile">
          <span>Hi <br />Arham</span>
          <img src={profile} alt="Profile" />
        </div>
      </nav>
      </div>
    );
  };
  
  export default Navbar;
