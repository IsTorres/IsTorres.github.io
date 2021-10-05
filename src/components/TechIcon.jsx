import React from 'react'

export default function TechIcon(props) {
  return (
    <a
      href={`https://developer.mozilla.org/en-US/docs/Web/${ props.tech }`}
      target="_blank"
      rel="noreferrer"
      className="pages__TechnologieItem-sc-1ir1mp1-9 hBwsoo"
    >
      <img className="tech-icon" src={ props.tech } alt={`${ props.tech } icon`} />
    </a>
  )
}
