import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import '../index.css';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center sticky top-0 z-20 bg-primary`}>
      <div className = 'w-full flex justify-between items-center'>
        <Link 
        to="/" 
        className="flex flex-row items-center px-2"
        onClick = {()=>{
          setActive("");
          window.scrollTo(0,0)}}>
        <img src={logo}  alt = "logo" className="w-9 h-9 object-contain px-2" style = {{width:'170px', height:'170px'}}/>
            
        <p className="text-white text-[14px] font-bold cursor-pointer">Soham <br></br><span className="sm:block hidden">| Ideas to Innovations </span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
            key={link.id}
            className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick = {()=>{setActive(link.title)}}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src = {toggle ? close : menu} alt = "menu"
          className="w-10 h-10 object-contain cursor-pointer"
          onClick={()=> {setToggle(!toggle)}}/>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link) => (
                  <li 
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick = {()=>{
                    setToggle(!toggle)
                    setActive(link.title)}}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
          
    </nav>
    
  );
};

export default Navbar;