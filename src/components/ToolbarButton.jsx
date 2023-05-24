import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ToolbarButton(props) {
  const [linkHovered, setLinkHovered] = useState(false)

  const linkStyles = {
    textDecoration: 'none',
    color: 'var(--white)',
    backgroundColor: 'var(--dark-purple)',
    padding: '.5em 1.5em',
    borderRadius: '25px',
    textTransform: 'uppercase',
    minWidth: '120px',
    textAlign: 'center'
  }

  return (
    <Link
      to={props.to}
      style={{
        ...linkStyles,
        backgroundColor: linkHovered ? 'var(--red)' : 'var(--dark-purple)'
      }}
      onClick={props.onClick}
      onMouseEnter={() => {setLinkHovered(true)}}
      onMouseLeave={() => {setLinkHovered(false)}}
    >
      {props.value}
    </Link>
  )
}
