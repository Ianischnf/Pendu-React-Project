import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AlphabetProvider } from './Provider/ProviderDico'
import SimpleApp from './components/SimpleApp'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AlphabetProvider>
          <SimpleApp />
      </AlphabetProvider> 
    </Router>
 
  </React.StrictMode>,
)
