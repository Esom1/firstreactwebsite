import React from 'react'
import '../styles/Home.css'
import Hero from '../pages/Hero'
import Jewelry from '../pages/Jewelry'
import Women from '../pages/Women'
import Electronics from '../pages/Electronics'

const Home = ({cartItem, setCartItem,handleAddToCart}) => {
  return (
    <div>
      <Hero />
      <Jewelry/>
      <Women/>
      <Electronics/>
    </div>
  )
}

export default Home