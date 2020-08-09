import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Routes from './Routes'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App
