import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Auth0Provider
      domain="dev-p0frrosaxvx7uzan.us.auth0.com"
      clientId="vETkLgvuFwiz0RBX0bCNZAbOIhQxIRga"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
)
