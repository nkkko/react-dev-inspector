import React from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './HomePage'
import './index.css'

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <React.StrictMode>
      <HomePage
        name={'vite4'}
        titleBadge={'Vite 4'}
      />
    </React.StrictMode>,
  )
