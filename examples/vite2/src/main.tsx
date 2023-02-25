import React from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './HomePage'

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <React.StrictMode>
      <HomePage
        name={'vite2'}
        titleBadge={'Vite 2'}
      />
    </React.StrictMode>,
  )
