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
import React, { useEffect, useState, useContext } from "react";
import useScrollToTop from "../hook/useScrollToTop";
import axiosClient from "../api/axiosClient";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import Section from "../components/Section/Section";
import ContentSection from "../components/ContentSection/ContentSection";
import "./CreatePage.scss";
import InputField from "../components/InputForm/InputField";
import Tag from "../components/Tag/tag";
import TextAreaField from "../components/InputForm/TextAreaField";
import { AuthContext } from "../context/authenticateContext";
import { useNavigate } from "react-router-dom";
export default function CreatePage() {
    var _a = useToggleNavbar(), navbarBlock = _a[0], clearNavbarBlock = _a[1];
    var _b = useState(0), currentPage = _b[0], setCurrentPage = _b[1];
    var pageLimit = 4;
    var navigate = useNavigate();
    var auth = useContext(AuthContext).auth;
    var _c = useState([]), tags = _c[0], setTags = _c[1];
    var _d = useState(""), location = _d[0], setLocation = _d[1];
    var _e = useState(""), language = _e[0], setLanguge = _e[1];
    var _f = useState(""), description = _f[0], setDescription = _f[1];
    var _g = useState(""), title = _g[0], setTitle = _g[1];
    var _h = useState(""), name = _h[0], setName = _h[1];
    // title: string;
    // name: string;
    // description: string;
    // userId: string;
    // services: Array<Service> = [];
    // tags: Array<string> = [];
    useScrollToTop(0, 0);
    clearNavbarBlock();
    var resetData = function () {
        setTags([]);
        setCurrentPage(0);
        setTitle("");
        setDescription("");
    };
    useEffect(function () {
        if (!auth) {
            return navigate("/");
        }
        var section = document.getElementById("business-section-".concat(currentPage));
        section === null || section === void 0 ? void 0 : section.classList.add("active");
        window.scrollTo(0, 0);
    }, [currentPage]);
    var moveNextPage = function () {
        if (currentPage < pageLimit) {
            var section = document.getElementById("business-section-".concat(currentPage));
            section === null || section === void 0 ? void 0 : section.classList.remove("active");
            setCurrentPage(currentPage + 1);
        }
    };
    var onChangeLocation = function (event) {
        setLocation(event.target.value);
    };
    var onChangeLanguage = function (event) {
        setLanguge(event.target.value);
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
    var handleSubmit = function (e) {
        e.preventDefault();
        function postData() {
            return __awaiter(this, void 0, void 0, function () {
                var param, request;
                return __generator(this, function (_a) {
                    param = {
                        title: title,
                        name: name,
                        description: description,
                        language: language,
                        location: location,
                        _id: auth === null || auth === void 0 ? void 0 : auth._id,
                        tags: tags,
                    };
                    request = axiosClient.post("/business/".concat(auth === null || auth === void 0 ? void 0 : auth._id, "/page/create"), param);
                    request.then(function (result) {
                        var success = result.success, message = result.message, response_status = result.response_status, data = result.data, pagination = result.pagination;
                        resetData();
                        if (auth)
                            return navigate("/business/".concat(auth._id));
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
    return (React.createElement(ContentSection, { className: "business-page-primary relative" },
        React.createElement(Section, { className: "business-page-start-section", id: "business-section-0" },
            React.createElement("img", { className: "wave", src: "./wave.svg", alt: "wave" }),
            React.createElement("h2", null, "Please fill out the form of your business"),
            React.createElement("div", { className: "form-section-button-container" },
                React.createElement("div", { id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs w100", onClick: moveNextPage }, "Let's start"))),
        React.createElement(Section, { className: "business-page-tags-section", id: "business-section-1" },
            React.createElement("h2", null, "Your business infomation"),
            React.createElement("div", { className: "form-section-button-container flex" },
                React.createElement(InputField, { id: "name", label: "company name", formEvent: onChangeName })),
            React.createElement("div", { className: "select-tag-container" },
                React.createElement("p", null, "Which fields do you want to provide?"),
                React.createElement("ul", { className: "tags-container flex" },
                    React.createElement(Tag, { tag_value: "Brand Management", tag_id: "BM", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("BM");
                        } }),
                    React.createElement(Tag, { tag_value: "Media Relations", tag_id: "MRL", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("MRL");
                        } }),
                    React.createElement(Tag, { tag_value: "Social media management", tag_id: "SMM", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("SMM");
                        } }),
                    React.createElement(Tag, { tag_value: "Outreach", tag_id: "OR", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("OR");
                        } }),
                    React.createElement(Tag, { tag_value: "Market Research", tag_id: "MR", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("MR");
                        } }),
                    React.createElement(Tag, { tag_value: "Event Planning", tag_id: "EP", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("EP");
                        } }),
                    React.createElement(Tag, { tag_value: "Communication Training", tag_id: "CT", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("CT");
                        } }),
                    React.createElement(Tag, { tag_value: "Write internal ads", tag_id: "WIA", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("WIA");
                        } }),
                    React.createElement(Tag, { tag_value: "Content Marketing", tag_id: "CM", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("CM");
                        } }),
                    React.createElement(Tag, { tag_value: "Print Ads", tag_id: "PA", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("PA");
                        } }),
                    React.createElement(Tag, { tag_value: "TVC", tag_id: "TVC", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("TVS");
                        } }),
                    React.createElement(Tag, { tag_value: "FB & CC MARKETING", tag_id: "FBC", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("FBC");
                        } }))),
            React.createElement("div", { className: "form-section-button-container" },
                React.createElement("div", { id: "infomation-next-btn", className: "btn deep-blue-bg white-clrs w100", onClick: moveNextPage }, "Next"))),
        React.createElement(Section, { className: "business-page-start-section", id: "business-section-2" },
            React.createElement("img", { className: "wave", src: "./wave.svg", alt: "wave" }),
            React.createElement("h2", null, "Let's setup your bussiness page"),
            React.createElement("p", null, "fill out the form so user can easily find your bussiness"),
            React.createElement("div", { className: "form-section-button-container" },
                React.createElement("div", { id: "start-next-btn", className: "btn deep-blue-bg white-clrs w100", onClick: moveNextPage }, "Let's start"))),
        React.createElement(Section, { className: "business-page-infomation-section", id: "business-section-3" },
            React.createElement("h2", null, "Write short description about your bussiness"),
            React.createElement(TextAreaField, { id: "short-description", label: "short description", classNames: "short-description-textarea", onChange: onChangeTitle }),
            React.createElement(TextAreaField, { id: "description", label: "description", classNames: "description-textarea", onChange: onChangeDescription }),
            React.createElement("div", { className: "form-section-button-container" },
                React.createElement("div", { id: "description-next-btn", className: "btn deep-blue-bg white-clrs w100", onClick: moveNextPage }, "Next"))),
        React.createElement(Section, { className: "business-page-language-section", id: "business-section-4" },
            React.createElement("img", { className: "wave", src: "./wave.svg", alt: "wave" }),
            React.createElement("h2", null, "Let's setup language and location"),
            React.createElement("div", { className: "form-section-button-container" },
                React.createElement("p", null, "Where is your company located?"),
                React.createElement(InputField, { id: "location", label: "your company location", formEvent: onChangeLocation })),
            React.createElement("div", { className: "form-section-button-container" },
                React.createElement("p", null, "Which languages can you communicate?"),
                React.createElement(InputField, { id: "language", label: "language", formEvent: onChangeLanguage })),
            React.createElement("form", { className: "form-section-button-container", onSubmit: handleSubmit },
                React.createElement("button", { id: "language-next-btn", className: "btn deep-blue-bg white-clrs w100", type: "submit" }, "Submit page")))));
}
//# sourceMappingURL=CreatePage.js.map