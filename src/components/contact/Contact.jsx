import React from 'react'
import "./contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { hover } from '@testing-library/user-event/dist/hover'
export default function Contact() {
  return (
    <div className="contact" id="contact">
        <div className="wrapper">
          <FontAwesomeIcon icon={faTwitter}/>
        </div>
    </div>
  )
}
