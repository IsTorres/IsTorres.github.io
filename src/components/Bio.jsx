import React from 'react'
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import redux from '../images/redux.svg';
import git from '../images/git.svg';
import eslint from '../images/eslint.svg';
import jest from '../images/jest.svg';
import node from '../images/nodejs.svg';
import mongodb from '../images/mongodb.svg';
import mysql from '../images/mysql.svg';
import TechIcon from './TechIcon';
import '../styles/home.css';

export default function Bio() {
  return (
    <div>
      <div className="card">
        <h3 className="title">Sobre</h3>
        <h1 className="bio-title text-up bio-text">Prazer, meu nome é Ismael!</h1>
        <div className="bio-text">
          <p>
            Sempre tive um pé na tecnologia e outro na arte, meu objetivo no momento é unir esses mundos e entregar algo que faça sentido e agregue valor onde quer que eu esteja.
            No momento estou estudando desenvolvimento web na <a className='text-link' href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>, para futuramente me tornar um profissional full-stack.
          </p>
          <p className='text-up'>
            Gosto bastante da parte de Front-end, devido a minha trajetória como ilustrador e designer, mas também estou bastante empolgado para conhecer mais de Back-end e mobile.
          </p>
        </div>
        <h3 className="title">Tecnologias</h3>
        <div>
          <div className="tech-links">
            <TechIcon tech={ javascript }/>
            <TechIcon tech={ react }/>
            <TechIcon tech={ redux }/>
            <TechIcon tech={ git }/>
            <TechIcon tech={ eslint }/>
            <TechIcon tech={ jest }/>
            <TechIcon tech={ mongodb }/>
            <TechIcon tech={ node }/>
            <TechIcon tech={ mysql }/>
          </div>
        </div>
      </div>
    </div>
  )
}
