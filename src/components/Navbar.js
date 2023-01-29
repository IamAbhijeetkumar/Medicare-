import React, { useState } from 'react';

const Navbar = () => {
 
    const [showmenu , setShowmenu] = useState(false);
    return (
        <div>
            <nav className='Navbar'>
                <div className='logo'>
                    <h1>Medi<span>Care+</span></h1>
                </div>
                <div className={showmenu ? "mobile-menu menu-list":"mobile-menu"}>
                    <ul>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/service'>Service</a></li>
                        <li><a href='/news'>News</a></li>
                    </ul>
                </div>
                <button className={showmenu ? "button btn5":"btn5"}>Contact</button>
                <div onClick={()=> setShowmenu(!showmenu)} className='burger'>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className='Oval'></div>
                <div className='Rectangle'></div>
                <div className='Welcome-Message'>
                    <h5>Welcome to MediCare+ Clinic</h5>
                    <h1>Best Specialists</h1>
                    <h6>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</h6>
                    <button className='button1'>Make an Appointment</button>
                    <button className='button2'>Departments</button>
                </div>


            </nav>
        </div>
    )
}

export default Navbar
