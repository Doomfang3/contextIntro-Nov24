import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CountContextProvider from './contexts/CountCountext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </StrictMode>
)
