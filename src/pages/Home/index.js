/*
 * Home Page Component
 */

// Libs
import React, { useState, useRef } from "react"
import { Helmet } from "react-helmet"

// Styles
import "./styles.scss"

// Images
import { ReactComponent as HeroBackground } from "assets/images/bg_lines.svg"
import imagesJSON from "assets/images/home"

// Utils
import { isHighDensity } from "utils/isHighDensity"

// Components
import PageTransition from 'components/PageTransition'
import Preloader from "components/Preloader"
import HomeNavigation from "components/HomeNavigation"
import HomeHero from "components/HomeHero"
import HomeSelectedWork from "components/HomeSelectedWork"
import HomeCareer from "components/HomeCareer"
import Contact from "components/Contact"
import Footer from "components/Footer"

// Preload Image List
const images = imagesJSON[(isHighDensity) ? '2x' : '1x']

// Export
export default function Home(){

  // Constants
  const page = "home"
  
  // States
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <PageTransition>
      <Helmet>
        <title>sans / portfolio</title>
        <meta name="description" content="Portfolio website of Ignacio Sans, product designer and developer." />
      </Helmet>
      <main className={`${page}-container ${isLoading ? "is-loading" : ""}`} id={`${page}`}>
        {isLoading && (
          <Preloader 
            setIsLoading={setIsLoading}
            images={images} 
            page={page}
          />
        )}
        {!isLoading && ( 
          <>
            <HomeNavigation />
            <HomeHero headShotImg={images.headshot} />
            <HomeSelectedWork />
            <HomeCareer />
            <Contact>
              <Footer />
            </Contact>
          </>
        )}
        <div className="hero-bg">
          <HeroBackground />
        </div>
      </main>
    </PageTransition>
  );

}