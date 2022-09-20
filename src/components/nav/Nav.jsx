import React from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{BsFillBookmarkHeartFill} from 'react-icons/bs'
import{MdContacts} from 'react-icons/md'
import {SiAboutdotme} from 'react-icons/si'
import {useState} from 'react'

const Nav = () => {
  const[activeNav,setActiveNav]= useState('#')
  return (
    <>
    <nav>
      <a href="#" onClick={()=>
        setActiveNav('#')}
        className ={ activeNav ==='#' ? 'active' : ''
        }><SiAboutdotme/></a>

      <a href="#about" onClick={()=>
        setActiveNav('#about')}
        className ={ activeNav ==='#about' ? 'active' : ''
        }><AiOutlineHome/></a>

      <a href="#experience" onClick={()=>
        setActiveNav('#experience')}
        className ={ activeNav ==='#experience' ? 'active' : ''
        }><BiBook/></a>

      <a href="#portfolio" onClick={()=>
        setActiveNav('#portfolio')}
        className ={ activeNav ==='#portfolio' ? 'active' : ''
        }><BsFillBookmarkHeartFill/></a>

      <a href="#contact" onClick={()=>
        setActiveNav('#contact')}
        className ={ activeNav ==='#contact' ? 'active' : ''
        }><MdContacts/></a>
    </nav>
    </>
  )
}

export default Nav