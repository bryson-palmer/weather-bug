import React from 'react'
import './styles.css'
import moment from 'moment'

// The weather card
const CardExampleCard = ({weatherData}) => (
   
    <main className='main'>
        <header className='header'>City Name: {weatherData.name}</header>
        <section>
            <p className='day'>Day: {moment().format('dddd')}</p>
        </section>
        <section>
            <p className='temp'>Temperature: {weatherData.main.temp} &deg;C</p>
        </section>
        {/* <p>Temperature: {weatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Humidity: {weatherData.main.humidity}</p>
        <p>Date: {moment().format('LL')}</p> */}
    </main>
   
)

export default CardExampleCard
