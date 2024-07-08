import './App.css'
import NavBar from './components/Navbar';
import Footer from './components/footer';
import Slider from './components/Slider';
import ProductsCatalogue from './components/ProductsCatalogue';
import Products from './resources/Products.json';
import OurCommitments from './components/OurCommitments';
import Categories from './components/Categories';
import NewArrival from './components/NewArrivals';
import { useEffect, useState } from 'react';

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
  console.log("Cart_item from App.jsx " +cartItem.length);
  return (
    <>
    <NavBar cartItem = {cartItem}/>
    <Slider />
    <ProductsCatalogue title="Today's" description = "সিজনালি উদ্ভিদ(বর্ষাকালিন)" items = {Products} handler={cartItemHandler}/>
    <Categories />
    <ProductsCatalogue title="This Month" description = "বেস্ট সেলার উদ্ভিদ" items = {Products} handler={cartItemHandler}/>
    <ProductsCatalogue title="Our Products" description = "Explore All Products" items = {Products} handler={cartItemHandler}/>
    <NewArrival />
    <OurCommitments />
    <Footer />
    </>
  )
}

export default App
