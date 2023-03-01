/*
 * PreLoader Component
*/

// Libs
import React, {useState, useEffect, useContext} from 'react'
import { motion, animate, useMotionValue } from "framer-motion"
import { wait } from '@testing-library/user-event/dist/utils'

// Styles
import "./styles.scss"

// SVG
import { ReactComponent as LinesBackground } from "assets/images/bg_lines.svg"

// Utils
import { convertObjToArray } from "utils/convertObjToArray"
import { loadImageToCache } from 'utils/loadImageToCache'

// Context
import {Context} from 'context'

// Components
import Spinner from 'components/Spinner'

// Export
export default function Preloader({ setIsLoading = () => false, images = [], page = "" }) {
  
  // Constants
  const reverseClipPath = useMotionValue(0)
  const imgsToLoad = convertObjToArray(images)
  
  // State
  const [loadedPercentage, setLoadedPercentage] = useState(0)
  const [reversePercentage, setReversePercentage] = useState(0)
  const [textOut, setTextOut] = useState("0%")
  const [textIn, setTextIn] = useState("100%")
  const [textVisibility, setTextVisibility] = useState("hidden")
  const [outOpacity, setOutOpacity] = useState("1")

  // Context
  const [context, setContext] = useContext(Context)
  
  // Preloader Done => Update Context
  const preloaderDone = () => {
    if(context.isLoading){
      setTimeout(() => {
        setContext({
          isLoading: false
        })
      }, 500)
    }
  }

  // Outro Animation
  const outroAnimation = () => {
    setTimeout(() => {
      animate(reverseClipPath, 100, {
        duration: .700,
        ease: "easeInOut",
        onUpdate: latest => {
          setReversePercentage(latest)
        }
      })
      setTimeout(() => {
        setTextOut("-100%")
        setTextIn("0")
        setTimeout(() => {
          setTextIn("-100%")
          setTimeout(() => {
            setOutOpacity(0)
            setIsLoading(false)
            preloaderDone()
          }, 500)
        }, 2500)
      }, (images.length > 1) ? 1000 : 0)
    }, (images.length > 1) ? 1000 : 0)
  }
  
  // Preload Images
  const preloadImages = async (images) => {

    const context = `${page}ImagesCached`

    // If the images weren't already loaded
    if(!window[context]){

      let imagesLoaded = 0
    
      for await (const image of images) {

        // Load it to the cache
        await loadImageToCache(image);

        // Only show percentage progress if there is more than 1 image
        if(images.length > 1){
          
          // Update textVisibility
          if(imagesLoaded === 0){
            setTextVisibility("visible")
          }

          // Update loadedPercentage
          setLoadedPercentage(Math.round(((imagesLoaded+1) / images.length) * 100))

        }

        // Update Image Loaded
        imagesLoaded++

        // Add some delay
        await wait(200)

      }
      
      // Animate Out the Preloader
      if(page === "home"){
        outroAnimation()
      }else{
        setIsLoading(false)
        preloaderDone()
      }

      // Flag to not use the preloader again for this page
      window[context] = true
      
    }else{

      // All images are already cached, continue to show the page
      setIsLoading(false)
      preloaderDone()

    }

  };

  // Preload Images
  useEffect(() => {
    preloadImages(imgsToLoad)
  }, 
  // eslint-disable-next-line
  [])
  
  return (
    <>
      <div className="preloader" style={{
        opacity: outOpacity, 
        display: (page === "home") ? "flex" : "none",
      }}>
        <h1>
          <span className="numbers">
            <strong>
              <motion.span style={{transform: `translateY(${textOut})`, visibility: textVisibility}}>
                {loadedPercentage}%
              </motion.span>
            </strong>
          </span>
          <span className="text">
            <strong>
              <motion.span style={{transform: `translateY(${textIn})`}}>
                hola!
              </motion.span>
            </strong>
          </span>
        </h1>
        <motion.div className="lines-bg initial" style={{clipPath: `circle(${(imgsToLoad.length > 1) ? loadedPercentage : "100"}%)`, opacity: (images.length > 1) ? "1" : "0.5"}}>
          <LinesBackground />
        </motion.div>
        <motion.div className="lines-bg dark" style={{clipPath: `circle(${reversePercentage}%)`}}>
          <LinesBackground />
        </motion.div>
        <motion.div className="lines-bg reverse" style={{clipPath: `circle(${reversePercentage}%)`}}>
          <LinesBackground />
        </motion.div>
      </div>
      <Spinner isVisible={(page !== "home") ? true : false} style={{
        opacity: outOpacity, 
        display: (page !== "home") ? "flex" : "block",
      }}/>
    </>
  )
}