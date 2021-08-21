import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import SwitchButton from './ThemeButton'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function Header() {

    // Pass ThemeContext object to the useContext hook
    const theme = useContext(ThemeContext)
    // Access theme state
    const darkMode = theme.state.darkMode

    return (
        <header className={`header ${darkMode ? 'dark' : 'light'}`}>
            <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon fontSize='large' />
            </IconButton>
            <Typography variant="h5" className='title'>
                Weather {''}
                <FontAwesomeIcon icon={faBug} />
                {''} Bug
            </Typography>
            <SwitchButton />
        </header>
    )
}
