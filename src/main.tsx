import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./App.tsx"
import AboutMe from "./routes/AboutMe.tsx"
import Projects from './routes/Projects.tsx'
import Contacts from './routes/Contacts.tsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  {
    path: "aboutme",
    element: <AboutMe />
  },
  {
    path: "projects",
    element: <Projects />
  },
  {
    path: "contacts",
    element: <Contacts />
  },
  
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
