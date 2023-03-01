/*
 * Project Detail Page Component
 */

// Libs
import React, {useState} from "react";
import { Helmet } from "react-helmet";

// Images
import imagesJSON from "assets/images/projects"

// Utils
import { isHighDensity } from "utils/isHighDensity"

// Components
import PageTransition from "components/PageTransition"
import Preloader from "components/Preloader"
import InsideNavigation from "components/InsideNavigation"
import ProjectList from "components/ProjectList"
import Footer from "components/Footer"

// Preload Image List
const images = imagesJSON[(isHighDensity) ? '2x' : '1x']

// Export
export default function Projects() {

  // Constants
  const page = "projects"

  // State
  const [isLoading, setIsLoading] = useState(true)

  return (
    <PageTransition>
      <Helmet>
        <title>sans / selected work</title>
        <meta name="description" content="Recent selected work showcasing product design, web development, UX/UI design, and brand design." />
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
          <InsideNavigation sectionText="Selected Work" />
          <h3>Selected Work</h3>
          <ProjectList />
          <Footer />
        </main>
      )}
    </PageTransition>
  );
  
}