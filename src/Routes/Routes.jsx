import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Collection from '../pages/Collection'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import PlaceOrder from '../pages/PlaceOrder'
import MyOrder from '../pages/MyOrder'
import Login from '../pages/Login'

const MyRoutes = () => {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/place-order' element={<PlaceOrder />} />
      <Route path='/orders' element={<MyOrder />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  )
}

export default MyRoutes