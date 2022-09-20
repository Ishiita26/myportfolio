import React from "react";
import './experience.css';
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <>
    <div>
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
      <h3>Development</h3>
      <div className="experience__content">
      
      <div>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>HTML</h4>
      <small className="text-light">Experienced</small>
      </article>
      </div>

      <div>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>CSS</h4>
      <small className="text-light">Experienced</small>
      </article>
      </div>

      <div>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>BootStrap</h4>
      <small className="text-light">Experienced</small>
      </article>
      </div>

      <div>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>JavaScript</h4>
      <small className="text-light">Experienced</small>
      </article>
      </div>
     </div>
      </div>
    
      <div className="experience__frontend">
      <h3>Languages</h3>
      <div className="experience__content">

      <div>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>Java</h4>
      <small className="text-light">Experienced</small>
      </article>
      </div>

      <div>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>SQL</h4>
      <small className="text-light">Experienced</small>
      </article>
      </div>

      <div>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>Content Writing</h4>
      <small className="text-light">Experienced</small>
      </article>
      </div>
      </div>
      </div>
  
    </div>
    </section>
    </div>
    </>
  )
}

export default Experience