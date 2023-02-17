import { useState, createContext } from "react";

const ThemeContext = createContext(); //trả về 2 Comp là Consumer và Provider

function ThemeProvider({ children }){
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "ligth" : "dark");
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }
