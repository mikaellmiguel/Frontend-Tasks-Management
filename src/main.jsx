import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/global'
import { Router } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Router />
  </StrictMode>,
)
