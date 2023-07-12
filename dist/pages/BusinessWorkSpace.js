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
import ContentSection from "../components/ContentSection/ContentSection";
import React, { useState, useEffect, useContext } from "react";
import "./BusinessWorkSpace.scss";
import axiosClient from "../api/axiosClient";
import Loader from "../components/Loader/Loader";
import { AuthContext } from "../context/authenticateContext";
import { Link, useNavigate } from "react-router-dom";
import PageCard from "./PageCard";
import useScrollToTop from "../hook/useScrollToTop";
export default function BusinessWorkSpace() {
    var _a = useState([]), pages = _a[0], setPages = _a[1];
    var _b = useState(React.createElement(React.Fragment, null)), load = _b[0], setLoader = _b[1];
    var navigate = useNavigate();
    var _c = useContext(AuthContext), auth = _c.auth, login = _c.login;
    useScrollToTop(0, 0);
    useEffect(function () {
        function postData() {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    setLoader(Loader);
                    request = axiosClient.get("/business/".concat(auth === null || auth === void 0 ? void 0 : auth._id, "/workspaces"), {});
                    request.then(function (result) {
                        var success = result.success, message = result.message, response_status = result.response_status, data = result.data, pagination = result.pagination;
                        if (data) {
                            var page = data[0].page;
                            setPages(page);
                        }
                        if (success) {
                            setLoader(React.createElement(React.Fragment, null));
                        }
                    });
                    setLoader(React.createElement(React.Fragment, null));
                    return [2 /*return*/];
                });
            });
        }
        if (auth) {
            postData();
        }
        else {
            navigate("/");
        }
    }, []);
    return (React.createElement(ContentSection, null,
        React.createElement(Section, { className: "business-pages-section" },
            React.createElement("h2", null, "welcome to workspace"),
            React.createElement("div", { className: "form-section-button-container" }, pages.length === 0 ? (React.createElement(React.Fragment, null,
                React.createElement("p", null, "You don't have any page in your workspace"),
                React.createElement(Link, { to: "/business/".concat(auth === null || auth === void 0 ? void 0 : auth._id, "/create-page"), id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs", relative: "route" }, "Create page"))) : (React.createElement(React.Fragment, null,
                React.createElement("p", null,
                    "You have ",
                    pages.length,
                    " in your workspace"),
                React.createElement("div", { className: "all-page-container" },
                    React.createElement("div", { className: "pages-container center flex" }, pages.map(function (v) { return (React.createElement(PageCard, { id: v._id, title: v.title, tag: v.tags, desc: v.description })); }))),
                React.createElement(Link, { to: "/business/".concat(auth === null || auth === void 0 ? void 0 : auth._id, "/create-page"), id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs", relative: "route" }, "Add pages")))))));
}
//# sourceMappingURL=BusinessWorkSpace.js.map