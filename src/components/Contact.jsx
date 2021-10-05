import React from 'react'
import foto from '../images/img.jpeg'

export default function Contact() {
  return (
    <div className="card contact">
      <img 
        className="foto"
        src={ foto }
        alt="minha foto"
      />
      <h4><a className='text-link' href="https://www.betrybe.com/" target="_blank" rel="noreferrer">linkedin</a></h4>
      <h4><a className='text-link' href="https://www.betrybe.com/" target="_blank" rel="noreferrer">gitHub</a></h4>
    </div>
  )
}
