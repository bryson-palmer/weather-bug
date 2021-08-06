import React, { useContext } from "react"
import { ThemeContext } from '../contexts/ThemeContext'
import SwitchButton from './ThemeButton'
import '../App.css'

export default function NavBar() {
    
    // Pass ThemeContext object to the useContext hook
    const theme = useContext(ThemeContext)
    // Access theme state
    const darkMode = theme.state.darkMode

    return (
        <nav className={`nav ${darkMode ? 'nav-dark' : 'nav-light'}`}>
            I am the nav bar.
            <SwitchButton />
        </nav>
    )
}
