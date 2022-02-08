import React from 'react'
import foto from '../images/img.jpeg'

export default function Contact() {
  return (
    <div className="contact">
      <img 
        className="foto"
        src={ foto }
        alt="minha foto"
      />
      <div className="contact">
        <h4>
          <a className='text-link' href="https://www.linkedin.com/in/ismaeltorresf/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
            { ' linkedin' }
          </a>
          </h4>
        <h4>
          <a className='text-link' href="https://github.com/IsTorres" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
            { ' GitHub' }
          </a>
        </h4>
        <h4>
          <a className='text-link' href="https://www.instagram.com/ismaeltfv/" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
            { ' Instagram' }
          </a>
        </h4>
      </div>
    </div>
  )
}
