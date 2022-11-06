import React from 'react';
import './Navbar.css';
import Logo from '../../img/logo1.png';
import {NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      
      
        <div className="n-left">
            <div className="logo">
            <img src={Logo} width="100px"></img>
            </div>
        </div>
        <div className="n-right">
          <div className="n-list">
          <ul>
          <NavLink to='/'> Home</NavLink>
          <NavLink to='/Servces'> services</NavLink>
          <NavLink to='/Experence'> Experience</NavLink>
          <NavLink to='/Hstory'> portofilo</NavLink>
          <NavLink to='/Meda'> meda</NavLink>
          </ul>
      </div>
      <NavLink to='/Contact'>     <button className="button npt">contact</button></NavLink>
  
        </div>
        
    </nav>
  )
}

export default Navbar