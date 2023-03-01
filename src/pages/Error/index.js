/*
 * Error Page Component
*/

// Libs
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"

// Components
import PageTransition from 'components/PageTransition'
import InsideNavigation from 'components/InsideNavigation'
import Footer from 'components/Footer'

// Export
export default function ErrorPage() {

  const page = "error"
  
  return (
    <PageTransition>
      <Helmet>
        <title>sans / error 404</title>
        <meta name="description" content="Sorry, the page that you are looking for does not exist." />
      </Helmet>
      <main className={`${page}-container`} id={`${page}`}>
        <InsideNavigation sectionText="Error 404" />
        <h1>Oops!</h1>
        <p>Sorry, the page that you are looking for does not exist.</p>
        <Link to="/">Start over</Link>
        <Footer />
      </main>
    </PageTransition>
  )
}