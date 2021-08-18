import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import SwitchButton from './ThemeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faBars } from '@fortawesome/free-solid-svg-icons'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './styles.css'

export default function Header() {

    // Pass ThemeContext object to the useContext hook
    const theme = useContext(ThemeContext)
    // Access theme state
    const darkMode = theme.state.darkMode

    return (
        <header className={`header ${darkMode ? 'header-dark' : 'header-light'}`}>
            <FontAwesomeIcon icon={faBars}/>
            <div>
                Weather {''}
                <FontAwesomeIcon icon={faBug} />
                {''} Bug
            </div>
            <SwitchButton />
        </header>
    )
}
