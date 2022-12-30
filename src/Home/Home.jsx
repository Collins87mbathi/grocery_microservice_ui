import React from 'react';
import Filter from '../Filter/Filter';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
  return (
   <>
  <Navbar/>
   <Hero/>
   <Filter/>
   <Products/>
   </>
  )
}

export default Home