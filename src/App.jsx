import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Notfound from './Component/Notfound/Notfound'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Portfolio from './Component/Portfolio/Portfolio'

let router = createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    { index: true , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"contact" , element:<Contact/>},
    {path:"*" , element:<Notfound/>}
  ]} 
  ])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App
