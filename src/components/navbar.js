import React, { useState} from "react";
import './navbar.css';
import image from './image/logo1.jpg';
import contact from './image/contactme.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [showMenu , setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src ={image} alt ="logo"  className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-80} duration = {500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-55} duration = {500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-55} duration = {500} className="desktopMenuListItem">Tech Stack</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-55} duration = {500} className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contact} alt = "contact" className="desktopMenuIMG" /> Contact Me 
            </button>

            <img src ={image} alt ="logo"  className="moblogo" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-70} duration = {500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration = {500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-70} duration = {500} className="ListItem" onClick={()=>setShowMenu(false)}>Tech Stack</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration = {500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration = {500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar