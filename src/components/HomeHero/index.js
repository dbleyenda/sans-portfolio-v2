/*
 * Home Hero Component
*/

// Libs
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Styles
import "./styles.scss"

// Components
import HeroArrow from 'components/HeroArrow'

// Hooks
import { useScrollTo } from "hooks/useScrollTo"

// Export
export default function HomeHero({ headShotImg }) {

  // useScroll hook: scrollY returns the pixel position of the scroll
  const { scrollY } = useScroll()
  
  // Transformations
  // useTransform hook: map the values of the scrollY motion from a start-end array of scrollY pixels values to another start-end array
  const scaleImage = useTransform(scrollY, [0, 1400], ["100%", "120%"]);
  const translateImage = useTransform(scrollY, [0, 1400], ["0px", "50px"]);
  const scaleText = useTransform(scrollY, [0, 1400], ["100%", "110%"]);
  const rotateText = useTransform(scrollY, [0, 1400], ["0deg", "5deg"]);

  // useScrollTo hook to animate scroll to a certain position
  const scrollTo = useScrollTo({ 
    type: 'spring',
    stiffness: 100,
    damping: 20,
    //damping: 30,
    //restDelta: 0.001,
  })

  return (
    <section className="hero-container" id="hero">
      <h1>
        <motion.span className="text" style={{ scale: scaleText, rotate: rotateText }}>
          <span>
            <strong>I'm Ignacio Sans,</strong>
          </span>
          <span>
            <strong>product designer &amp; developer</strong>
          </span>
          <span>
            <strong>based in Santiago, Chile.</strong>
          </span>
        </motion.span>
        <span className="headshot">
          <motion.img 
            src={headShotImg}
            alt="Headshot photo of myself"
            style={{ scale: scaleImage, y: translateImage }}
          />
        </span>
      </h1>
      <button 
        onClick={() => scrollTo({
          target: '#work'
        })}
        type="button" 
        title="Explore"
      >
        <HeroArrow />
      </button>
    </section>   
  )

}