import React from 'react'
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import redux from '../images/redux.svg';
import git from '../images/git.svg';
import eslint from '../images/eslint.svg';
import jest from '../images/jest.svg';
import TechIcon from './TechIcon';
import '../styles/home.css';

export default function Bio() {
  return (
    <div>
      <div className="card">
        <h3 className="title">Sobre</h3>
        <h2 className="bio bio-title">Prazer, meu nome é Ismael!</h2>
        <div className="bio bio-text">
          <p>
            Sempre tive um pé na tecnologia e outro na arte, meu objetivo no momento é unir esses mundos e entregar algo que faça sentido e agregue valor onde quer que eu esteja.
            No momento estou estudando desenvolvimento web na <a className='text-link' href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>, para futuramente me tornar um profissional full-stack.
          </p>
          <p>
            Gosto bastante da parte de Front-end, devido a minha trajetória como ilustrador e designer, mas também estou bastante empolgado para conhecer mais de Back-end e mobile.
          </p>
        </div>
        <h3 className="title">Technologies</h3>
        <div>
          <div className="tech-links">
            <TechIcon tech={ javascript }/>
            <TechIcon tech={ react }/>
            <TechIcon tech={ redux }/>
            <TechIcon tech={ git }/>
            <TechIcon tech={ eslint }/>
            <TechIcon tech={ jest }/>
          </div>
        </div>
      </div>
    </div>
  )
}
