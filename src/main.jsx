import  React from 'react'
import { createRoot } from 'react-dom/client'; // Importe createRoot
import { GlobalStyles } from './styles/GlobalStyles.js'
import Home from './pages/Home' 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GlobalStyles />
    <Home/>

  </React.StrictMode>,
)
