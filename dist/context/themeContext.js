import * as React from "react";
export var ThemeContext = React.createContext(null);
export function ThemeProvider(_a) {
    var children = _a.children;
    var _b = React.useState("light"), themeMode = _b[0], setThemeMode = _b[1];
    return (React.createElement(ThemeContext.Provider, { value: { theme: themeMode, changeTheme: setThemeMode } }, children));
}
//# sourceMappingURL=themeContext.js.map