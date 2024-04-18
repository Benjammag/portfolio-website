import React from 'react';
import { VscMenu, VscClose } from "react-icons/vsc";
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import MobileNav from './MobileNav';
import "./Navbar.css";

export default function Navbar() {
 const [openMenu, setOpenMenu] = useState(false);

 const toggleMenu = () => {
  setOpenMenu(!openMenu);
 };

 return (
  <>
  <BrowserRouter>
  <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
   <nav className="nav-wrapper">
    <div className="nav-content">
     <div className="logo">
      <h1 className="title">Benjamin Agbetuyi</h1>
     </div>
     <ul>
      <li>
       <Link to="" className="menu-item" smooth>Home</Link>
      </li>
      <li>
       <Link to="#skills" className="menu-item" smooth>Skills</Link>
      </li>
      <li>
       <Link to="#experience" className="menu-item" smooth>Experience</Link>
      </li>
      <li>
       <Link to="#contact-me" className="menu-item" smooth>Contact Me</Link>
      </li>

      <Link id=""><button className="contact-btn" onClick={()=> {}}>Hire Me</button></Link>
     </ul>

     <button class="menu-btn" onClick={toggleMenu}>
      <span
       class={"material-symbols-outlined"}
       style={{fontSize:"1.8rem"}}
      >
       {openMenu ? <VscClose /> : <VscMenu />}
      </span>
     </button>
    </div>
   </nav>
   </BrowserRouter>
  </>
 )
}