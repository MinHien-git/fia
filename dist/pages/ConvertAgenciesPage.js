import React, { useEffect } from "react";
import useScrollToTop from "../hook/useScrollToTop";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import Section from "../components/Section/Section";
import ContentSection from "../components/ContentSection/ContentSection";
import "./ConvertAgencyPage.scss";
import InputField from "../components/InputForm/InputField";
import Tag from "../components/Tag/tag";
export default function ConvertToAgenciesPage() {
    var _a = useToggleNavbar(), navbarBlock = _a[0], clearNavbarBlock = _a[1];
    useScrollToTop(0, 0);
    useEffect(function () {
        clearNavbarBlock();
    }, []);
    return (React.createElement(ContentSection, { className: "business-page-primary relative" },
        React.createElement(Section, { className: "business-page-start-section" },
            React.createElement("img", { className: "wave", src: "./wave.svg", alt: "wave" }),
            React.createElement("h2", null, "Please fill out the form of your business"),
            React.createElement("div", { className: "form-section-button-container" },
                React.createElement("div", { id: "postproject-next-btn", className: "btn deep-blue-bg white-clrs w100" }, "Let's start"))),
        React.createElement(Section, { className: "business-page-infomation-section" },
            React.createElement("h2", null, "Your business infomation"),
            React.createElement("div", { className: "form-section-button-container" },
                React.createElement(InputField, { id: "name", label: "company name" })),
            React.createElement("p", null, "Which fields do you want to provide?"),
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
                React.createElement(Tag, { tag_value: "FB & CC MARKETING", tag_id: "FBC", name: "services" })))));
}
//# sourceMappingURL=ConvertAgenciesPage.js.map