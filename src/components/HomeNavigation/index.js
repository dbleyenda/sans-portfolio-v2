/*
 * Home Navigation Component
*/

// Libs
import React from 'react'

// Styles
import "./styles.scss";

// Hooks
import { useScrollTo } from "hooks/useScrollTo";

// Export
export default function HomeNavigation() {

  // useScrollTo hook to animate scroll to a certain position
  const scrollTo = useScrollTo({ 
    type: 'spring',
    stiffness: 100,
    damping: 20,
    //damping: 30,
    //restDelta: 0.001,
  })

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => scrollTo({
                target: '#hero'
              })}
              title="Sans"
              type="button"
              className="logo"
            >
              Sans
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo({
                target: '#work'
              })}
              title="Selected Work"
              type="button"
            >
              Selected Work
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo({
                target: '#career'
              })}
              title="Career"
              type="button"
            >
              Career
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo({
                target: '#contact'
              })}
              title="Contact"
              type="button"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )

}