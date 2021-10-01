import React from 'react'
let themeContext = React.createContext('light')
let ThemeProvider = themeContext.Provider;
let ThemeConsumer = themeContext.Consumer;
let userContext = React.createContext('Rakesh')
let UserProvider = userContext.Provider
let UserConsumer = userContext.Consumer
export { themeContext, ThemeProvider, ThemeConsumer, userContext, UserConsumer, UserProvider }