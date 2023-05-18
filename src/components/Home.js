import React from 'react'
import '../styles/Home.css'
import Hero from '../pages/Hero'
import Jewelry from '../pages/Jewelry'

const Home = ({cartItem, setCartItem,handleAddToCart}) => {
  return (
    <div>
      <Hero />
      <Jewelry/>
    </div>
  )
}

export default Home