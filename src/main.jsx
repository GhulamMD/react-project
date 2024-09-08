import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Display from './components/Display.jsx'
import Heading from './components/Heading.jsx'
import Buttons from './components/Buttons.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Heading />

    <Display />

    <Buttons />

  </StrictMode>,
)
