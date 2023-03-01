/*
 * Hero Arrow Component
*/

// Libs
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Styles
import './styles.scss'

// Components
import { IconArrowDown } from 'components/Icons'

// Export
export default function HeroArrow() {

  // useScroll hook: scrollY returns the pixel position of the scroll
  const { scrollY } = useScroll()

  // Transformations
  // useTransform hook: map the values of the scrollY motion from a start-end array of scrollY pixels values to another start-end array
  const scaleArrow = useTransform(scrollY, [99, 100], ["100%", "0%"])

  return (
    <motion.div className="scroll-down-icon" style={{ scale: scaleArrow }}>
      <IconArrowDown />
    </motion.div>
  )
}