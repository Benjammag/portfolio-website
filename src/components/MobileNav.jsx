import React from 'react';
import './MobileNav.css';

function MobileNav({isOpen, toggleMenu}) {
  return (
    <>
    <div
     className={`mobile-menu ${isOpen ? "active" : ""}`}
     onClick={toggleMenu}>

      <div className={"mobile-menu-container"}>
       <h1 className="logo">Time to program</h1>

       <ul>
        <li>
         <a className="menu-item" href="#Hero">Home</a>
        </li>
        <li>
         <a className="menu-item" href="#Skills">Skills</a>
        </li>
        <li>
         <a className="menu-item">Projects</a>
        </li>
        <li>
         <a className="menu-item">Contact Me</a>
        </li>

        <button className="contact-btn" onClick={()=> {}}>Hire Me
        </button>
       </ul>
      </div>
    </div>
    </>
  )
}

export default MobileNav