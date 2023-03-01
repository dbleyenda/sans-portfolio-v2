/*
 * Contact Component
*/

// Libs
import React from 'react'

// Constans
import { EMAIL } from 'data/constants'

// Styles
import './styles.scss'

// Export
export default function Contact( {children} ) {

  return (
    <section className="contact-container" id="contact">

      <div className="top">
        <h6>Get in touch</h6>  
        <p className="text-section">
          <span className="highlighted big">
            <span>For</span>
            <span>work inquires</span>
            <span>email me to</span>
          </span>
          <a href={`mailto:${EMAIL}`} title="Get in touch" target="_blank" rel="noreferrer">{EMAIL}</a>
        </p>
      </div>

      {children}

    </section>
  )
}