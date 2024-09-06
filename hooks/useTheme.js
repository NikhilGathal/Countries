import { useContext } from "react";
import { Themecontext } from "../contexts/ThemeContext";
export const useTheme = () => useContext(Themecontext)
