import React from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './HomePage'
import './index.css'

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <React.StrictMode>
      <HomePage
        name={'vite3'}
        titleBadge={'Vite 3'}
      />
    </React.StrictMode>,
  )
