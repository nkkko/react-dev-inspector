import React from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './HomePage'

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <React.StrictMode>
      <HomePage
        name={'cra5-with-rewired'}
        titleBadge={'create-react-app 5'}
      />
    </React.StrictMode>,
  )