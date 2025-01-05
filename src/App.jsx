import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Hero from './Hero'
import Testimonial from './Testimonial'
import Favorites from './Favorites'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Testimonial />
      <Favorites />
    </>
  );
}

export default App
