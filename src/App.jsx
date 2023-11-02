import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Us from './components/Us'
import Footer from './components/Footer'


function App() {

  return (
    <main className='h-screen'>
      <Navbar />
      <Container />
      <Us />
      <Footer />
    </main>
  )
}

export default App
