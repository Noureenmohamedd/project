import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Base from './Components/BaseLayout/Base'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About'
import Layout from "./Components/Layout/Layout"


function App() {

  const router = createBrowserRouter([
    {path:"" , element: <Layout/> , children:[

      { path:"" , element: <Base/>  },
      { path:"about" , element: <About/> },
      { path:"portfolio" , element: <Portfolio/>  },
      { path:"contact" , element: <Contact/>  },
    
    ]  }

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
