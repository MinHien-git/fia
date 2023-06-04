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
import React, { useEffect, useState } from "react";
import Section from "../components/Section/Section";
import { useSearchParams } from "react-router-dom";
import Tag from "../components/Tag/tag";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import AgencyCard from "../components/Card/AgencyCard";
import useScrollToTop from "../hook/useScrollToTop";
import axiosClient from "../api/axiosClient";
export default function AgenciesPage() {
    var _a;
    var searchParams = useSearchParams()[0];
    var _b = useState([]), agencies = _b[0], setAgencies = _b[1];
    var _c = useState(searchParams.get("location")), location = _c[0], setLocation = _c[1];
    var _d = useState((_a = searchParams.get("service")) === null || _a === void 0 ? void 0 : _a.split(",")), services = _d[0], setServices = _d[1];
    useScrollToTop(0, 0);
    useEffect(function () {
        HandleTag();
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var request, data, success;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axiosClient.get("/agency")];
                        case 1:
                            request = _a.sent();
                            console.log(request);
                            data = request.data, success = request.success;
                            setAgencies(data);
                            console.log(success);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    }, []);
    var HandleTag = function () {
        services === null || services === void 0 ? void 0 : services.forEach(function (v) {
            var tag = document.getElementById("".concat(v));
            if (tag)
                tag.checked = true;
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Section, { className: "agencies-page-primary" },
            React.createElement("h1", null, "Here's some of agencies"),
            React.createElement("hr", null)),
        React.createElement("form", { className: "form-section-search flex relative", id: "filter-section" },
            React.createElement("label", { className: "relative", htmlFor: "location" },
                React.createElement("input", { placeholder: "Location", id: "location", name: "location" }),
                React.createElement("label", { id: "service-agency-search", className: clsx("absolute flex"), htmlFor: "toggle" },
                    React.createElement(FontAwesomeIcon, { icon: faSearch }),
                    "Service",
                    React.createElement(FontAwesomeIcon, { id: "arrow", icon: faSortDown })),
                React.createElement("input", { type: "checkbox", id: "toggle", name: "toggle" }),
                React.createElement("div", { id: "service-section" },
                    React.createElement("ul", { className: "flex" },
                        React.createElement(Tag, { tag_value: "Advertise", tag_id: "AT", name: "services" }),
                        React.createElement(Tag, { tag_value: "Event Planning", tag_id: "EP", name: "services" }),
                        React.createElement(Tag, { tag_value: "Market Research", tag_id: "MR", name: "services" }),
                        React.createElement(Tag, { tag_value: "Freelancer", tag_id: "FL", name: "services" })),
                    React.createElement("hr", null)),
                React.createElement("span", null))),
        React.createElement(Section, { className: "agency-result" },
            React.createElement("ul", { className: "agencies-container flex" }, agencies.map(function (v) {
                var _a;
                if (((_a = v.page) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    var _b = v.page[0], tags = _b.tags, header = _b.header, content = _b.content, _id = _b._id;
                    return (React.createElement(AgencyCard, { id: _id, title: header, tag: tags, desc: content }));
                }
                return null;
            })),
            React.createElement("br", null),
            React.createElement("div", null))));
}
//# sourceMappingURL=AgenciesPage.js.map