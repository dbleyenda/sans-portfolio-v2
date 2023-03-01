/*
 * Footer Component
*/

// Libs
import React from 'react'

// Hooks
import { useScrollTo } from "hooks/useScrollTo"

// Constans
import { EMAIL, RESUME, LINKEDIN, INSTAGRAM, GITHUB, DRIBBBLE } from 'data/constants'

// Styles
import './styles.scss'

// Components
import { IconDownload, IconArrowUp } from 'components/Icons'

// Export
export default function Footer() {

  // useScrollTo hook to animate scroll to a certain position
  const scrollTo = useScrollTo({ 
    type: 'spring',
    stiffness: 100,
    damping: 20,
    //damping: 30,
    //restDelta: 0.001,
  })

  return (
    <footer id="footer">
      <ul className="left">
        <li>&copy; 2023 – Sans Portfolio Website</li>
        <li><a href={RESUME} title="Download resume" target="_blank" rel="noreferrer">Download resume <IconDownload /></a></li>
      </ul>
      <div className="right">
        <ul>
          <li><a href={`mailto:${EMAIL}`} title="Get in touch" target="_blank" rel="noreferrer">Email</a></li>
          <li><a href={LINKEDIN} title="Let's connect on LinkedIn" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={GITHUB} title="Follow me on GitHub" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={INSTAGRAM} title="Follow me on Instagram" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href={DRIBBBLE} title="Follow me on Dribble" target="_blank" rel="noreferrer">Dribbble</a></li>
        </ul>
        <button 
          onClick={() => scrollTo({
            target: 'main'
          })}
          type="button" 
          title="Go to top"
        >
          <IconArrowUp />
        </button>
      </div>
    </footer>
  )
}