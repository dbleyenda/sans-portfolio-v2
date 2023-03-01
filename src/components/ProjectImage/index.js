import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectImage({id, client, heading, slug, images}) {
  return (
    <li key={id}>
      <Link to={`/work/${slug}`}>
        {client} - {heading}
      </Link>
    </li>
  )
}