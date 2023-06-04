var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useEffect } from "react";
import ButtonSubmitForm from "../Button/ButtonSumitForm";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag/tag";
import { useScrollBlock } from "../../hook/useStopScroll";
import clsx from "clsx";
export default function SearchAgencyForm() {
    var _a = useState(""), location = _a[0], setLocation = _a[1];
    var _b = useState([]), service = _b[0], setService = _b[1];
    var _c = useScrollBlock(), allowScroll = _c[0], blockScroll = _c[1];
    var navigate = useNavigate();
    var handleLocation = function (e) {
        setLocation(e.currentTarget.value);
    };
    useEffect(function () {
        console.log(service);
    }, [service]);
    var handleService = function (value) {
        console.log("Call");
        if (service.includes(value)) {
            setService(function (cur) { return cur.filter(function (v) { return v !== value; }); });
        }
        else {
            setService(function (cur) { return __spreadArray(__spreadArray([], cur, true), [value], false); });
        }
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        return navigate("/agency?location=".concat(location, "&service=").concat(service));
    };
    return (React.createElement("form", { className: "form-section-search flex relative", onSubmit: handleSubmit },
        React.createElement("label", { className: "relative", htmlFor: "location" },
            React.createElement("input", { placeholder: "Location", id: "location", name: "location", onChange: handleLocation }),
            React.createElement("label", { id: "service-agency-search", className: clsx("absolute flex"), htmlFor: "toggle" },
                React.createElement(FontAwesomeIcon, { icon: faSearch }),
                "Service",
                React.createElement(FontAwesomeIcon, { id: "arrow", icon: faSortDown })),
            React.createElement("input", { type: "checkbox", id: "toggle", name: "toggle" }),
            React.createElement("div", { id: "service-section" },
                React.createElement("ul", { className: "flex" },
                    React.createElement(Tag, { tag_value: "Advertise", tag_id: "ATS", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("AT");
                        } }),
                    React.createElement(Tag, { tag_value: "Event Planning", tag_id: "EPS", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("EP");
                        } }),
                    React.createElement(Tag, { tag_value: "Market Research", tag_id: "MRS", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("MR");
                        } }),
                    React.createElement(Tag, { tag_value: "Freelancer", tag_id: "FLS", name: "services", onClickEvent: function (e) {
                            e.stopPropagation();
                            handleService("FL");
                        } })),
                React.createElement("hr", null),
                React.createElement(ButtonSubmitForm, { button_string: "Search Agencies" })),
            React.createElement("span", null)),
        React.createElement(ButtonSubmitForm, { button_string: "Search Agencies" })));
}
//# sourceMappingURL=SearchAgencyForm.js.map