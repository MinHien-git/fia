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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import ContentSection from "../components/ContentSection/ContentSection";
import ButtonSubmitForm from "../components/Button/ButtonSumitForm";
import axiosClient from "../api/axiosClient";
export default function RegisterPage() {
    var _a = useState(""), name = _a[0], setName = _a[1];
    var _b = useState(""), password = _b[0], setPassword = _b[1];
    var _c = useState(""), email = _c[0], setEmail = _c[1];
    var _d = useState(""), city = _d[0], setCity = _d[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        function postData() {
            return __awaiter(this, void 0, void 0, function () {
                var request, data, success;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axiosClient.post("/signup/agencies", {
                                name: name,
                                email: email,
                                password: password,
                                location: city,
                                convertToAgencies: true,
                            })];
                        case 1:
                            request = _a.sent();
                            data = request.data, success = request.success;
                            console.log(request);
                            console.log(data, success);
                            return [2 /*return*/];
                    }
                });
            });
        }
        postData();
    };
    var handleEmail = function (e) {
        setEmail(e.currentTarget.value);
    };
    var handleName = function (e) {
        setName(e.currentTarget.value);
    };
    var handleCity = function (e) {
        setCity(e.currentTarget.value);
    };
    var handlePassword = function (e) {
        setPassword(e.currentTarget.value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ContentSection, { className: "primary-register" },
            React.createElement(Section, { className: "register-page-primary" },
                React.createElement("h1", null, "Register"),
                React.createElement("hr", null),
                React.createElement("div", { className: "register-container-section flex" },
                    React.createElement("form", { className: "login-form-section flex", onSubmit: handleSubmit },
                        React.createElement("div", { className: "grid input-container" },
                            React.createElement("input", { type: "text", id: "name", name: "name", placeholder: "name", onChange: handleName }),
                            React.createElement("label", { htmlFor: "name" }, "name")),
                        React.createElement("div", { className: "grid input-container" },
                            React.createElement("input", { type: "email", id: "email", name: "email", placeholder: "email", onChange: handleEmail }),
                            React.createElement("label", { htmlFor: "email" }, "email")),
                        React.createElement("div", { className: "grid input-container" },
                            React.createElement("input", { type: "password", id: "password", name: "password", placeholder: "password", onChange: handlePassword }),
                            React.createElement("label", { htmlFor: "password" }, "password")),
                        React.createElement("div", { className: "grid input-container" },
                            React.createElement("input", { id: "city", name: "city", placeholder: "city", onChange: handleCity }),
                            React.createElement("label", { htmlFor: "city" }, "city")),
                        React.createElement(ButtonSubmitForm, { button_string: "register" })),
                    React.createElement("p", null,
                        "Already have account?",
                        React.createElement(Link, { to: "/login" }, "login")))))));
}
//# sourceMappingURL=RegisterPage.js.map