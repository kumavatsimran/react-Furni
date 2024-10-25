import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './container/Home';
import About from './container/About';
import Shop from './container/Shop';
import Services from './container/Services';
import Blog from './container/Blog';
import Contact from './container/Contact';
import Cart from './container/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>




      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App