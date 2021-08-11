import React, { useContext } from "react"
import { ThemeContext } from '../contexts/ThemeContext'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import SwitchButton from './ThemeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh, faViruses, faSmog } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function NavBar() {
    
    // Pass ThemeContext object to the useContext hook
    const theme = useContext(ThemeContext)
    // Access theme state
    const darkMode = theme.state.darkMode

    return (
        <nav className={`nav ${darkMode ? 'nav-dark' : 'nav-light'}`} >
            <ButtonGroup>
                <Button className='navButtons'>
                    <FontAwesomeIcon 
                        icon={faTemperatureHigh} 
                        className={`navButton ${darkMode ? 'navButton-dark' : 'navButton-light'}` } 
                        aria-label='weather and forecast'
                    /> 
                    <Typography className={`navType ${darkMode ? 'navType-dark' : 'navType-light'}`}>
                        Weather
                    </Typography>
                </Button>
                <Button className='navButtons'>
                    <FontAwesomeIcon 
                        icon={faViruses} 
                        className={`navButton ${darkMode ? 'navButton-dark' : 'navButton-light'}` } 
                        aria-label='covid-19'
                    />
                    <Typography className={`navType ${darkMode ? 'navType-dark' : 'navType-light'}`}>
                        Covid-19
                    </Typography>
                </Button>
                <Button className='navButtons'>
                    <FontAwesomeIcon 
                        icon={faSmog} 
                        className={`navButton ${darkMode ? 'navButton-dark' : 'navButton-light'}` }
                        aria-label='air quality' 
                    />
                     <Typography className={`navType ${darkMode ? 'navType-dark' : 'navType-light'}`}>
                        Air Quality
                    </Typography>
                </Button>
            </ButtonGroup>
            <SwitchButton />
        </nav>
    )
}
