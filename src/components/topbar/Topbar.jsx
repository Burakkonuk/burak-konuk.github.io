import React from 'react'
import "./topbar.scss"
import 'font-awesome/css/font-awesome.min.css';

export default function Topbar({menuOpen,setMenuOpen}) {
    
  return (
    <div className={"topbar " + (menuOpen && "active") }>
        <div className="wrapper">   
            <div className="left">
                <a href="#intro" className="logo">
                &#60;/burak&#62;
                </a>
                
                <div className="itemContainer">

                    Desire what is far  
                    
                </div>
                <div className="itemContainer2">

                    And far beyond ..
                </div>
            </div>

            <div className="right">
                
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
