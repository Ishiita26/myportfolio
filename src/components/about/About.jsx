import React from "react";
import './about.css';
import ME from '../../assets/me.jpeg'
import {AiFillBank} from 'react-icons/ai'

const About = () => {
  return (
    <>
    
      <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div  className="about__me">
      <div className="about__me-image">
        <img src={ME}/>
      </div>
      </div>


      <div className="about__content">
           <div className="about__cards">
             <article className="about__card">
                   <AiFillBank className="about__icon"/> 
                   <h5>High School</h5>
                   <small>PVK Kirandul</small>
             </article>

      <article className="about__card">
      <AiFillBank className="about__icon"/> 
        <h5>Higher Secondary</h5>
        <small>SVS Raipur</small>
      </article>

      <article className="about__card">
      <AiFillBank className="about__icon"/> 
        <h5>College</h5>
        <small>SSIPMT Raipur</small>
       </article>
      </div>
      <p className="para">I'm Ishita Verma born and brought up in Raipur itself. Currently I'm pursuing my B.Tech degree in Computer Science Engineering from Shri Shankaracharya Institute of Professional Management and Technology Raipur with an aggregate of 84%.</p>
      <a href="#contact" className="btn ">Lets Talk</a>
      </div>
      </div>
      </section>
    
    </>
  )
}

export default About