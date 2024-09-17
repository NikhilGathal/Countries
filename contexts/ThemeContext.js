import { createContext, useState } from "react";
export const Themecontext = createContext()
export function ThemeProvider({ children }) {
    // console.log(children);
    const [dark, setdark] = useState(JSON.parse(localStorage.getItem('isdarkmode')))
    return <Themecontext.Provider value={[dark, setdark]}>
        {children}
    </Themecontext.Provider>
}