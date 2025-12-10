import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import ErrorPage from './Components/ErrorPage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import DataAnalysis from './Pages/DataAnalysis'
import AutoCAD from './Pages/AutoCAD'
import ImageEditingPage from './Pages/ImageEdit'
import MobileAppPage from './Pages/MobileAppDevelopment'
import SeoServicePage from './Pages/SEO'
import SocialMediaPage from './Pages/SocialMediaServices'
import UiUxDesignPage from './Pages/UIUX'
import WebDevelopmentPage from './Pages/WebDevelopment'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/services/data-analysis",
        element:<DataAnalysis/>
      },
      {
        path:"/services/autocad",
        element:<AutoCAD/>
      },
      {
        path:"/services/image-editing",
        element:<ImageEditingPage/>
      },
      {
        path:"/services/mobile-app-development",
        element:<MobileAppPage/>
      },
      {
        path:"/services/seo-service",
        element:<SeoServicePage/>
      },
      {
        path:"/services/social-media-services",
        element:<SocialMediaPage/>
      },
      {
        path:"/services/ui/ux-design",
        element:<UiUxDesignPage/>
      },
      {
        path:"/services/web-development",
        element:<WebDevelopmentPage/>
      },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App