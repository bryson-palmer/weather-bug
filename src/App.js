import React, { useEffect, useContext } from 'react'
import { ThemeContext } from "./contexts/ThemeContext";
import Header from './components/Header'
import NavBar from './components/NavBar'
import WeatherLayout from './components/weather/WeatherLayout'
import Body from './components/Body'
import './App.css'

export default function App() {

  // Pass ThemeContext object to the useContext hook
  const theme = useContext(ThemeContext);
  // Access theme state
  const darkMode = theme.state.darkMode;

  // On app load
  useEffect(() => {

  }, [])

  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Header />
      <Body />
      {/* <WeatherLayout /> */}
      <NavBar />
    </div>
  )
}