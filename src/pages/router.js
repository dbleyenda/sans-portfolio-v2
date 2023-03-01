/*
 * Router Component
*/

// Libs
import React from 'react'
import {Route, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

// Pages
import Home from 'pages/Home'
import About from 'pages/About'
import Projects from 'pages/Projects'
import ProjectDetail from 'pages/ProjectDetail'
import Error from "pages/Error";

// Export
export default function Router() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  )
}