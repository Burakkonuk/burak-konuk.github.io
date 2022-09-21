
import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
  return (
     <div className="portfolio" id="portfolio">
      
      <div className="imgContainer">

            <h3>About Me</h3>
            <div className="quoteContainer1">
              <h3>Hi, my name is Burak and I am a 4th grade student 
        at Dokuz Eylul University Computer Engineering Program.
        I love learning all the time, good at teamwork and working on
        Java, Java Script, React, ASP.NET Core MVC. Trying hard to be
        a full stack Developer. </h3>
        
            </div>
            <div className="iconContainer">
            <h1> <i class="fa-brands fa-react fa-lg"></i></h1>
            <h1 className='java'><i class="fa-brands fa-java fa-lg"></i></h1>
            <h1 className='javascript'> <i class="fa-brands fa-js fa-lg"></i></h1>
            <h1 className='html'><i class="fa-brands fa-html5 fa-lg"></i></h1>
            <h1 className='css'><i class="fa-brands fa-css3-alt fa-lg"></i></h1>
            <h1 className='python'><i class="fa-brands fa-python fa-lg"></i></h1> 
              
            </div>
            
            
      </div>
      
      
      
    </div>
  )
}
