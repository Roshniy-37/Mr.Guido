import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-p0frrosaxvx7uzan.us.auth0.com"
      clientId="vETkLgvuFwiz0RBX0bCNZAbOIhQxIRga"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);