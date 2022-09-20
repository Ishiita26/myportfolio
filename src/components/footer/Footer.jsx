import React from 'react'
import './footer.css'
import {SiCodechef} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'

const Footer = () => {
  return (
    <>
    <div>
      <footer>
      
      <h2>Coding Profiles</h2>
      <div className='footer__socials'>
        <a href='https://www.codechef.com/users/ishitaverma26' target='_blank'><SiCodechef/></a>
        <a href='https://auth.geeksforgeeks.org/user/ishitaverma11/profile' target='_blank'><SiGeeksforgeeks/></a>
      </div>
      <a href='#' className='footer__logo'></a>
      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__copyright'>&copy; Portfolio. All right reserved</div>
      </footer>
    </div>
    </>
  )
}

export default Footer