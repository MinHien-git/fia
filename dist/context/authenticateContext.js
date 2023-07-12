import React, { useState } from "react";
export var AuthContext = React.createContext(null);
export function AuthProvider(_a) {
    var children = _a.children;
    var _b = useState(undefined), auth = _b[0], setAuth = _b[1];
    var logout = function () {
        if (auth) {
            setAuth(undefined);
        }
    };
    var login = function (user) {
        setAuth(user);
    };
    return (React.createElement(AuthContext.Provider, { value: { auth: auth, logout: logout, login: login } }, children));
}
//# sourceMappingURL=authenticateContext.js.map