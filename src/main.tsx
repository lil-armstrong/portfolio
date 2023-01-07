import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppCxtProvider from './context/app.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppCxtProvider>
      <App />
    </AppCxtProvider>
  </React.StrictMode>
)
