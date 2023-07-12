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
import React, { useState, useContext } from "react";
import Popup from "./Popup";
import InputField from "../InputForm/InputField";
import clsx from "clsx";
import ButtonComponent from "../Button/ButtonComponentLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/authenticateContext";
import TextAreaField from "../InputForm/TextAreaField";
import { useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import ButtonSubmitForm from "../Button/ButtonSumitForm";
export default function FeedbackPopup(_a) {
    var _b = _a.toggle, toggle = _b === void 0 ? false : _b, close = _a.close;
    var id = useParams().id;
    var _c = useState(""), title = _c[0], setTitle = _c[1];
    var _d = useState(""), description = _d[0], setDescription = _d[1];
    var _e = useState(0), rate = _e[0], setRate = _e[1];
    var auth = useContext(AuthContext).auth;
    var handleSubmit = function (e) {
        e.preventDefault();
        function postData() {
            return __awaiter(this, void 0, void 0, function () {
                var param, request;
                return __generator(this, function (_a) {
                    param = {
                        user_id: auth === null || auth === void 0 ? void 0 : auth._id,
                        page_id: id,
                        rate: rate,
                        title: title,
                        description: description,
                    };
                    request = axiosClient.post("/feedback/".concat(auth === null || auth === void 0 ? void 0 : auth._id, "/").concat(id), param);
                    request.then(function (result) {
                        var success = result.success, message = result.message, response_status = result.response_status, data = result.data, pagination = result.pagination;
                        setTitle("");
                        setDescription("");
                        close();
                    });
                    return [2 /*return*/];
                });
            });
        }
        postData();
    };
    var onChangeTitle = function (event) {
        setTitle(event.target.value);
    };
    var onChangeDescription = function (event) {
        setDescription(event.target.value);
    };
    var changeRate = function (value) {
        setRate(value);
    };
    return (React.createElement(Popup, { className: clsx(toggle && "active feedback-popup") },
        React.createElement("div", { className: "service-popup-container" },
            React.createElement("form", { className: "service-popup", onSubmit: handleSubmit }, auth ? (React.createElement(React.Fragment, null,
                React.createElement("h3", null, "Write feedback"),
                React.createElement("ul", { className: "flex" },
                    React.createElement("li", null,
                        React.createElement("input", { type: "radio", name: "rating", id: "start-1" }),
                        React.createElement("label", { htmlFor: "start-1", onClick: function () { return changeRate(1); } })),
                    React.createElement("li", null,
                        React.createElement("input", { type: "radio", name: "rating", id: "start-2" }),
                        React.createElement("label", { htmlFor: "start-2", onClick: function () { return changeRate(2); } })),
                    React.createElement("li", null,
                        React.createElement("input", { type: "radio", name: "rating", id: "start-3" }),
                        React.createElement("label", { htmlFor: "start-3", onClick: function () { return changeRate(3); } })),
                    React.createElement("li", null,
                        React.createElement("input", { type: "radio", name: "rating", id: "start-4" }),
                        React.createElement("label", { htmlFor: "start-4", onClick: function () { return changeRate(4); } })),
                    React.createElement("li", null,
                        React.createElement("input", { type: "radio", name: "rating", id: "start-5" }),
                        React.createElement("label", { htmlFor: "start-5", onClick: function () { return changeRate(5); } }))),
                React.createElement(InputField, { id: "feedback-title-area", label: "title", formEvent: onChangeTitle, value: title }),
                React.createElement(TextAreaField, { id: "feedback-area", label: "feedback", value: description, onChange: onChangeDescription }),
                React.createElement(ButtonSubmitForm, { button_string: "Send feedback" }))) : (React.createElement(React.Fragment, null,
                React.createElement("h3", null, "You must login first"),
                React.createElement(InputField, { type: "text", id: "email", label: "email" }),
                React.createElement(InputField, { type: "password", id: "password", label: "password" }),
                React.createElement(ButtonComponent, { button_string: "Login" }),
                React.createElement("p", { className: "register-section" },
                    "Don't have an account yet? ",
                    React.createElement("span", null, "register"))))),
            React.createElement("div", { className: "close-button" },
                React.createElement(FontAwesomeIcon, { icon: faXmark, onClick: close })))));
}
//# sourceMappingURL=FeedbackPopup.js.map