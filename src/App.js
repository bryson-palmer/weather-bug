import React, { useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import WeatherLayout from './components/weather/WeatherLayout'
import Footer from './components/Footer'
import Body from './components/Body'
import './App.css'

export default function App() {

  // On app load
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Body />
      {/* <WeatherLayout /> */}
      <Footer />
    </div>
  )
}