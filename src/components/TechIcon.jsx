/* eslint-disable react/prop-types */
import React from 'react'

export default function TechIcon(props) {
  function getTechName (props) {
    const slashIndex = 14;
    const dotIndex = props.tech.indexOf('.');
    return props.tech.slice(slashIndex, dotIndex);
  }

  return (
    <a
      href={`https://www.google.com/search?q=${ getTechName(props) }+documentation`}
      target="_blank"
      rel="noreferrer"
      className="pages__TechnologieItem-sc-1ir1mp1-9 hBwsoo"
    >
      <img className="tech-icon" src={ props.tech } alt={`${ props.tech } icon`} />
    </a>
  )
}
