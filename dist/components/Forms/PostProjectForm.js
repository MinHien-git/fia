var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import "./Form.scss";
import Tag from "../Tag/tag";
import React, { useState, useEffect, useContext } from "react";
import InputField from "../InputForm/InputField";
import DoubleSlider from "../InputForm/DoubleSlider";
import TextAreaField from "../InputForm/TextAreaField";
import { AuthContext } from "../../context/authenticateContext";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";
export default function PostProjectForm(_a) {
    var closeForm = _a.closeForm;
    var _b = useState(0), currentPage = _b[0], setCurrentPage = _b[1];
    var auth = useContext(AuthContext).auth;
    var maxPage = auth ? 6 : 7;
    var navigate = useNavigate();
    var _c = useState([]), tags = _c[0], setTags = _c[1];
    var _d = useState(""), location = _d[0], setLocation = _d[1];
    var _e = useState(""), description = _e[0], setDescription = _e[1];
    var _f = useState(""), title = _f[0], setTitle = _f[1];
    var _g = useState(), email = _g[0], setEmail = _g[1];
    var _h = useState(""), name = _h[0], setName = _h[1];
    var _j = useState(4), amount = _j[0], setAmount = _j[1];
    useEffect(function () {
        var newPage = document.getElementById("post-section-" + currentPage);
        newPage === null || newPage === void 0 ? void 0 : newPage.classList.add("active");
    }, [currentPage]);
    var resetData = function () {
        setTags([]);
        setCurrentPage(0);
        setAmount(4);
        setTitle("");
        setDescription("");
        setEmail("");
    };
    var NextPage = function () {
        if (currentPage < maxPage - 1) {
            var oldPage = document.getElementById("post-section-" + currentPage);
            oldPage === null || oldPage === void 0 ? void 0 : oldPage.classList.remove("active");
            setCurrentPage(currentPage + 1);
        }
    };
    var constChooseOption = function (value) {
        setAmount(value);
    };
    var onChangeLocation = function (event) {
        setLocation(event.target.value);
    };
    var onChangeName = function (event) {
        setName(event.target.value);
    };
    var onChangeDescription = function (event) {
        setDescription(event.target.value);
    };
    var handleService = function (value) {
        if (tags.includes(value)) {
            setTags(function (cur) { return cur.filter(function (v) { return v !== value; }); });
        }
        else {
            setTags(function (cur) { return __spreadArray(__spreadArray([], cur, true), [value], false); });
        }
    };
    var onChangeTitle = function (event) {
        setTitle(event.target.value);
    };
    var onChangeEmail = function (event) {
        setEmail(event.target.value);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        function postData() {
            return __awaiter(this, void 0, void 0, function () {
                var param, request;
                return __generator(this, function (_a) {
                    param = {
                        location: location,
                        tags: tags,
                        title: title,
                        description: description,
                        amount: amount,
                        name: name,
                    };
                    if (auth) {
                        param = __assign(__assign({}, param), { source: auth._id });
                    }
                    else {
                        param = __assign(__assign({}, param), { source: email });
                    }
                    request = axiosClient.post("postproject", param);
                    request.then(function (result) {
                        var success = result.success, message = result.message, response_status = result.response_status, data = result.data, pagination = result.pagination;
                        resetData();
                        closeForm();
                    });
                    return [2 /*return*/];
                });
            });
        }
        postData();
    };
    var PreviousPage = function () {
        if (currentPage > 0) {
            var oldPage = document.getElementById("post-section-" + currentPage);
            oldPage === null || oldPage === void 0 ? void 0 : oldPage.classList.remove("active");
            setCurrentPage(currentPage - 1);
        }
    };
    return (React.createElement("form", { className: "form-section flex relative", onSubmit: handleSubmit },
        React.createElement("div", { className: "section-container flex", id: "post-project-form" },
            React.createElement("section", { className: "flex active", id: "post-section-0" },
                React.createElement("h2", { className: "text-center logo" }, "Fya"),
                React.createElement("div", { className: "tags-container flex" },
                    React.createElement("p", { className: "text-center" }, "Please fill out the form so we can find the right agencies for your need"))),
            React.createElement("section", { className: "flex", id: "post-section-1" },
                React.createElement("h3", null, "What service do you need"),
                React.createElement("ul", { className: "tags-container flex" },
                    React.createElement(Tag, { tag_value: "Brand Management", tag_id: "BM_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("BM");
                        } }),
                    React.createElement(Tag, { tag_value: "Media Relations", tag_id: "MRL_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("MRL");
                        } }),
                    React.createElement(Tag, { tag_value: "Social media management", tag_id: "SMM_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("SMM");
                        } }),
                    React.createElement(Tag, { tag_value: "Outreach", tag_id: "OR_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("OR");
                        } }),
                    React.createElement(Tag, { tag_value: "Market Research", tag_id: "MR_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("MR");
                        } }),
                    React.createElement(Tag, { tag_value: "Event Planning", tag_id: "EP_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("EP");
                        } }),
                    React.createElement(Tag, { tag_value: "Communication Training", tag_id: "CT_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("CT");
                        } }),
                    React.createElement(Tag, { tag_value: "Write internal ads", tag_id: "WIA_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("WIA");
                        } }),
                    React.createElement(Tag, { tag_value: "Content Marketing", tag_id: "CM_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("CM");
                        } }),
                    React.createElement(Tag, { tag_value: "Print Ads", tag_id: "PA_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("PA");
                        } }),
                    React.createElement(Tag, { tag_value: "TVC", tag_id: "TVC_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("TVS");
                        } }),
                    React.createElement(Tag, { tag_value: "FB & CC MARKETING", tag_id: "FBC_", name: "services_", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("FBC");
                        } }))),
            React.createElement("section", { className: "flex", id: "post-section-2" },
                React.createElement("h3", null, "Which location of Agency do you want to work with?"),
                React.createElement(InputField, { id: "name-2", label: "name", formEvent: onChangeName, value: name }),
                React.createElement(InputField, { id: "location-1", label: "location", formEvent: onChangeLocation, value: location })),
            React.createElement("section", { className: "flex", id: "post-section-3" },
                React.createElement("h3", null, "Which size of agencies would you prefer?"),
                React.createElement("div", { className: "ratio-input-container" },
                    React.createElement("div", { className: "ratio-input", onClick: function () { return constChooseOption(1); } },
                        React.createElement("input", { type: "radio", id: "small", name: "size", value: "small" }),
                        React.createElement("label", { htmlFor: "small" }, "Small agencies (1-10)")),
                    React.createElement("div", { className: "ratio-input", onClick: function () { return constChooseOption(2); } },
                        React.createElement("input", { type: "radio", id: "medium", name: "size", value: "medium" }),
                        React.createElement("label", { htmlFor: "medium" }, "Medium agencies (11-50)")),
                    React.createElement("div", { className: "ratio-input", onClick: function () { return constChooseOption(3); } },
                        React.createElement("input", { type: "radio", id: "large", name: "size", value: "large" }),
                        React.createElement("label", { htmlFor: "large" }, "Large agencies (51+)")),
                    React.createElement("div", { className: "ratio-input", onClick: function () { return constChooseOption(4); } },
                        React.createElement("input", { type: "radio", id: "none", name: "size", value: "none" }),
                        React.createElement("label", { htmlFor: "none" }, "I don't care")))),
            React.createElement("section", { className: "flex", id: "post-section-4" },
                React.createElement("h3", null, "What range of budget do you want to find?"),
                React.createElement(DoubleSlider, null)),
            React.createElement("section", { className: "flex", id: "post-section-5" },
                React.createElement("h3", null, "Tell us about your project"),
                React.createElement("div", null,
                    React.createElement(TextAreaField, { id: "title", label: "project title", classNames: "title-textarea", onChange: onChangeTitle, value: title }),
                    React.createElement(TextAreaField, { id: "description", label: "project description ", classNames: "description-textarea", onChange: onChangeDescription, value: description }))),
            !auth ? (React.createElement("section", { className: "flex", id: "post-section-6" },
                React.createElement("h3", null, "Last Step: Let us know we to notified you when we found your best match agency"),
                React.createElement(InputField, { type: "email", id: "email", label: "email", formEvent: onChangeEmail, value: email }))) : null),
        currentPage === 0 ? (React.createElement("div", { className: "form-section-button-container" },
            React.createElement("div", { id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs w100", onClick: NextPage }, "Let's start"))) : (React.createElement("div", { className: "form-section-button-container" },
            currentPage !== maxPage - 1 ? (React.createElement("div", { id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs w100", onClick: NextPage }, "next")) : (React.createElement("button", { id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs w100", type: "submit" }, "submit")),
            React.createElement("div", { id: "postproject-previous-btn", className: "btn stop", onClick: PreviousPage }, "previous")))));
}
//# sourceMappingURL=PostProjectForm.js.map