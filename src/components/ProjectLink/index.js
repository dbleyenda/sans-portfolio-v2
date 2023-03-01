import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectLink({id, client, heading, slug}) {
  return (
    <li key={id}>
      <Link to={`/work/${slug}`}>
        {client} - {heading}
      </Link>
    </li>
  )
}