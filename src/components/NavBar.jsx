import React from 'react';
import './CSS Files/NavBar.css'; 
import profile from '../assets/Prof.png'

function NavBar({ logo }) {
  return (
    <div className="navbar">
      <div className="nav-section1">
        <NavItem name="Home" />
        <NavItem name="Novels" />
        <NavItem name="Notes" />
        <NavItem name="Templates" />
      </div>
      <div className="logo">
        <img src={logo} alt="Writeo" style={{ height: '50px' }} />
      </div>
      <div className="nav-section2">
        <NavItem name="Word War/Sprint" />
        <NavItem name="Forum" />
        <NavItem name="Blog" />
      
            <div className="profile">
                <span>Hi <br />Arham</span>
                <img src={profile} alt="Profile" />
            </div>
      </div>
    </div>
  );
}

function NavItem({ name }) {
  return <div className="nav-item">{name}</div>;
}

export default NavBar;
