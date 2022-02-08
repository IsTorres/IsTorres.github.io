import React from 'react';
import '../styles/dale.css'

export default function Home() {
  return <header className="hero conteiner" id="home">
  <div className="icon-code">
    <i className="fa fa-code" aria-hidden="true"></i>
  </div>
  <h1>Ismael Torres</h1>
  <p className="paragraph-hero">Web Developer</p>
  <div className="icon">
    <a href="https://github.com/istorres/" target="blank"> <i className="fa fa-github" aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/in/ismaeltorresf/" target="blank"> <i className="fa fa-linkedin" aria-hidden="true"></i></a> 
    <a href="https://www.instagram.com/ismaeltfv/" target="blank"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
  </div>
  <div className="arrow-icon">
    <a className="button-arrow" href="#about-me"> <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
  </div>
</header>;
}
