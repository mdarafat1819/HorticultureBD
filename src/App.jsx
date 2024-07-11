import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';
import NavBar from './components/Navbar';
import {CartContext} from './components/Context';
import { useState, useEffect } from 'react';
import Footer from './components/footer'
import Login from './components/LoginPage';
import UserRagistration from './components/UserRagistration';

function App() {

  
  const [cartItem, setCartItem]= useState([]);
  function cartItemHandler (newItem) {
    setCartItem([...cartItem, newItem]
    );
  }
  
  useEffect(
    () => {
      console.log(cartItem);
    }
  )
  return (
    <>
    <BrowserRouter>
    <CartContext.Provider value={{ cartItem, cartItemHandler }}>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/order-page" element={<OrderPage />}> </Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/sign-up" element={<UserRagistration />}></Route>
    </Routes>
    <Footer />
    </CartContext.Provider>
    </BrowserRouter>
  
    </>
  )
}

export default App
