import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom"
import router from '../src/routers/Router.jsx'
import {SnackbarProvider} from 'notistack'
// import AuthProvider from './contects/Authprovider.jsx'
import AuthProvider from './contects/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </SnackbarProvider>,
)
