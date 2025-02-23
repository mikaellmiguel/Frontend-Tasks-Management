import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Homepage } from './pages/Homepage'
import { GlobalStyles } from './styles/global'
import { TaskView } from './pages/TaskView'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <TaskView />
  </StrictMode>,
)
