import React from 'react'
import './testimonials.css'
import Carousel from 'react-bootstrap/Carousel';
import {GiBookshelf}from 'react-icons/gi'

const Testimonials = () => {
  return (
    <>
    <div>
     <section className=' testimonials'>
     <h5>My Hobbies &</h5>
      <h2>My Interests</h2>
     <div className=' container testimonials__container'>
      <div className='testimonials__blogs'>
        <a href='https://mail.google.com/mail/u/0/#inbox' className='testimonials__text1'>My Blogs. Do check it out ;)</a>
        <p>Wrirting blogs as a passionate writer was never my cup of tea, until I encountered something. My memories may fade with time but I wanted to keep things or events alive that are important to me,so that I can relive them again every now and then. Its all worth it when I read them, i'm living in th exact same moment.</p>
      <a href="https://www.facebook.com"  target='_blank'>
      <GiBookshelf/>
      My Blogs</a>
      </div>
      <div className='testimonials__hobby'>
        <li className='testimonials__text'>Hobbies</li>
        <li className='testimonials__text'>Oil Painting</li>
        <li className='testimonials__text'>Reading</li>
        <li className='testimonials__text'>Badminton</li>
      </div>
     </div>
     </section>
    </div>
    </>
  )
}

export default Testimonials