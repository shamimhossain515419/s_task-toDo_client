import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Route from './Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Component/AuthProvider/AuthProvider'

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Loading from './Component/Loading/Loading'


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loading>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={Route}>
          </RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </Loading>



  </React.StrictMode>,
)
