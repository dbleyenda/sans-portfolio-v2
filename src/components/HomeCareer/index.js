/*
 * Home Career Component
*/

// Libs
import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import "./styles.scss";

// Export
export default function HomeCareer() {

  return (
    <section className="career-container" id="career">
      <div className="text-section">
        <h3>Selected Work</h3>
        <p>
          <Link to="/about">About me</Link>
        </p>
      </div>
    </section>  
  )

}