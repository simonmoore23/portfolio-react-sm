import React from "react";
import './navbar.css';
import logo from '../../assets/Logo_SM_2.png';
import contactImg from '../../assets/gmail.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="menu">
           <Link className='menuList'>Home</Link>
           <Link className='menuList'>About</Link>
           <Link className='menuList'>Portfolio</Link>
           <Link className='menuList'>Resume</Link>
        </div>
        <button className="contactBtn">
            <img src={contactImg} alt="" className="contactImg"/>Contact Me</button>
    </nav>
    )
}

export default Navbar;