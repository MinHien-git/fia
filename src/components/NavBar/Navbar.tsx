import React, { useState, useEffect, useContext } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import ButtonComponent from "../Button/ButtonComponent";
import SearchForm from "../SearchForm/SearchForm";
import { useScrollBlock } from "../../hook/useStopScroll";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ButtonComponentLink from "../Button/ButtonComponentLink";
import { AuthContext } from "../../context/authenticateContext";
import {
  AuthContextType,
  Request_Interface,
  User_Interface,
} from "@/interfaces/app_interfaces";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
export default function Navbar() {
  const [toggle, setToggle] = useState<Boolean>(false);
  const { auth, login, logout } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  useEffect(() => {
    toggle ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
  }, [toggle]);

  const ToggleBurger = () => {
    setToggle(!toggle);
  };

  const logoutEvent = () => {
    logout();
    setToggle(false);
    disableBodyScroll(document.body);
    return navigate("/");
  };

  const HandleClickEvent = () => {
    setToggle(false);
    disableBodyScroll(document.body);
  };

  return (
    <nav
      id="primary-navigation-bar"
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
          <span>fya</span>
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
            <Link
              className="text-color"
              to="./login"
              onClick={HandleClickEvent}
            >
              For Client
            </Link>
          </li>
          {auth?.type === "AGENCY" ? (
            <li>
              <Link
                className="text-color"
                to="./login"
                onClick={HandleClickEvent}
              >
                For Agency
              </Link>
            </li>
          ) : null}
          <li>
            <SearchForm />
          </li>
          <li>
            <ButtonComponent button_string={"Post your Project"} />
          </li>
          {!auth ? (
            <li>
              <ButtonComponentLink
                button_string={"Login or Resigter"}
                to="./register"
                onClickEvent={HandleClickEvent}
              />
            </li>
          ) : (
            <>
              {auth?.type === "CLIENT" ? (
                <li>
                  <Link
                    to="./business"
                    className={clsx("btn business-plan md")}
                    typeof="button"
                    onClick={HandleClickEvent}
                  >
                    Business Plan
                  </Link>
                </li>
              ) : auth?.type === "AGENCY" ? (
                <li>
                  <Link
                    to={`./business/${auth._id}`}
                    className={clsx("btn business-plan md")}
                    typeof="button"
                    onClick={HandleClickEvent}
                  >
                    Business Pages
                  </Link>
                </li>
              ) : null}
              <li>
                <button
                  onClick={logoutEvent}
                  className={clsx("btn deep-blue-bg white-clrs md")}
                  typeof="button"
                  style={{ width: "9rem", background: "#c91c4a" }}
                >
                  log out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
