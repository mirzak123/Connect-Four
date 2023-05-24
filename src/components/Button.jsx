import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  const linkStyles = {
    textDecoration: 'none',
    color: 'var(--black)',
    backgroundColor: `var(--${props.color})`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

 return (
    <Link
      to={props.link}
      style={linkStyles}
      className="button"
    >
      <div className="button__text">{props.value}</div>
      {props.icon && <img className="button__icon" src={props.icon} alt="icon" />}
    </Link>
  )
}
