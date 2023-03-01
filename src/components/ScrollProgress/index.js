/*
 * Scroll Progress Component
*/

// Libs
import React from "react";
import { motion, useScroll } from "framer-motion"
import { Link } from 'react-router-dom';

// Styles
import './styles.scss'

// Export
export default function ScrollProgress({color = ""}) {

  // Scroll Progress
  const { scrollYProgress } = useScroll();

  return (
    <Link to="/" className={`scroll-progress ${color}`}>
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="38" pathLength="1" className="bg" />
        <motion.circle
          cx="40"
          cy="40"
          r="38"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
        <g fill="#ffe800" fillRule="nonzero" className="close"><path d="m29.4301516 31.5273935 18.8716483 19.0067844c.5949891.5992497 1.585043.6235391 2.2113473.0542519s.6516903-1.5165736.0567012-2.1158233l-18.8716483-19.0067844c-.5949891-.5992497-1.585043-.6235391-2.2113473-.0542519s-.6516903 1.5165736-.0567012 2.1158233z"/><path d="m29.4301516 31.5273935 18.8716483 19.0067844c.5949891.5992497 1.585043.6235391 2.2113473.0542519s.6516903-1.5165736.0567012-2.1158233l-18.8716483-19.0067844c-.5949891-.5992497-1.585043-.6235391-2.2113473-.0542519s-.6516903 1.5165736-.0567012 2.1158233z" transform="matrix(0 1 -1 0 80 0)"/></g>
      </svg>
    </Link>
  )
}