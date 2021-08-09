import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import './styles.css'

export default function SwitchButton() {

    // Pass ThemeContext object to the useContext hook
    const theme = useContext(ThemeContext)
    // Access theme state
    const darkMode = theme.state.darkMode
    
    // Call dispatch function with correct type
    const onClick = () => {
        if (darkMode) {
            theme.dispatch({ type: 'LIGHTMODE' })
        } else {
            theme.dispatch({ type: 'DARKMODE' })
        }
    }

    return (
        <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`} onClick={onClick}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}