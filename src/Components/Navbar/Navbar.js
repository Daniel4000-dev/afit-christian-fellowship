import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../photo/logo.png';
import { useState, useEffect } from 'react';
import { Menu } from '@material-ui/core';
import DropMenu from './DropMenu';


function Navbar() {
  const [color, setColor] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
    if (window.scrolY > 0) {
      setIsFixed(true);
      setIsHidden(true);
    } else {
      setIsFixed(false);
      setIsHidden(false);
    }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const {pathname} = useLocation();
  const nav =useRef(null);
  useEffect(() => {
    if (pathname === '/') {
      // nav.current.classList.remove(isHidden)
      nav.current.classList.add(isHidden ? 'hidden' : 'block')
      // nav.current.classList.remove(isFixed)
      nav.current.classList.add(isFixed ? 'sticky' : 'fixed')
      nav.current.classList.remove('bg-transparent');
      nav.current.classList.add(color ? 'bg-sky-700' : 'bg-transparent')
    } else if (pathname === '/about' || pathname === '/contact') {
      nav.current.classList.remove('bg-transparent');
      nav.current.classList.add('bg-sky-700');
      nav.current.classList.add('fixed', 'top-0')
    }
  }, [pathname, color])

     const Links = (
    <div className="flex items-center decoration-8 ml-8 b-sky-700:color">
        <ul className="flex">
          <li className=''>
            <Link className='text-sm font-montserrat font-bold text-white' to="/">Home</Link>
          </li>
          <li className=' ml-5'>
            <Link className='text-sm font-montserrat font-bold text-white' to="/about">About Us</Link>
          </li>
          <li className=' ml-5'>
            <Link className='text-sm font-montserrat font-bold text-white' to="/contact">Contact Us</Link>
          </li>
          <li className=' ml-5'>
            <DropMenu className='text-sm font-montserrat font-bold text-white' />
            {/* <Link className='text-sm font-montserrat font-bold text-white' to="/drop">hererere</Link> */}
          </li>
        </ul> 
    </div>
  );

  return (
    <nav ref={nav} className={`flex justify-center pt-3 pb-3 w-full h-35 z-50 transition-colors duration-300`}>
        <img
            src={logo}
            alt=""
            className="w-100% h-20 sm:h-10 md:h-10"
        />
        {Links}
        <Menu />
    </nav>
  )
}

export default Navbar