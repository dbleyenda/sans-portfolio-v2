/*
 * Spinner Component
*/

import React from 'react'

// Images
import { ReactComponent as Loading } from "assets/images/im_loading.svg"

// Styles
import './styles.scss'

export default function Spinner({isVisible}) {
  return (
    <div className="spinner" style={{visibility: (isVisible) ? "visible" : "hidden"}}>
      <Loading />
    </div>
  )
}