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
import Section from "../components/Section/Section";
import Tag from "../components/Tag/tag";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import AgencyCard from "../components/Card/AgencyCard";
import useScrollToTop from "../hook/useScrollToTop";
import axiosClient from "../api/axiosClient";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import useSetTitle from "../hook/useSetTitle";
import { SearchContext } from "../context/searchContext";
export default function AgenciesPage() {
    var _a = useState([]), agencies = _a[0], setAgencies = _a[1];
    var _b = useState(), location = _b[0], setLocation = _b[1];
    var _c = useState([]), tags = _c[0], setTags = _c[1];
    var search = useContext(SearchContext).search;
    var _d = useToggleNavbar(), navbarBlock = _d[0], clearNavbarBlock = _d[1];
    useScrollToTop(0, 0);
    useSetTitle("Fya | Find Agencies");
    useEffect(function () {
        clearNavbarBlock();
        if (search) {
            setLocation(search.location);
            setTags(search.tags);
        }
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var request, data, success;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axiosClient.get("/agency", {})];
                        case 1:
                            request = _a.sent();
                            data = request.data, success = request.success;
                            setAgencies(data);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    }, []);
    useEffect(function () {
        tags.forEach(function (e) {
            var tagInput = document.getElementById(e);
            if (tagInput)
                tagInput.checked = true;
        });
    }, [tags]);
    var handleService = function (value) {
        if (tags)
            if (tags.includes(value)) {
                setTags(function (cur) { return cur.filter(function (v) { return v !== value; }); });
            }
            else {
                setTags(function (cur) { return __spreadArray(__spreadArray([], cur, true), [value], false); });
            }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Section, { className: "agencies-page-primary" },
            React.createElement("h1", null, "Here's some of agencies"),
            React.createElement("hr", null)),
        React.createElement("form", { className: "form-section-search flex relative", id: "filter-section" },
            React.createElement("label", { className: "relative", htmlFor: "location" },
                React.createElement("input", { placeholder: "Location", id: "location", name: "location", value: location }),
                React.createElement("label", { id: "service-agency-search", className: clsx("absolute flex"), htmlFor: "toggle" },
                    React.createElement(FontAwesomeIcon, { icon: faSearch }),
                    "Service",
                    React.createElement(FontAwesomeIcon, { id: "arrow", icon: faSortDown })),
                React.createElement("input", { type: "checkbox", id: "toggle", name: "toggle" }),
                React.createElement("div", { id: "service-section" },
                    React.createElement("ul", { className: "tags-container flex" },
                        React.createElement(Tag, { tag_value: "Brand Management", tag_id: "BM", name: "services", isChecked: tags.includes("BM"), onClickEvent: function (e) {
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
                            } })),
                    React.createElement("hr", null)),
                React.createElement("span", null))),
        React.createElement(Section, { className: "agency-result" },
            React.createElement("ul", { className: "agencies-container flex" }, agencies === null || agencies === void 0 ? void 0 : agencies.filter(function (v) {
                var _a, _b;
                return location !== "" && tags.length > 0
                    ? ((_a = v.location) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === (location === null || location === void 0 ? void 0 : location.toLowerCase()) &&
                        (tags === null || tags === void 0 ? void 0 : tags.every(function (e) { return v.tags.includes(e); }))
                    : location === ""
                        ? tags.length > 0
                            ? tags === null || tags === void 0 ? void 0 : tags.every(function (e) { return v.tags.includes(e); })
                            : v
                        : ((_b = v.location) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === (location === null || location === void 0 ? void 0 : location.toLowerCase());
            }).map(function (v) {
                var tags = v.tags, name = v.name, description = v.description, _id = v._id;
                return (React.createElement(AgencyCard, { key: _id, id: _id, title: name, tag: tags, desc: description }));
                return null;
            })),
            React.createElement("br", null),
            React.createElement("div", null))));
}
//# sourceMappingURL=AgenciesPage.js.map