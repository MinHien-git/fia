import "./Form.scss";
import Tag from "../Tag/tag";
import React, { useState, useEffect } from "react";
import InputField from "../InputForm/InputField";
import DoubleSlider from "../InputForm/DoubleSlider";
export default function PostProjectForm() {
    var _a = useState(0), currentPage = _a[0], setCurrentPage = _a[1];
    var maxPage = 5;
    useEffect(function () {
        console.log(currentPage);
        var newPage = document.getElementById("post-section-" + currentPage);
        newPage === null || newPage === void 0 ? void 0 : newPage.classList.add("active");
    }, [currentPage]);
    var NextPage = function () {
        if (currentPage < maxPage - 1) {
            var oldPage = document.getElementById("post-section-" + currentPage);
            oldPage === null || oldPage === void 0 ? void 0 : oldPage.classList.remove("active");
            setCurrentPage(currentPage + 1);
        }
    };
    var PreviousPage = function () {
        if (currentPage > 0) {
            var oldPage = document.getElementById("post-section-" + currentPage);
            oldPage === null || oldPage === void 0 ? void 0 : oldPage.classList.remove("active");
            setCurrentPage(currentPage - 1);
        }
    };
    return (React.createElement("form", { className: "form-section flex relative" },
        React.createElement("div", { className: "section-container flex" },
            React.createElement("section", { className: "flex active", id: "post-section-0" },
                React.createElement("h2", { className: "text-center logo" }, "Fya"),
                React.createElement("div", { className: "tags-container flex" },
                    React.createElement("p", { className: "text-center" }, "Please fill out the form so we can find the right agencies for your need"))),
            React.createElement("section", { className: "flex", id: "post-section-1" },
                React.createElement("h3", null, "What service do you need"),
                React.createElement("ul", { className: "tags-container flex" },
                    React.createElement(Tag, { tag_value: "Brand Management", tag_id: "BM", name: "services" }),
                    React.createElement(Tag, { tag_value: "Media Relations", tag_id: "MR", name: "services" }),
                    React.createElement(Tag, { tag_value: "Social media management", tag_id: "SMM", name: "services" }),
                    React.createElement(Tag, { tag_value: "Outreach", tag_id: "OR", name: "services" }),
                    React.createElement(Tag, { tag_value: "Market Research", tag_id: "MR", name: "services" }),
                    React.createElement(Tag, { tag_value: "Event Planning", tag_id: "EP", name: "services" }),
                    React.createElement(Tag, { tag_value: "Communication Training", tag_id: "CT", name: "services" }),
                    React.createElement(Tag, { tag_value: "Write internal ads", tag_id: "WIA", name: "services" }),
                    React.createElement(Tag, { tag_value: "Content Marketing", tag_id: "CM", name: "services" }),
                    React.createElement(Tag, { tag_value: "Print Ads", tag_id: "PA", name: "services" }),
                    React.createElement(Tag, { tag_value: "TVC", tag_id: "TVC", name: "services" }),
                    React.createElement(Tag, { tag_value: "FB & CC MARKETING", tag_id: "FBC", name: "services" }))),
            React.createElement("section", { className: "flex", id: "post-section-2" },
                React.createElement("h3", null, "Which location of Agency do you want to work with?"),
                React.createElement(InputField, { id: "location", label: "location" })),
            React.createElement("section", { className: "flex", id: "post-section-3" },
                React.createElement("h3", null, "Which size of agencies would you prefer?"),
                React.createElement("div", { className: "ratio-input-container" },
                    React.createElement("div", { className: "ratio-input" },
                        React.createElement("input", { type: "radio", id: "small", name: "size", value: "small" }),
                        React.createElement("label", { htmlFor: "small" }, "Small agencies (1-10)")),
                    React.createElement("div", { className: "ratio-input" },
                        React.createElement("input", { type: "radio", id: "medium", name: "size", value: "medium" }),
                        React.createElement("label", { htmlFor: "medium" }, "Medium agencies (11-50)")),
                    React.createElement("div", { className: "ratio-input" },
                        React.createElement("input", { type: "radio", id: "large", name: "size", value: "large" }),
                        React.createElement("label", { htmlFor: "large" }, "Large agencies (51+)")),
                    React.createElement("div", { className: "ratio-input" },
                        React.createElement("input", { type: "radio", id: "none", name: "size", value: "none" }),
                        React.createElement("label", { htmlFor: "none" }, "I don't care")))),
            React.createElement("section", { className: "flex", id: "post-section-4" },
                React.createElement("h3", null, "What range of budget do you want to find?"),
                React.createElement(DoubleSlider, null))),
        currentPage === 0 ? (React.createElement("div", { className: "form-section-button-container" },
            React.createElement("div", { id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs w100", onClick: NextPage }, "Let's start"))) : (React.createElement("div", { className: "form-section-button-container" },
            React.createElement("div", { id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs w100", onClick: NextPage }, "next"),
            React.createElement("div", { id: "postproject-previous-btn", className: "btn stop", onClick: PreviousPage }, "previous")))));
}
//# sourceMappingURL=PostProjectForm.js.map