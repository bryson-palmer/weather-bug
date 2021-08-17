import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
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
        <FormGroup>
            <FormControlLabel
                control={<Switch checked={darkMode} onChange={onClick} color="primary" aria-label="theme switch" />}
                label={darkMode ? 
                    <FontAwesomeIcon icon={faSun}/> 
                    : 
                    <FontAwesomeIcon icon={faMoon}/>
                }
            />
        </FormGroup>
    )
}