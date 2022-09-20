import React from "react";
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <div>
      <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
      <MdOutlineEmail className="contact__option-icon"/>
      <h4>Email</h4>
      <h5>Ishitaverma2622@gmail.com</h5>
      <a href='mailto:ishitaverma2622@gmail.com' target='_blank'>Send a message</a>
      </article>

      <article className="contact__option">
      <BsWhatsapp className="contact__option-icon"/>
      <h4>WhatsApp</h4>
      <h5>DM</h5>
      <a href='https://api.whatsapp.com/send?phone+917024455037' target='_blank'>Send a message</a>
      </article>
      </div>

      <form >
      <input type='text' name='name' placeholder="Your Full Name"></input>
      <input type='email' name='email' placeholder="Your Email"></input>
      <textarea name="message" rows='7' placeholder="Your Message"></textarea>
      <button type="submit" className="btn-primary btn">Submit</button>
      </form>
      </div>
      </section>
    </div>
  )
}

export default Contact
