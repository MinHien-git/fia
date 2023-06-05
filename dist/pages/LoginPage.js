var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Section from "../components/Section/Section";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import ContentSection from "../components/ContentSection/ContentSection";
import ButtonSubmitForm from "../components/Button/ButtonSumitForm";
import axiosClient from "../api/axiosClient";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import { AuthContext } from "../context/authenticateContext";
import useScrollToTop from "../hook/useScrollToTop";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Card/Notification";
import Loader from "../components/Loader/Loader";
import InputField from "../components/InputForm/InputField";
import useSetTitle from "../hook/useSetTitle";
export default function LoginPage() {
    var _a = useState(""), email = _a[0], setEmail = _a[1];
    var _b = useState(""), password = _b[0], setPassword = _b[1];
    var _c = useToggleNavbar(), navbarBlock = _c[0], clearNavbarBlock = _c[1];
    var _d = useContext(AuthContext), auth = _d.auth, login = _d.login;
    var navigate = useNavigate();
    var _e = useState(React.createElement(React.Fragment, null)), notification = _e[0], setNotification = _e[1];
    var _f = useState(React.createElement(React.Fragment, null)), load = _f[0], setLoader = _f[1];
    useScrollToTop(0, 0);
    useSetTitle("Fya | Login");
    useEffect(function () {
        clearNavbarBlock();
    }, []);
    var handleSubmit = function (e) {
        e.preventDefault();
        function postData() {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    setLoader(Loader);
                    request = axiosClient.post("/login", {
                        email: email,
                        password: password,
                    });
                    request.then(function (result) {
                        var success = result.success, message = result.message, response_status = result.response_status, data = result.data, pagination = result.pagination;
                        setNotification(React.createElement(Notification, { message: success
                                ? "Login successfully"
                                : "Login fail,please check your email and password", status: success ? "success" : "fail" }));
                        if (data && success) {
                            login(data);
                            return navigate("/");
                        }
                        setLoader(React.createElement(React.Fragment, null));
                    });
                    return [2 /*return*/];
                });
            });
        }
        if (email && password)
            postData();
    };
    var handleName = function (e) {
        setEmail(e.currentTarget.value);
    };
    var handlePassword = function (e) {
        setPassword(e.currentTarget.value);
    };
    return (React.createElement(React.Fragment, null,
        load,
        React.createElement(ContentSection, { className: "primary-login" },
            React.createElement(Section, { className: "login-page-primary" },
                notification,
                React.createElement("h1", { className: "deep-blue-clrs" }, "Login"),
                React.createElement("hr", null),
                React.createElement("div", { className: "login-container-section flex" },
                    React.createElement("form", { className: "login-form-section flex", onSubmit: handleSubmit },
                        React.createElement(InputField, { type: "text", id: "name", label: "name", formEvent: handleName }),
                        React.createElement(InputField, { type: "password", id: "password", label: "password", formEvent: handlePassword }),
                        React.createElement(ButtonSubmitForm, { button_string: "login" })),
                    React.createElement("p", null,
                        "Don't have account yet?",
                        React.createElement(Link, { to: "/register" }, "register")))))));
}
//# sourceMappingURL=LoginPage.js.map