import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import ButtonComponent from "../Button/ButtonComponent";
import SearchForm from "../SearchForm/SearchForm";
import { useScrollBlock } from "../../hook/useStopScroll";
import { Link } from "react-router-dom";
export default function Navbar() {
    var _a = useState(false), toggle = _a[0], setToggle = _a[1];
    var _b = useScrollBlock(), blockScroll = _b[0], allowScroll = _b[1];
    useEffect(function () {
        toggle ? blockScroll() : allowScroll();
    }, [toggle]);
    var ToggleBurger = function () {
        setToggle(!toggle);
    };
    var HandleClickEvent = function () {
        setToggle(false);
    };
    return (React.createElement("nav", { className: clsx("flex primary-navigation margin-l0 margin-r0 white-bg", toggle && "active") },
        React.createElement("div", { className: "hamburger-lines", onClick: ToggleBurger },
            React.createElement("span", { className: "line line1" }),
            React.createElement("span", { className: "line line2" }),
            React.createElement("span", { className: "line line3" })),
        React.createElement("label", { className: "search-bar", htmlFor: "search-bar-check-box" },
            React.createElement("input", { type: "checkbox", id: "search-bar-check-box" }),
            React.createElement("div", { id: "navbar-search-bar" },
                React.createElement(FontAwesomeIcon, { id: "search-nav-icon", icon: faSearch }),
                React.createElement("input", { id: "search-bar-search", type: "text", placeholder: "search..." }))),
        React.createElement("div", { className: "logo" },
            React.createElement(Link, { to: "./", onClick: HandleClickEvent },
                React.createElement("span", null, "Fya"))),
        React.createElement("div", { className: "navigation-items white-bg" },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(Link, { className: "text-color", to: "./services", onClick: HandleClickEvent }, "Our Services")),
                React.createElement("li", null,
                    React.createElement(Link, { className: "text-color", to: "./", onClick: HandleClickEvent }, "For Client")),
                React.createElement("li", null,
                    React.createElement(Link, { className: "text-color", to: "./", onClick: HandleClickEvent }, "For Agency")),
                React.createElement("li", null,
                    React.createElement(SearchForm, null)),
                React.createElement("li", null,
                    React.createElement(ButtonComponent, { button_string: "Post your Project" }))))));
}
//# sourceMappingURL=Navbar.js.map