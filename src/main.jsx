import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Login } from './Components/Login/Login.jsx'
import { Customer } from './Components/Customer/Customer.jsx'
import { Shopper } from './Components/Shopper/Shopper.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component: App,
  },
  {
    path:'/customer',
    Component: Customer,
  },  {
    path:'/shopper',
    Component: Shopper,
  }
])

let token = Cookies.get('token');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { (token) ?
      <RouterProvider router={router} /> : 
      <Login />
    }    
  </React.StrictMode>,
)