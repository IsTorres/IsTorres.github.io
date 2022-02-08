import React from 'react'
import images from './DefaultCard';
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
            Sempre tive um pé na tecnologia e outro na arte, meu objetivo no momento é unir esses mundos 
            e entregar algo que faça sentido e agregue valor onde quer que eu esteja.
            No momento estou estudando desenvolvimento web na 
            <a className='text-link' href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>, 
            para futuramente me tornar um profissional full-stack.
          </p>
          <p className='text-up'>
            Gosto bastante da parte de Front-end, devido a minha trajetória como ilustrador e designer, 
            mas também estou bastante empolgado para conhecer mais de Back-end e mobile.
          </p>
        </div>
        <h3 className="title">Tecnologias</h3>
        <div>
          <div className="tech-links">
            <TechIcon tech={images.javascript}/>
            <TechIcon tech={images.react}/>
            <TechIcon tech={images.redux}/>
            <TechIcon tech={images.git}/>
            <TechIcon tech={images.eslint}/>
            <TechIcon tech={images.jest}/>
            <TechIcon tech={images.mongodb}/>
            <TechIcon tech={images.node}/>
            <TechIcon tech={images.mysql}/>
          </div>
        </div>
      </div>
    </div>
  )
}
