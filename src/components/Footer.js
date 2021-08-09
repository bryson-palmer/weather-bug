import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import './styles.css'

export default function Footer() {

    // Pass ThemeContext object to the useContext hook
    const theme = useContext(ThemeContext)
    // Access theme state
    const darkMode = theme.state.darkMode
    
    return (
        <footer className={`footer ${darkMode ? 'footer-dark' : 'footer-light'}`}>
            I am a Footer
        </footer>
    )
}
