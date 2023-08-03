import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Route from './Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Component/AuthProvider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Route}>
      </RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
