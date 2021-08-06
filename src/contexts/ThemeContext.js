import React, { createContext, useReducer } from "react"

// Context object
export const ThemeContext = createContext()

// Initial state value
const initialState = {
    darkMode: true
}

// Reducer function
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'LIGHTMODE':
            return { darkMode: false }
        case 'DARKMODE':
            return { darkMode: true }
        default:
            return state;
    }
}

// Higher order component 
// Provider
export function ThemeProvider(props) {
    // useReducer hook
    const [state, dispatch] = useReducer(themeReducer, initialState)
    return (
        <ThemeContext.Provider value={{ state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
