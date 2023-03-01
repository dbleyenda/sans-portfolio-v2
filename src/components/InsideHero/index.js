/*
 * Inside Hero Component
*/

// Libs
import React from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

// Styles
import './styles.scss'

// Hooks
import { useScrollTo } from "hooks/useScrollTo"

// Components
import HeroArrow from "components/HeroArrow"

// Export
export default function HeroInside({ heading, title, description }) {

  // useScroll hook: scrollY returns the pixel position of the scroll
  const { scrollY } = useScroll()

  // Transformations
  const scaleText = useTransform(scrollY, [0, 1400], ["100%", "110%"])
  const rotateText = useTransform(scrollY, [0, 1400], ["-1deg", "5deg"])

  // useScrollTo hook to animate scroll to a certain position
  const scrollTo = useScrollTo({ 
    type: 'spring',
    stiffness: 100,
    damping: 20,
    //damping: 30,
    //restDelta: 0.001,
  })

  return (
    <>
      <section className="hero-inside">
        <h1>
          <span className="heading">
            <strong>{heading}</strong>
          </span>
          <motion.span className="title" style={{ scale: scaleText, rotate: rotateText }}>
            <strong>{title}</strong>
          </motion.span>
        </h1>
        <p><span>{description}</span></p>
        <button 
          onClick={() => scrollTo({
            target: '.section-info'
          })}
          type="button" 
          title="Explore"
        >
          <HeroArrow />
        </button>
      </section>
    </>
  );
}
