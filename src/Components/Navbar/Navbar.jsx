import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import './Navbar.css';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className="nav-response" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
            </div>

            <div className={nav ? 'logo dark' : 'logo'}>
                <img src="https://cdn.copymatic.ai/static/logo.svg" alt="copymatic" />
            </div>

            <ul className="nav-menu">
                <li><span>How it works</span></li>
                <li><span>Use Cases</span></li>
                <li><span>Features</span></li>
                <li><span>Pricing</span></li>
            </ul>

            <ul>
                <li className='nav-login'><span>Login</span></li>
            </ul>

            <div className='nav-signup'>
                <button className='signup'>Start Free Trial</button>
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li><span>How it works</span></li>
                    <li><span>Use Cases</span></li>
                    <li><span>Features</span></li>
                    <li><span>Pricing</span></li>
                    <li><span>Login</span></li>
                </ul>

            </div>

        </div>
    )
};

export default Navbar;