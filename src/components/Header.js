import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function Header() {

    // Pass ThemeContext object to the useContext hook
    const theme = useContext(ThemeContext)
    // Access theme state
    const darkMode = theme.state.darkMode

    return (
        <header className={`header ${darkMode ? 'header-dark' : 'header-light'}`}>
            Weather {''}
            <FontAwesomeIcon icon={faBug} />
            {''} Bug
        </header>
    )
}
