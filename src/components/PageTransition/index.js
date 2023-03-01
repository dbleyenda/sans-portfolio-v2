/*
 * Page Transition Component
*/

// Libs
import React from 'react'
import { motion } from 'framer-motion'

// Styles
import './styles.scss'

// Export
export default function PageTransition(props) {

  return (
    <>
      <motion.div className="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{delay: .300}}
      >
        {props.children}
      </motion.div>
      <motion.div className="page-transition out"
        initial={false}
        animate={{ y: "100%"}}
        exit={{ y: "-100%"}}
        transition={{ 
          ease: "easeInOut",
          duration: 1,
          type: "tween" 
        }}
      />
    </>
  )

}