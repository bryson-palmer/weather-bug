import React from 'react'
import './styles.css'
import moment from 'moment'
import { Button } from 'semantic-ui-react'

const refresh = () => {
    window.location.reload()
}

// The weather card
const CardExampleCard = ({weatherData}) => (
    <main className='main'>

        <header className='top'>
            <p className='header'>{weatherData.name}</p>
            <Button className='button' inverted color='blue' circular icon='refresh' onClick={refresh} />
        </header>
        
        <section className='flex'>
            <p className='day'>{moment().format('dddd')}, <span className='day'>{moment().format('LL')}</span></p>
            <p className='description'>{weatherData.weather[0].main}</p>
        </section>

        <section className='flex'>
            <p className='temp'>Temperature: {weatherData.main.temp} &deg;C</p>
            <p className='temp'>Humidity: {weatherData.main.humidity} %</p>
        </section>

        <section className='flex'>
            <p className='sunrise-sunset'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p className='sunrise-sunset'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        </section>

    </main>
   
)

export default CardExampleCard
