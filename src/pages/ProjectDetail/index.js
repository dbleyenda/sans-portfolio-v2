/*
 * Project Detail Page Component
 */

// Libs
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

// Styles
import './styles.scss'

// Services
import getSingleProject from "services/getSingleProject"

// Components
import InsideNavigation from "components/InsideNavigation"
import InsideHero from "components/InsideHero"

// Images
import imagesJSON from "assets/images/about.json"

// Utils
import { isHighDensity } from "utils/isHighDensity"

// Components
import PageTransition from "components/PageTransition"
import Preloader from "components/Preloader"
import Footer from "components/Footer"
import ScrollProgress from "components/ScrollProgress"

// Preload Image List
const images = imagesJSON[(isHighDensity) ? '2x' : '1x']

// Export
export default function ProjectDetail() {
  
  // Constants
  const page = "detail"
  
  // Retrive slug from URL
  const { slug } = useParams()

  // State
  const [isLoading, setIsLoading] = useState(true)
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [project, setProject] = useState({})

  // Retrive data from service, and update states
  useEffect(() => {
    getSingleProject({ slug }).then((data) => {
      setProject(data)
      setIsDataFetched(true)
    })
  }, [slug])
  
  return (
    <PageTransition>
      <Helmet>
        <title>sans / loading...</title>
      </Helmet>
      {isLoading && (
        <Preloader 
          setIsLoading={setIsLoading}
          images={images} 
          page={page}
        />
      )}
      {!isLoading && ( 
        <>
          {isDataFetched && (
            <main className={`${page}-container ${isLoading ? "is-loading" : ""}`} id={`${page}`}>
              <Helmet>
                <title>sans / {project.overview.heading.toLowerCase()} / {project.overview.sub_heading.toLowerCase()}</title>
                <meta name="description" content={project.overview.description} />
              </Helmet>
              <InsideNavigation sectionText="Selected Work" />
              <InsideHero
                heading={project.overview.client}
                title={project.overview.heading}
                description={project.overview.sub_heading}
              />
              <div className="section-info" style={{height: "5000px"}}>
                <ScrollProgress color="blueish" />
              </div>
              <Footer />
            </main>
          )}
        </>
      )}
    </PageTransition>
  )

}