var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useContext } from "react";
import ButtonSubmitForm from "../Button/ButtonSumitForm";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag/tag";
import clsx from "clsx";
import { SearchContext } from "../../context/searchContext";
export default function SearchAgencyForm() {
    var _a = useState(""), location = _a[0], setLocation = _a[1];
    var _b = useState([]), service = _b[0], setService = _b[1];
    var _c = useContext(SearchContext), search = _c.search, startSearch = _c.startSearch;
    var navigate = useNavigate();
    var handleLocation = function (e) {
        setLocation(e.currentTarget.value);
    };
    var handleService = function (value) {
        if (service.includes(value)) {
            setService(function (cur) { return cur.filter(function (v) { return v !== value; }); });
        }
        else {
            setService(function (cur) { return __spreadArray(__spreadArray([], cur, true), [value], false); });
        }
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        var search_param = {
            location: location,
            tags: service,
        };
        startSearch(search_param);
        return navigate("/agency");
    };
    return (React.createElement("form", { className: "form-section-search flex relative", onSubmit: handleSubmit },
        React.createElement("label", { className: "relative", htmlFor: "location" },
            React.createElement("input", { placeholder: "Location", id: "location", name: "location", onChange: handleLocation, value: location }),
            React.createElement("label", { id: "service-agency-search", className: clsx("absolute flex"), htmlFor: "toggle" },
                React.createElement(FontAwesomeIcon, { icon: faSearch }),
                "Service",
                React.createElement(FontAwesomeIcon, { id: "arrow", icon: faSortDown })),
            React.createElement("input", { type: "checkbox", id: "toggle", name: "toggle" }),
            React.createElement("div", { id: "service-section" },
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
                        } })),
                React.createElement("hr", null),
                React.createElement(ButtonSubmitForm, { button_string: "Search Agencies" })),
            React.createElement("span", null)),
        React.createElement(ButtonSubmitForm, { button_string: "Search Agencies" })));
}
//# sourceMappingURL=SearchAgencyForm.js.map