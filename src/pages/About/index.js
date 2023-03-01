/*
 * About Page Component
*/

// Libs
import React, {useState} from "react"
import { Helmet } from "react-helmet"

// Styles
import './styles.scss'

// Images
import imagesJSON from "assets/images/about"

// Utils
import { isHighDensity } from "utils/isHighDensity"

// Components
import PageTransition from "components/PageTransition"
import Preloader from "components/Preloader"
import InsideNavigation from "components/InsideNavigation"
import InsideHero from "components/InsideHero"
import ScrollProgress from "components/ScrollProgress"
import Footer from "components/Footer"

// Preload Image List
const images = imagesJSON[(isHighDensity) ? '2x' : '1x']

// Export
export default function About() {
  
  // Constants
  const page = "about"

  // State
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <PageTransition>
      <Helmet>
        <title>sans / about</title>
        <meta name="description" content="I'm Ignacio Sans, product designer and developer based in Santiago, Chile." />
      </Helmet>
      {isLoading && (
        <Preloader 
          setIsLoading={setIsLoading}
          images={images} 
          page={page}
        />
      )}
      {!isLoading && ( 
        <main className={`${page}-container ${isLoading ? "is-loading" : ""}`} id={`${page}`}>
          <InsideNavigation sectionText="Career" />
          <InsideHero
            heading="About me"
            title={`Everybody calls me "Nacho"`}
            description="(so you can too)"
          />
          <div className="section-info" style={{height: "5000px"}}>
            <ScrollProgress color="blueish" />
          </div>
          <Footer />
        </main>
      )}
    </PageTransition>
  )

}