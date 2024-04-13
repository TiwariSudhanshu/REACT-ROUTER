import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/Home/home'
import './index.css'
import Layout from './Layout.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import User from './components/user/user.jsx'
import Github from './components/Github/github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path : "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
      {
        path: "github",
        element: <Github/>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
