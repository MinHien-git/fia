import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AgenciesPage from "./pages/AgenciesPage";
import AgencyPage from "./pages/AgencyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Router, null,
            React.createElement(Navbar, null),
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(LandingPage, null) }),
                React.createElement(Route, { path: "/agency" },
                    React.createElement(Route, { path: "", element: React.createElement(AgenciesPage, null) })),
                React.createElement(Route, { path: "agency/:id", element: React.createElement(AgencyPage, null) }),
                React.createElement(Route, { path: "/login", element: React.createElement(LoginPage, null) }),
                React.createElement(Route, { path: "/register", element: React.createElement(RegisterPage, null) })),
            React.createElement(Footer, null))));
}
export default App;
//# sourceMappingURL=App.js.map