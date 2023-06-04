import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import ButtonComponent from "../Button/ButtonComponent";
import SearchForm from "../SearchForm/SearchForm";
import { useScrollBlock } from "../../hook/useStopScroll";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function Navbar() {
  const [toggle, setToggle] = useState<Boolean>(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    toggle ? blockScroll() : allowScroll();
  }, [toggle]);
  const ToggleBurger = () => {
    setToggle(!toggle);
  };
  const HandleClickEvent = () => {
    setToggle(false);
  };

  return (
    <nav
      className={clsx(
        "flex primary-navigation margin-l0 margin-r0 white-bg",
        toggle && "active"
      )}
    >
      <div className="hamburger-lines" onClick={ToggleBurger}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <label className="search-bar" htmlFor="search-bar-check-box">
        <input type="checkbox" id="search-bar-check-box" />
        <div id="navbar-search-bar">
          <FontAwesomeIcon id="search-nav-icon" icon={faSearch} />
          <input id="search-bar-search" type="text" placeholder="search..." />
        </div>
      </label>
      <div className="logo">
        <Link to="./" onClick={HandleClickEvent}>
          <span>Fya</span>
        </Link>
      </div>
      <div className="navigation-items white-bg">
        <ul>
          <li>
            <Link
              className="text-color"
              to="./services"
              onClick={HandleClickEvent}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link className="text-color" to="./" onClick={HandleClickEvent}>
              For Client
            </Link>
          </li>
          <li>
            <Link className="text-color" to="./" onClick={HandleClickEvent}>
              For Agency
            </Link>
          </li>
          <li>
            <SearchForm />
          </li>
          <li>
            <ButtonComponent button_string={"Post your Project"} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
