import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from "./component/About"
import Menu from "./component/Menu"
import Contact from './component/Contact'
import './App.css'
// import Contact1 from './component/Contact1'
// import products from './component/Product'
// import Gallery from './component/Gallery'
// import Cart from './component/Cart'
// import Navbar from './component/Navbar'
export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
{/* <Contact1></Contact1> */}

    </>
  )
}
