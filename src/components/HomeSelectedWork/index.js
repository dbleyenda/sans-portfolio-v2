/*
 * Home Selected Work Component
*/

// Libs
import React, { forwardRef } from 'react'

// Styles
import "./styles.scss";

// Components
import ProjectList from "components/ProjectList"

// Export
export default forwardRef(function HomeSelectedWork(props, ref) {

  return (
    <section className="projects-container" id="work" ref={ref}>
      <div className="text-section">
        <h3>Selected Work</h3>
        <ProjectList type="slider" />
      </div>
    </section>
  )

})