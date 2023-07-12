import * as React from "react";
import { Theme, ThemeContextType } from "../interfaces/app_interfaces";

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = React.useState<Theme>("light");
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
