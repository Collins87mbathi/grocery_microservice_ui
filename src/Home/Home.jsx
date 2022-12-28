import React from 'react';
import Filter from '../Filter/Filter';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar'
import './Home.css';

const Home = () => {
  return (
   <>
  <Navbar/>
   <Hero/>
   <Filter/>
   </>
  )
}

export default Home