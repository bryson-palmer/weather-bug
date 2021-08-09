import React, { useContext } from "react"
import { ThemeContext } from '../contexts/ThemeContext'
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
        <nav className={`nav ${darkMode ? 'nav-dark' : 'nav-light'}`}>
            <FontAwesomeIcon icon={faTemperatureHigh} />
            <FontAwesomeIcon icon={faViruses} />
            <FontAwesomeIcon icon={faSmog} />
            <SwitchButton />
        </nav>
    )
}
