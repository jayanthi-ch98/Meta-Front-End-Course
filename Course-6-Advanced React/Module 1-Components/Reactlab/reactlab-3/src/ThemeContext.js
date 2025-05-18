import { createContext, useContext,useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggle = () => {
   (theme==="light")?setTheme("dark"):setTheme("light")
}
const themeValue = {
    theme,
    toggle,

}
    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);
