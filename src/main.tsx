import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PageContextProvider from './context/page'
import ThemeContextProvider from './context/theme/theme.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </PageContextProvider>
  </React.StrictMode>
)
