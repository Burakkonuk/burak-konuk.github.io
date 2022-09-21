import React from 'react'
import "./works.scss"


export default function Works({projectOpen,setProjectOpen}) {


  
  return (
    <div className="works" id="works">
        <div class="context">
        <h1>My Projects</h1> 
        <div className="worksContainer">
          <div className={"work1 " + (projectOpen && "active")}>
            <h4>Car Rental Project </h4>
            <div className="imgcontainer1"></div>
            <h3>Project Detail: Car Rental is a desktop car renting application. Developed with Java,Java Swing technologies.</h3>
            <div className="btncontainer" onClick={() =>setProjectOpen(!projectOpen)}>
              <p>See More Details</p>
                
            </div>
          </div>
        <div className='work2'>aaaaaaaaaaa</div>
        
        <div className='work3'>aaaaaaaaaaa</div>
        <div className='work4'>aaaaaaaaaaa</div></div>
        
    </div>

<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      
    </div>
  )
}
