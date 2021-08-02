import './App.css'
import React, { useEffect, useState } from 'react'
import Weather from './components/weather'
import { Dimmer, Loader } from 'semantic-ui-react'
export default function App() {

  // Latitude state
  const [lat, setLat] =  useState([])
  // Longitude state
  const [long, setLong] = useState([])
  // Data state
  const [data, setData] = useState([])

  // On app load
  useEffect(() => {

    // Asyncronous function awaiting data
    const fetchData =  async () => {

      // Get the current position of the device
      navigator.geolocation.getCurrentPosition(function(position) {

        // Setting lat and long to state
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })

      console.log('Latitude is:', lat)
      console.log('Longitude is:', long)

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        // console.log('setData result', result)
      })

    }
    fetchData()
  }, [lat, long])

  return (
    <div className="App">
     {(typeof data.main != 'undefined') ? (
      //  Pass weather props to child weather
       <Weather weatherData={data} />
     ) : (
       <main>
         <Dimmer active>
           <Loader>Loading...</Loader>
         </Dimmer>
       </main>
     )}
    </div>
  )
}