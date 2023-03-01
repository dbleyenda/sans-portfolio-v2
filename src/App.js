/*
 * App Component
*/

// Libs
import React, {useState} from 'react'
import {BrowserRouter as RouterProvider} from "react-router-dom"

// Context
import { Context } from 'context'

// Router
import Router from 'pages/router'

// Components
import Spinner from 'components/Spinner'

// Export
export default function App(){

  // State
  const [context, setContext] = useState({
    isLoading: true,
  })

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="layout">
        <RouterProvider>
          <Router />
        </RouterProvider>
        <Spinner isVisible={(context.isLoading) ? false : true}/>
      </div>
    </Context.Provider>
  )
}