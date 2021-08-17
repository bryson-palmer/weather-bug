import React, { useContext } from "react"
import { ThemeContext } from '../contexts/ThemeContext'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTemperatureHigh, faViruses, faSmog } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function NavBar() {

    // Pass ThemeContext object to the useContext hook
    const theme = useContext(ThemeContext)
    // Access theme state
    const darkMode = theme.state.darkMode

    return (
        <nav className={`nav ${darkMode ? 'nav-dark' : 'nav-light'}`} >
            <div>
                <Button className='navButton'>
                    <FontAwesomeIcon
                        icon={faHome}
                        className={`navIcon ${darkMode ? 'navIcon-dark' : 'navIcon-light'}`}
                        aria-label='home screen'
                    />
                </Button>
                <Typography
                    className={`navType ${darkMode ? 'navType-dark' : 'navType-light'}`}
                    variant='subtitle2'
                >
                    Home
                </Typography>
            </div>

            <div>
                <Button className='navButton'>
                    <FontAwesomeIcon
                        icon={faTemperatureHigh}
                        className={`navIcon ${darkMode ? 'navIcon-dark' : 'navIcon-light'}`}
                        aria-label='weather and forecast'
                    />
                </Button>
                <Typography
                    className={`navType ${darkMode ? 'navType-dark' : 'navType-light'}`}
                    variant='subtitle2'
                >
                    Weather
                </Typography>
            </div>

            <div>
                <Button className='navButton'>
                    <FontAwesomeIcon
                        icon={faViruses}
                        className={`navIcon ${darkMode ? 'navIcon-dark' : 'navIcon-light'}`}
                        aria-label='covid-19'
                    />
                </Button>
                <Typography
                    className={`navType ${darkMode ? 'navType-dark' : 'navType-light'}`}
                    variant='subtitle2'
                >
                    Covid-19
                </Typography>
            </div>

            <div>
                <Button className='navButton'>
                    <FontAwesomeIcon
                        icon={faSmog}
                        className={`navIcon ${darkMode ? 'navIcon-dark' : 'navIcon-light'}`}
                        aria-label='air quality'
                    />
                </Button>
                <Typography
                    className={`navType ${darkMode ? 'navType-dark' : 'navType-light'}`}
                    variant='subtitle2'
                >
                    Air Quality
                </Typography>
            </div>
        </nav>
    )
}
