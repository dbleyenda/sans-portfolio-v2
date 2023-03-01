/*
 * Inside Navigation Component
*/

// Libs
import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

// Styles
import './styles.scss'

// Components
import ScrollProgress from 'components/ScrollProgress';

// Export
export default function InsideNavigation({sectionText = "Portfolio"}) {

  return (
    <div className="inside-navigation">
      
      <ScrollProgress />

      <motion.div className="logo" 
        //style={{ scale, opacity: opacityLogo, y }}
      >
        <Link to="/">Sans</Link>
      </motion.div>

      <motion.p className="section-text" 
        //</div>style={{ scale, opacity: opacityText, y }}
      >{sectionText}</motion.p>

    </div>
  )
}