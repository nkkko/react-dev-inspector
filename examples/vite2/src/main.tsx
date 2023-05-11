import React from 'react'
import { createRoot } from 'react-dom/client'
import { ShowPage } from './ShowPage'
import './index.css'

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <React.StrictMode>
      <ShowPage />
    </React.StrictMode>,
  )
