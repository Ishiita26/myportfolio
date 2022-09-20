import React from 'react';
import './header.css'; 
import ME from '../../assets/ishi.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <>
    <div>
    <header>
     <div className='container header__container'>
     <div className='header__heading'>
     <h5 className='font_header'>Hello I'm</h5>
     <h2 className='font_header1'>Ishita Verma</h2>
     <h5 className='text-light'>CSE Undergrad</h5>
     </div>
     <div className='me'>
     <img src={ME} className='img' alt="mjhghhje" />
     </div>

     <a href='#contact' className='scroll__down'>Scroll Down</a>
     </div>
     <HeaderSocials/>
    </header>
    </div>
    </>
  )
}

export default Header
